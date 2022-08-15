import Transactions from "../models/route.js"
// @description -->it will get all Tranasction
//@route   --> http://127.0.0.1:3000/users
const getAllTransactions=async(req,res,next)=>{
    try {
        // this will find all tranacitons done overall till now return this data to client which we can show on screen
        const  transactions=await Transactions.find();
        return res.status(200).send({
            success:true,
            count:transactions.length,
            data:transactions
        })
        
    } catch (error) {
        return res.status(500).send({
            failure:true,
            message:"Server Failure "
        })
    }
}

// @description -->it will add a Tranasction
//@route   --> http://127.0.0.1:3000/users
const addTransactions= async (req,res,next)=>{
    try {
        const {text,amount}=req.body;
        // this will create a Transaction and add a entry to db
        const transacitons=await  Transactions.create(req.body)
        return res.status(201).send({
            success:true,
            data:transacitons
        })
        
    } catch (err) {
        // Checking if it is a Validation Error which means user has not enter properdetails
        if(err.name=="ValidationError"){
            //here we will recieve message that either  amount or text or both are not send by user
           //object.values will return an array of values will we can map  over to find exact message
            const message= Object.values(err.errors).map(value=>{
                 return value.message;
               });

            res.status(400).send({
                failure:true,
                message:message
            })
            
        }
        return res.status(500).send({
            failure:true,
            error:"Server Problem"
        })
    }
    
}


// @description -->it will delete a Tranasction
//@route   --> http://127.0.0.1:3000/users/:id
const DeleteTransactions=async(req,res,next)=>{
    const id=req.params.id;
    const transacitons=Transactions.findById(id);

    if(!transacitons){
        return res.status(404).send({
            failure:true,
            message:"No Transaction Found"
        })
    }
    await transacitons.remove();

    return res.status(200).send({
        success:true,
        message:"Transaction Deleted"
    })

    res.send("Succesfully");
}

export {addTransactions,DeleteTransactions,getAllTransactions};
