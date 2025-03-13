import express from 'express';
import { createPost, deletePost, fetchPost } from '../controllers/postController.js';

const router = express.Router();

router.post('/create', createPost);
router.delete('/delete', deletePost);
router.get('/fetch', fetchPost);

export default router;