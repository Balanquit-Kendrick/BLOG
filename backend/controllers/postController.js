import Post from '../models/Post.js';

export const createPost = async(req, res) => {
    const { id, title, description, creator } = req.body;
    
    try {
      const newPost = await Post.create({
        id,
        title,
        description,
        creator,
      });
      
      res.status(201).json({ 
        message: "Post created successfully", 
        post: {
          id: newPost.id,
          title: newPost.title,
          description: newPost.description,
          creator: newPost.creator,
        },
      });
    } catch (error) {
      console.error("Signup Error:", error);
      res.status(500).json({ error: "Server error" });
    }
  };

export const deletePost = async(req, res) => {
  const { id } = req.body;
  try {
    await Post.findOne({id});
    
    res.status(201).json({ 
      message: "Post deleted successfully", 
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
    return error
  }
};

export const fetchPost = async(req, res) => {
  const { id } = req.body;
  try {
    const post = await Post.findOne({id});
    
    res.status(201).json({ 
      message: "Post fetched successfully", 
      post: post
    });

  } catch (error) {
    console.error("Signup Error:", error);
    res.status(500).json({ error: "Server error" });
    return error
  }
};