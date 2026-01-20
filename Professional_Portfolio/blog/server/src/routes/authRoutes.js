// ============================================================================
// authRoutes.js - The "Login Door"
// ============================================================================

import express from 'express';
import { login } from '../controllers/authController.js';

const router = express.Router();

// Route:   POST /api/auth/login
// Goal:    Exchange password for a Token
router.post('/login', login);

export default router;
