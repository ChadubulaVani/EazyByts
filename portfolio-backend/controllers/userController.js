const User = require("../models/userModel");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const registerUser = async(req,res)=>{
    const {name,email,password} = req.body;
    try{
        const userExists = await User.findOne({email})
        if(userExists) return res.status(400).json({message:"User already exists"})
            const hashedPassword = await bcrypt.hash(password,10);
        const newUser = await User.create({name,email,password:hashedPassword});
         const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ user: newUser, token });

    }catch(error){
        res.status(500).json({error:"Something went wrong"})
    }

}

const loginUser = async(req,res)=>{
    const {email,password} = req.body;
    try{
        const user = await User.findOne({email})
        if(!user) return res.status(400).json({message:"User not found"})
            const isMatch = await bcrypt.compare(password,user.password)
        if(!isMatch) return res.status(400).json({message:"Invalid Credentials"})
         const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });
        res.status(201).json({ user: user, token });

    }catch(error){
        res.status(500).json({error:"Something went wrong"})
    }
    console.log('LOGIN REQ BODY:', req.body);

}

module.exports = {registerUser,loginUser};