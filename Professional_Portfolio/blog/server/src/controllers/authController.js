// ============================================================================
// authController.js - The "Bouncer" Logic
// ============================================================================
// Takes credentials -> Checks them -> Issues a "Badge" (Token)
// ============================================================================

import jwt from 'jsonwebtoken';
import User from '../models/User.js';

// ============================================================================
// LOGIN Pattern
// URL: POST /api/auth/login
// ============================================================================
export const login = async (req, res) => {
    try {
        // --- STEP 1: INPUT ---
        // Get the credentials the user sent
        const { username, password } = req.body;

        // Validation: Did they send both?
        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: 'Please provide both username and password'
            });
        }

        // --- STEP 2: DATABASE ---
        // Find the user correctly
        // IMPORTANT: We used `select: false` in the model for "password".
        // So by default, Mongoose won't give us the password to check against.
        // We must explicitly ask for it using `.select('+password')`.
        const user = await User.findOne({ username }).select('+password');

        // Check if user exists
        if (!user) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials' // Don't say "User not found" (Security)
            });
        }

        // --- STEP 3: LOGIC (Check Password) ---
        // Use the method we created in User.js to compare
        const isMatch = await user.matchPassword(password);

        if (!isMatch) {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        }

        // --- STEP 4: LOGIC (Create Token) ---
        // If we are here, the user is real and the password is correct!
        // Let's create the "Digital Badge" (JWT)

        // Payload: What info is inside the badge? (Just the ID is enough)
        const payload = { id: user._id };

        // Sign the token
        // request -> header -> authorization: Bearer <token>
        const token = jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '30d' } // Badge expires in 30 days
        );

        // --- STEP 5: OUTPUT ---
        res.json({
            success: true,
            message: 'Login successful',
            token: token,
            user: {
                username: user.username,
                role: user.role
            }
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Server error',
            error: error.message
        });
    }
};
