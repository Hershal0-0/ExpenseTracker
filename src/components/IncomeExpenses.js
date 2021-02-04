import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"

const IncomeExpenses = () => {
    const {transactions} =useContext(GlobalContext)
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus" >
                    +${transactions.reduce((acc,item)=>(item.amount>0 ? acc+=item.amount:acc),0)}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus" >
                    -${Math.abs(transactions.reduce((acc,item)=>(item.amount<0 ? acc+=item.amount:acc),0))}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
