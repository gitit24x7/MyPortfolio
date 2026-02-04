import express from 'express';
import { login } from '../controllers/authController.js';
const router = express.Router();
//defining the route path
router.post('/login', login);
export default router;
