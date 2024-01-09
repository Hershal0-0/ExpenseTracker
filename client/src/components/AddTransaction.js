import React,{useState,useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

const AddTransaction = () => {
    const [text,setText]=useState("")
    const [amount,setAmount]=useState(0)
    const {addTransaction} = useContext(GlobalContext)

    const onSubmit=(e)=>{
        e.preventDefault();
        const newTransaction={
            id:Math.floor(Math.random()*1000000),
            text:text,
            amount:+amount
        }
        addTransaction(newTransaction);
        setText("")
        setAmount(0)
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="">Text</label>
                    <input type="text"
                    value={text}
                    onChange={(e)=> setText(e.target.value)}
                    placeholder="Enter Text..."/>
                </div>
                <div className="form-control">
                    <label htmlFor="amount">
                        Amount <br/>
                    </label>
                    <input type="text"
                    value={amount}
                    onChange={(e)=> setAmount(e.target.value)}
                    placeholder="Enter Amount..."/>
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
