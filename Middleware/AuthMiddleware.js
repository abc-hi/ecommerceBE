


import jwt from 'jsonwebtoken';
import User from '../Models/UserSchema.js';
import dotenv from 'dotenv';
dotenv.config();

const adminAuth = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];

    if (!token) {
        return res.status(401).json({ message: "Token is missing" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        console.log("Decoded Token:", decoded);

        const user = await User.findById(decoded.id);
        console.log("Fetched User:", user); // Log user details

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        console.log("User Role:", user.role); // Log the user's role to verify it
        if (user.role !== 'admin') {
            return res.status(403).json({ message: "Access Denied: Admins only" });
        }

        req.user = user;
        next();

    } catch (error) {
        console.error("Error in adminAuth:", error);
        res.status(500).json({ message: "Invalid token or internal server error", error: error.message });
    }
};
export default adminAuth;