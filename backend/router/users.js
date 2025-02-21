import express from 'express';
import { signUpUser, signInUser } from '../controllers/userController.js';

const router = express.Router();

//Authentication routes
router.post('/auth/signup', signUpUser);
router.post('/auth/login', signInUser);

export default router;