import React from 'react'
import { useState } from 'react'
import { GlobalContext } from '../Context/GlobalContext';
import {useContext} from "react"

function AddTransaction() {
const [text,setText]=useState("");
const [amount,setAmount]=useState(0);
const {addTransaction,transactions}=useContext(GlobalContext);



function addItem(){
const new_item={
  id:transactions.length+1,
  text:text,
  amount:amount*1,
}
addTransaction(new_item);

setText("");
setAmount(0);
}


  return (
    <div className='addTransaction'>
        <h4 className='addTransaction-Header'>Add new Transaction </h4>
        <hr></hr>
        <form className='form'>
            <label htmlFor='text'  className='labels'> Text</label>
        <input placeholder="Enter Name Here" value={text} onChange={(e)=>{setText(e.target.value)}}></input>
        <label htmlFor='amount' className='labels'> Amount</label>
        <input placeholder="Enter Amount Here" value={amount} onChange={(e)=>{setAmount(e.target.value)}}></input>
        </form>
        <button className='btn' onClick={addItem}> Add Transactions</button>
    </div>
  )
}

export default AddTransaction