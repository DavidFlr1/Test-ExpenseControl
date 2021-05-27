import React, {useState, useEffect} from 'react'

import './styles.css'
const Balance = ({transactions, month}) => {
    const [incomes, setIncomes] = useState(0)
    const [expenses, setExpenses] = useState(0)
    const [balance, setBalance] = useState(0)

    const handleBalance = () => {
        var myIncomes = 0
        var myExpenses = 0
        var empty = true
        transactions.filter(item => new Date(Date.parse(item.date)).getMonth() === month).map(item => {
            if(item.type === false) {
                var temporalIncome = parseFloat(item.amount)
                myIncomes = myIncomes + temporalIncome
            } else {
                var temporalExpense = parseFloat(item.amount)
                myExpenses = myExpenses + temporalExpense
            }

            empty = false
            setIncomes(myIncomes)
            setExpenses(myExpenses)
            setBalance(myIncomes - myExpenses)
        })

        if(empty === true){
            setIncomes(0)
            setExpenses(0)
            setBalance(0)
        }
    }

    useEffect(() => {
        handleBalance()
    })

    return (
        <div className="balance-container">
            <div className="balance-general">
                <p>Balance del mes</p>
                <h2 className="color-neutral">${balance}</h2>
            </div>
            <div className="balance-transactions">
                <div className="balance-balances" style={{borderRight: "1px solid lightgray"}}>
                    <span className="color-positive">Ingresos</span>
                    <h3 className="color-positive">+${incomes}</h3>
                </div>
                <div className="balance-balances" style={{borderLeft: "1px solid lightgray"}}>
                    <span className="color-negative">Gastos</span>
                    <h3 className="color-negative">-${expenses}</h3>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Balance
