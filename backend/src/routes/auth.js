const express=require("express");
const authRouter=express.Router();
const User=require("../models/user");
const bcrypt=require("bcrypt");
const {validatesSignUpData}=require("../utils/validation");

authRouter.post("/signup",async(req,res)=>{
    try{
        validatesSignUpData(req);
        const {emailId,password}=req.body;
        const user=new User({
            emailId,
            password:password
        });
        const passwordHash=await user.encryptPassword(password);
        user.password=passwordHash;
        await user.save();
        res.send("User added successfully");
    }catch(err){
        res.status(500).send("Error : "+err.message);
    }
});

authRouter.post("/login",async(req,res)=>{
    try{
        const {emailId,password}=req.body;
        const user=await User.findOne({emailId:emailId});
        if(!user){
            throw new Error("Invalid Credentials");
        }
        const isPasswordValid=await bcrypt.compare(password,user.password);
        if(isPasswordValid){
            const token=await user.getJWT();
            res.cookie("token",token,{expires:new Date(Date.now()+8*3600000)});
            res.send("Login successfull!!!");
        }
        else{
            throw new Error("Invalid Credentials");
        }
    }catch(err){
        res.status(500).send("Error : "+err.message);
    }
});

authRouter.post("/logout",async(req,res)=>{
    res.cookie("token",null,{
        expires:new Date(Date.now()),
    });
    res.send("Logout Successful!!!");
});

module.exports=authRouter;