import React from 'react'
import { useContext } from 'react'
import { GlobalContext } from '../Context/GlobalContext'
function IncomeExpenses() {
const {transactions}=useContext(GlobalContext);

const amounts=transactions.map((transaction)=>{return  transaction.amount});
const totalIncome=amounts.filter((amount)=>amount>0).reduce((previous,current)=>previous+=current,0);
const totalExpenses=amounts.filter((amount)=>amount<0).reduce((previous,current)=>previous+=current,0);
console.log(totalIncome);
console.log(totalExpenses);


  return (
    <div className='incomeExpenses'>

    <div className='income-expense-box'>
        <p className='income-header'>Income</p>
        <p className='income-amount'>{totalIncome}</p>
    </div>
    <div className='income-expense-box'>
    <p className='expense-header'>Expense</p>
    <p className='expense-amount'>{Math.abs(totalExpenses)}</p>
</div>
    </div>
  )
}

export default IncomeExpenses