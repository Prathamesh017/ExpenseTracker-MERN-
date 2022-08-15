import React, { useReducer } from "react";
import { createContext } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//initalstate
const initalState = {
  transactions: [],
  error:null,
  loading:true
};
// This is globalcontext
export const GlobalContext = createContext(initalState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initalState);
 
  async function getInitialTransactions(){
    try{
      // we are making just a /users request we have set proxy:"http//:localhost:3000" in package.json
         const res=await axios.get("/users");
         dispatch({
          type:"GET_INITIAL_TRANSACTIONS",
          payload:res.data.data,
         })
    }catch(e){
          dispatch({
            type:"TRANSACTION_ERRORS",
            payload:e.response.data.errors
          })
    }
  }
   async function deleteTransaction(id) {
    try {
      await axios.delete(`/users/${id}`);
      dispatch({ type: "DELETE", payload: id });
      
    } catch (e) {
      dispatch({
        type:"TRANSACTION_ERRORS",
        payload:e.response.data.errors
      })
    }

  }

  async function addTransaction(item){
     try {
      const config={
        headers:{
          'Content-type':'application/json',

        }
      }
        await axios.post("/users",item,config);
        dispatch({type:"ADD",payload:item})
      
     } catch (e) {
      dispatch({
        type:"TRANSACTION_ERRORS",
        payload:e.response.data.errors
      })
     }
  }

  return (
    <GlobalContext.Provider
      value={{
        // value atrribute values will be accessed  anywhere by useContext
        transactions: state.transactions,
        error:state.error,
        loading:state.loading,
        getInitialTransactions,
        deleteTransaction,
        addTransaction
      }} 
    >
      {children}
    </GlobalContext.Provider>
  );
};
