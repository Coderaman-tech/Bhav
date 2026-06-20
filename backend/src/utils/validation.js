const validator=require('validator');


const validatesSignUpData=(req)=>{
    const {emailId,password}=req.body;
    if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please enter the strong password");
    }
};

module.exports={validatesSignUpData};