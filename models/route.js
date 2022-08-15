import mongoose from "mongoose";

const TransactionsSchema= new mongoose.Schema({
    // 
    text:{
        type:String,
        trim:true,
        required:[true,"Please Enter Some Text"]
    },
    amount:{
        type:Number,
        required:[true,"Please Enter Some Amount"]
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

export default mongoose.model("Transaction",TransactionsSchema);
