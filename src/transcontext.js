import React,{ createContext,useReducer} from "react"
import TransactionReducer from './transReducer'
const  initailTransaction =[
    { amount:400,desc:"cash"},
    { amount:-40,desc:"cold Drink"},
    { amount:200,desc:"camra"}
]
export const TransactionContext = createContext(initailTransaction)

export const TransationProvider =({childern}) =>{

let [state,dispatch]=useReducer(TransactionReducer,initailTransaction)
function addTransaction(transObj){

    dispatch({
           type:"ADD Transaction",
           payload:{
               amount:transObj.amount,
               desc:transObj.desc
               
           },
    })
}
    return(
        <TransactionContext.Provider value={

            {
                transaction: state,
                addTransaction: addTransaction
            }
        }>
                       {childern}

        </TransactionContext.Provider>
    )

}