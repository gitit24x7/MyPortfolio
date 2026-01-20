// ============================================================================
// User.js - The "ID Card" of our System
// ============================================================================
// This model defines what a "User" looks like in our database.
// Since this is a personal blog, we will mostly rely on ONE user (YOU).
// ============================================================================

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'; // We need to install this! (npm install bcryptjs)

// ----------------------------------------------------------------------------
// 1. THE SCHEMA (The Shape of the Data)
// ----------------------------------------------------------------------------
const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: [true, 'Username is required'],
            unique: true, // No two users can have the same name
            trim: true
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: 6, // Minimum security rule
            select: false // SECURITY FEATURE: Don't return password by default when finding users
        },
        role: {
            type: String,
            enum: ['admin', 'guest'], // Only these two values are allowed
            default: 'admin' // By default, you are the boss
        }
    },
    {
        timestamps: true
    }
);

// ----------------------------------------------------------------------------
// 2. PASSWORD ENCRYPTION (The "Hash")
// ----------------------------------------------------------------------------
// We NEVER store plain text passwords (like "123456").
// If a hacker steals our specific database, they would see "123456" and login.
// Instead, we "Hash" it -> "$2a$10$abcdefg..." (Scrambled eggs).
// You can't turn scrambled eggs back into a whole egg.
// ----------------------------------------------------------------------------

// This runs automatically BEFORE ("pre") saving to the database
userSchema.pre('save', async function () {
    // If the password hasn't changed (e.g. we are just updating the username), skip this.
    if (!this.isModified('password')) {
        return;
    }

    // Generate a "Salt" (random data to make the hash unique)
    const salt = await bcrypt.genSalt(10);

    // Hash the password with the salt
    this.password = await bcrypt.hash(this.password, salt);
});

// ----------------------------------------------------------------------------
// 3. PASSWORD CHECKER (The "Key Comparator")
// ----------------------------------------------------------------------------
// This method allows us to check if an entered password matches the stored hash.
// Usage: const isMatch = await user.matchPassword(enteredPassword);

userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// ----------------------------------------------------------------------------
// 4. EXPORT
// ----------------------------------------------------------------------------
const User = mongoose.model('User', userSchema);
export default User;
