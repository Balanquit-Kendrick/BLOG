import bcrypt from 'bcryptjs';
import User from '../models/User.js';

export const createUser = ( async(req, res) => {
  console.log('Signup Request Received');
  
  const { firstname, lastname, email,password, confirmPassword } = req.body;
  
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const newUser = await User.create({
      firstname,
      lastname,
      email,
      password, 
      confirmPassword, 
    });

    res.status(201).json({ message: "User registered successfully", user: newUser });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
  }
});
