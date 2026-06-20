const mongoose=require("mongoose");
const validator=require('validator');
const jwt=require("jsonwebtoken");
const bcrypt=require("bcrypt");
const dotenv=require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;


const userSchema=new mongoose.Schema({
    emailId:{
        type:String,
        lowercase:true,
        required:true,
        unique:true,
        trim:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error("Invalid email address:"+value);
            }
        }
    },
    password:{
        type:String,
        required:true
    }
},{
    timeStamp:true
});

userSchema.methods.getJWT= async function(){
    const user=this;
    const token=await jwt.sign({_id:user._id},{SECRET_KEY},{expiresIn:'1h'});
    return token;
}

userSchema.methods.encryptPassword= async function(password){
    const passwordHash=await bcrypt.hash(password,10);
    return passwordHash;
}

module.exports=mongoose.model("User",userSchema);