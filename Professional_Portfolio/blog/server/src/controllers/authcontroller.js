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
            return res.status(401).json({ message: "Invalid Username" })
        }

        const isPasswordValid = await bcrypt.compare(password, admin.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid Password" })
        }

        //now we will generate a token for the admin and then we will send it to the frontend
        const token = jsonwebtoken.sign(
            { id: admin._id },
            process.env.JWT_SECRET,
            { expiresIn: '1d' }
        );

        res.status(200).json({
            message: "Login successful",
            token,
            username: admin.username
        });





    }
    catch (error) {

        console.log(error);
        return res.status(500).json({ message: "Internal Server Error during login, not your fault at all" })

    }

}

