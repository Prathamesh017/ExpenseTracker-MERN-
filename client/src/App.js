import React from 'react'
import Header from './Components/Header';
import Balance from './Components/Balance';
import IncomeExpenses from './Components/IncomeExpenses';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import { GlobalProvider } from './Context/GlobalContext';
import "./App.css";
function App() {
  return (
    <GlobalProvider>

    <div className='main-container'>
     <div className='container'>
      
      <Header></Header>
      <Balance></Balance>
      <IncomeExpenses></IncomeExpenses>
      <TransactionList></TransactionList>
      <AddTransaction></AddTransaction>
    </div>
     </div>
    </GlobalProvider>
  )
}

export default App