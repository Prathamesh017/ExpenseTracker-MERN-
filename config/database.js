import mongoose from "mongoose";


const connectDB=async()=>{
    try{
        // trying to making connection with Database;
       const conn=await mongoose.connect(process.env.MONGO);
      
       console.log(`Datase Connected ${conn.connection.host}` .cyan.underline.bold);
    }
    catch(e){
          console.log(e.message);
          process.exit(1);

    }

}
export default connectDB;