import express from "express";
import dotenv from "dotenv";
import colors from "colors"; // yellow color is appearing due to this(yellow.bold);
import router from "./Routes/routes.js";
import connectDB from "./config/database.js";



const app=express();
app.use(express.json());
// dotenv is used to make our custom globale variables part of
//  global environemtn and also access them
dotenv.config({path:"./config/config.env"});
connectDB();
const PORT=process.env.PORT||5000; // process.env is path to access all env variables;


//will handle all basic url request
// app.get("/",(req,res)=>{
//     res.send("Hello From Server JS");
// })
// will handle /users request to routes
app.use('/users',router);


app.listen(PORT,()=>{
    console.log((`Listening Server in ${process.env.NODE_ENV} on Port ${PORT}`).yellow.bold);
})
