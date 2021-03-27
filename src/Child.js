import React,{useContext,useState} from 'react'
import {TransactionContext} from './transcontext';
function Child () {
    let {Transaction,addTransaction} =useContext(TransactionContext)

    let [newDesc,setDesc]=useState("")

    let [newAmount,setAmount]=useState(0)
     const   handleAddition = (event) =>{
           event.preventDefault()
           console.log(newDesc,newAmount);
    }
    return (
        <div className="container">
            <h1 className="text-center">Expense Tracker</h1>
            <h3>Your Balance <br/> $260</h3>
            <div className="expense-container">
            <h3>INCOME <br/> $500</h3>
            <h3>EXPENSE <br/> $240</h3>

            </div>
            <h3>History</h3>
            <hr/>
            <ul className="transaction-list">
                {Transaction.map((transobj,ind)=>{
                           return(<li key={ind}>
                                 <span>{transobj.desc}</span>
                                  <span>{transobj.amount}</span>
                                </li>)

                })}
            </ul>
            <h3>Add new Transaction</h3>
            <hr/>
            <form className="transaction-form" onSubmit={handleAddition}>
                <label>
                    Enter Text<br/>
                     <input type="text" onChange={(ev)=>setDesc(ev.target.value)} required />
                </label>
                <br />
                <label>
                    Enter Amount<br />
                     <input type="number" onChange={(ev)=>setAmount(ev.target.value)} required/>
                </label>
                <br />
                <input type="submit" value="Add Transaction" />
            </form>
        </div>
    )
}
export default Child;
