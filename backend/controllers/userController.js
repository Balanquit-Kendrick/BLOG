import bcrypt from 'bcryptjs';
import User from '../models/User.js';
import jwt from 'jsonwebtoken'

export const signUpUser = async(req, res) => {
  const { id, name, email, password, confirmPassword } = req.body;
  
  if (password !== confirmPassword) {
    return res.status(400).json({ error: "Passwords do not match" });
  }

  try {
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: "Email already in use" });
    }

    const newUser = await User.create({
      id,
      name,
      email,
      password, 
    });

    res.status(201).json({ 
      message: "User registered successfully", 
      user: newUser,
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
  }
};


export const signInUser = async(req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ where: { email } });
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const accessToken = jwt.sign({ user }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });

    res.status(200).json({
      message: "Login successful",
      accessToken: accessToken,
      user: user,
    });

  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ error: "Server error" });
  }
}

export const getUserProfile = async(req, res) => {
  const { user }  = req.user;

  try {
    res.status(200).json({ 
      id: user.id,
      name: user.name,
      email: user.email
     });
  } catch (error) {
    console.error("Get User Profile Error:", error);
    res.status(500).json({ error: error });
  }
};

export const deleteUserProfile = async(req, res) => {
  const { user }  = req.user;
  const id = user.id
  try {
    const deleteUser = await User.findOne({where: {id: id} });
    await deleteUser.destroy();
    
    res.status(201).json({ 
      message: "Profile deleted successfully", 
    });
  } catch (error) {
    console.error("Deleting Profile Failed:", error);
    res.status(500).json({ error: "Server error" });
  }
};