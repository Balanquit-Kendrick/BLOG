import express from 'express';
import { signUpUser, signInUser, getUserProfile } from '../controllers/userController.js';
import { authenticateToken } from '../utilities.js';

const router = express.Router();

//Authentication routes
router.post('/auth/signup', signUpUser);
router.post('/auth/login', signInUser);
router.get('/auth/get-user', authenticateToken, getUserProfile);

export default router;