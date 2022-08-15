import React from 'react'
import { GlobalContext} from '../Context/GlobalContext'
import { useContext ,useEffect} from 'react'

function TransactionList() {

const {transactions}=useContext(GlobalContext);
const {deleteTransaction}=useContext(GlobalContext);
const {getInitialTransactions}=useContext(GlobalContext);

function deleteList(id){
  console.log(id);
  deleteTransaction(id);
}

useEffect(()=>{
  getInitialTransactions();
},[])


  return (
    <>
    <h3 className='transaction-header'>History</h3>
    <div className="transactionList">
            { transactions.map((transaction)=>{
                const sign=transaction.amount>0?"green":"red";
                return(
                    <div className={`transaction-item ${sign}`} key={transaction.id}>
                  <button className='btn-delete' onClick={()=>deleteList(transaction._id)}>X</button>
                <p className='transaction-item-name'>{transaction.text}</p>
               <p className='transaction-item-price'>{transaction.amount}</p>
            </div>
            )})

            }
        
    </div>
    </>
  )
}

export default TransactionList