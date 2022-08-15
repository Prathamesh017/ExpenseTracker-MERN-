import express from "express";
import { getAllTransactions,DeleteTransactions,addTransactions } from "../controller/routes.js"
const router=express.Router();



// this with handle all /users request according get/post and then send the request to particular method
router.route("/").get(getAllTransactions).post(addTransactions);

//this will handle all /users/:id request bcz we need id to delete and send the request to DeleteTranaction Method
router.route("/:id").delete(DeleteTransactions);


export default  router;