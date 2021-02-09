import React,{useContext} from 'react'
import {GlobalContext} from "../context/GlobalState"
import {numberWithCommas} from "../utils/format"

const IncomeExpenses = () => {
    const {transactions} =useContext(GlobalContext)
    const posTotal= transactions.reduce((acc,item)=>(item.amount>0 ? acc+=item.amount:acc),0)
    const negTotal= Math.abs(transactions.reduce((acc,item)=>(item.amount<0 ? acc+=item.amount:acc),0))
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus" >
                    +${numberWithCommas(posTotal)}
                </p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus" >
                    -${numberWithCommas(negTotal)}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses
