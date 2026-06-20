const dotenv=require('dotenv').config();
const password = process.env.PASSWORD;
const mongoose=require("mongoose");

const connectDB=async()=>{
    await mongoose.connect(`mongodb+srv://coderaman_tech:${password}@namastenode.llz3i4t.mongodb.net/Bhav`);
};

module.exports=connectDB;