import express from 'express';
import { createPost, deletePost, fetchPost, fetchAllPost, updatePost } from '../controllers/postController.js';

const router = express.Router();

router.post('/create', createPost);
router.delete('/delete', deletePost);
router.put('/update', updatePost);
router.get('/fetch', fetchPost);
router.get('/fetch-all', fetchAllPost);

export default router;