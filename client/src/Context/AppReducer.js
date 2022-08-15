export default (state,action)=>{
    switch(action.type){
        case "GET_INITIAL_TRANSACTIONS":
            return {
                ...state,
                loading:true,
                transactions:action.payload   
            }
        case "TRANSACTION_ERRORS":{
            return{
                ...state,
                error:action.payload
            }
        }
        case "DELETE":
            return{
             ...state,
            transactions:state.transactions.filter(transactions=>transactions._id !==action.payload)
          }
        case "ADD":{
            console.log(action.payload);
            return{

                ...state,
                transactions:[...state.transactions,action.payload]
            }
        }
        default:return state;
    }
}