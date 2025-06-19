import { User } from "../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

// register handler
export const register = async (req, res) => {
    try {
        const { username, email, password, confirmPassword, gender } = req.body;

        if (!username || !email || !password || !confirmPassword || !gender) {
            return res.status(400).json({
                message: "All field are required"
            })
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ message: "Invalid email format" });
        }

        if (password.length < 5) {
            return res.status(400).json({ message: "Password must be at least 8 characters long" });
        }


        if (password !== confirmPassword) {
            return res.status(400).json({
                message: "Password are not matched"

            })
        }

        const user = await User.findOne({ username });
        if (user) {
            return res.status(400).json({
                message: "The user is already exist with this username"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10);


        const userData = await User.create(
            {
                username,
                email,
                password: hashedPassword,
                gender
            }
        )


        return res.status(200).json({
            success: true,
            message: "Account created successfully",
            userData
        })

    } catch (err) {
        console.error(err);
    }
}


//login handler
export const login = async (req, res) => {
    try {
        const { username, password} = req.body;

        if (!username || !password) {
            return res.status(400).json({
                message: "All field are required"
            })
        }

        const user = await User.findOne({ username });

        let isPswdMatch = 0;

        if (user) isPswdMatch = await bcrypt.compare(password, user.password);

        if (!isPswdMatch || !user) {
            return res.status(400).json({
                message: "Incorrect Password or username"
            })
        }


        const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, { expiresIn: '1d' });
         

        return res.status(200)
            .cookie("token", token, {
                httpOnly: true,
                secure: true,
                sameSite: "none",
                maxAge: 24 * 60 * 60 * 1000
            })
            .json({
                message: "Login successfully"
            })

    } catch (err) {
        console.error(err);
    }
};


//loggedin user
export const loginUser = async (req, res) => {
     
    try {
        const userId = req.id;
        const user = await User.findOne({ _id : userId});

        return res.status(200).json(user);
    }
    catch (err) {
        console.error(err);
    }
}
