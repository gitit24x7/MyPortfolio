
import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    try {
        console.log('Testing MongoDB connection...');
        console.log(`Connecting to: ${process.env.DATABASE_URL.replace(/:([^:@]+)@/, ':****@')}`); // Hide password

        const conn = await mongoose.connect(process.env.DATABASE_URL, {
            serverSelectionTimeoutMS: 5000,
        });

        console.log(`✅ SUCCESS: Connected to MongoDB at ${conn.connection.host}`);
        process.exit(0);
    } catch (error) {
        console.error(`❌ FAILURE: MongoDB Connection Error: ${error.message}`);
        if (error.codeName === 'AtlasError') {
            console.error('Check if your IP address is whitelisted in MongoDB Atlas Network Access.');
        }
        process.exit(1);
    }
};

connectDB();
