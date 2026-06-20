const express=require("express");
const authRouter=express.Router();
const User=require("../models/user");
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


module.exports=authRouter;