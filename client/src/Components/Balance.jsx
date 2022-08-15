import React from 'react'
import { GlobalContext } from '../Context/GlobalContext'
import { useContext } from 'react'
function Balance() {
const {transactions}=useContext(GlobalContext);
const amounts=transactions.map((transactions)=>{
    return transactions.amount;
})
const balance=amounts.reduce((prev,curr)=>(prev+curr),0)
console.log("inside balance");
  return (
    <div className='balance'>
        <h2 className='balance-header'>Your Balance</h2>
        <p className='balance-amount'>${balance}</p>
    </div>
  )
}

export default Balance