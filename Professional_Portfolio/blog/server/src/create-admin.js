import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from './models/Admin.js';
import 'dotenv/config';

//we are creating an admin user for our blog, the code format wont have any re, res like in controller functions we had, since this script does not have to do anything with a req or res

export const createAdmin = async () => {
    try {

      await mongoose.connect(process.env.DATABASE_URL);
        console.log("Connected to MongoDB");

        //we are deleting all existing admins, so that we can create a new admin, in case password is forgotten or admin is deleted.
        await Admin.deleteMany({});
        console.log("Deleted all existing admins");

        //now we will write the logic to hash the password that the admin would enter
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash("ADMIN_PASSWORD", salt);
        console.log("password hashed successfully");
        
        //now we will create the admin user and the below line is a shortcut that save it as well we do not need to write it separately.
        const admin = await Admin.create({
    username: "admin",
    password: hashedPassword
})
 
        console.log("🎉 Admin created successfully!");

        process.exit(0);
    }

    catch (error){
        console.log("Error creating admin:", error);
        process.exit(1);


    }
}

//now we will call the function so that it creates the admin

createAdmin();
