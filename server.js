import express from "express";
import dotenv from "dotenv";
import colors from "colors"; // yellow color is appearing due to this(yellow.bold);
import router from "./Routes/routes.js";
import connectDB from "./config/database.js";
import path from "path"


const app=express();
app.use(express.json());
// dotenv is used to make our custom globale variables part of
//  global environemtn and also access them
dotenv.config({path:"./config/config.env"});
connectDB();
const PORT=process.env.PORT||5000; // process.env is path to access all env variables;


if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}
app.use('/users',router);

if(process.env.NODE_ENV==="production"){
    app.use(express.static("client/build"));

    app.get("*",(req,res)=>res.send(path.resolve(__dirname,"client","build","index.html")))
}


app.listen(PORT,()=>{
    console.log((`Listening Server in ${process.env.NODE_ENV} on Port ${PORT}`).yellow.bold);
})
