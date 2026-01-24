import Post from "../models/Post.js";
import Admin from "../models/Admin.js";
import jsonwebtoken from "jsonwebtoken";
import bcrypt from "bcryptjs";

export const login = async (req, res) => {

    try {

        //handle if no details entered 
        const { username, password } = req.body;
        if (!username || !password) {
            return res.status(400).json({ message: "Please provide username and password" })
        }

        //handle if admin not found, inncorrect details entered.

        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" })
        }

        //now we will generate a token for the admin



    }
    catch (error) {

    }

}

