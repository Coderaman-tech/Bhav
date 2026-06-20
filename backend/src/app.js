const express=require("express");
const connectDB=require("./config/database");
const cookieParser=require("cookie-parser");

const app=express();
app.use(cookieParser());
app.use(express.json());

const authRouter=require("./routes/auth");

app.use("/",authRouter);

connectDB().then(()=>{
    console.log("Database connection established...");
    app.listen(3001,()=>{
        console.log("Server is connected on port 3001");
    });
}).catch(err=>{
    console.error("Database cannot be connected " + err.message);
});