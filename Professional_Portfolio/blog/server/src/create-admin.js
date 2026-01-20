// ============================================================================
// create-admin.js - The "Key Maker" Script (SECURE VERSION)
// ============================================================================
// 🧠 WHAT IS THIS?
// This script creates the FIRST user (You/Admin) for your blog.
//
// 🔒 SECURITY UPDATE:
// We are now loading the password from the .env file instead of hardcoding it.
// This way, if you commit this file to GitHub, your password isn't exposed!
// ============================================================================

import mongoose from 'mongoose';
import dotenv from 'dotenv';
import User from './models/User.js';

// Load .env variables
dotenv.config();

// ----------------------------------------------------------------------------
// GET CREDENTIALS FROM .ENV
// ----------------------------------------------------------------------------
// We check if the environment variables exist. If not, we stop.
const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;

if (!ADMIN_USERNAME || !ADMIN_PASSWORD) {
    console.error('❌ ERROR: Please define ADMIN_USERNAME and ADMIN_PASSWORD in your .env file.');
    console.error('   Example .env:');
    console.error('   ADMIN_USERNAME=myname');
    console.error('   ADMIN_PASSWORD=mySuperSecretPassword123!');
    process.exit(1);
}

const createAdmin = async () => {
    try {
        console.log('🔑 Starting Admin Creation...');

        // 1. Connect to Database
        await mongoose.connect(process.env.DATABASE_URL);
        console.log('✅ Connected to MongoDB');

        // 2. Check if Admin already exists
        const existingAdmin = await User.findOne({ username: ADMIN_USERNAME });
        if (existingAdmin) {
            console.log(`⚠️  Admin user '${ADMIN_USERNAME}' already exists. No changes made.`);
            process.exit(0);
        }

        // 3. Create the new User
        // The User model will Hash this password automatically.
        const user = await User.create({
            username: ADMIN_USERNAME,
            password: ADMIN_PASSWORD,
            role: 'admin'
        });

        console.log('🎉 Admin User Created Successfully!');
        console.log(`👤 Username: ${user.username}`);
        console.log(`🔐 Password: [HIDDEN] (Encrypted in DB)`);

        process.exit(0);

    } catch (error) {
        console.error('❌ Error creating admin:', error.message);
        process.exit(1);
    }
};

createAdmin();
