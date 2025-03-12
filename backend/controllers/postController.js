import Post from '../models/Post.js';

export const createPost = async(req, res) => {
    const { id, title, description, creator } = req.body;
    
    try {
      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: "Email already in use" });
      }
  
      const newPost = await Post.create({
        id,
        title,
        description,
        creator,
      });
  
      res.status(201).json({ 
        message: "Post created successfully", 
        post: newPost,
      });
  
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  };