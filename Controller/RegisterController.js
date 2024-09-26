import User from "../Models/UserSchema.js";
import bcryptjs from 'bcryptjs';

export const registerControllerfn = async(req,res)=>{
    const{name,email,password,confirmPassword,role} = req.body;
    const hashPassword = await bcryptjs.hash(password,10)

    try {
        if (password !== confirmPassword) {
            return res.status(400).json({ message: "Passwords do not match" });
        }
        const newUser = new User({name,email,password:hashPassword,role})
        await newUser.save()
        res.status(200).json({message:"User Registered successfully",data:newUser})
    } catch (error) {
        console.log(error)
        res.status(500).json({error:"Registeration failed, Internal Server Error"})
    }
}
