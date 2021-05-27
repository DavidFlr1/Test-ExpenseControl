import React, {useState, useEffect} from 'react'
import { Navbar, Balance, Transactions,AddTransaction } from './components/index'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'

const App = () => {
    const [month, setMonth] = useState(0)

    const handleUpdateMonth = (monthNumber) => {
        setMonth(monthNumber)
    }

    const transactionData = [
        {id: 1, name: "Nomina", amount: "5000", type: false, date: "01/01/2021"},
        {id: 2, name: "Pago de servicio agua", amount: "327.23", type: true, date: "01/01/2021"},
        {id: 3, name: "Supermercado", amount: "265.5", type: true, date: "01/01/2021"},
        {id: 4, name: "Chili's La rioja", amount: "125", type: true, date: "01/02/2021"},
        {id: 5, name: "Transferencia Juan", amount: "350", type: false, date: "01/02/2021"},
        {id: 6, name: "Jeans levis", amount: "599", type: true, date: "01/05/2021"},
        {id: 7, name: "Nomina", amount: "7000", type: false, date: "02/01/2021"},
        {id: 8, name: "Transferencia Lisa", amount: "820", type: false, date: "02/08/2021"},
        {id: 9, name: "Compra en linea", amount: "728.54", type: true, date: "02/08/2021"},
        {id: 10, name: "Vacaciones", amount: "1358.25", type: true, date: "02/13/2021"},
        {id: 11, name: "Nomina", amount: "6000", type: false, date: "07/01/2021"},
        {id: 12, name: "Cumpleaños", amount: "2000", type: true, date: "07/21/2021"}
    ]

    const testData = () => {
        var fechaTemporal = 0
        transactionData.filter(item => new Date(Date.parse(item.date)).getMonth() === month).map((item, index) => {
            var fecha = new Date(Date.parse(item.date)).getDate()
            if(index === 0){
                fechaTemporal = fecha
                console.log(fecha)
            }

            if(fecha === fechaTemporal){
                
                console.log(item)
            } else {
                console.log(fecha)
                console.log(item)
            }
            fechaTemporal = fecha
        })
    }

    useEffect(() => {

    })

    return (
        <div className="main-container">
            <Navbar handleUpdateMonth={handleUpdateMonth} />
            <Balance transactions={transactionData} month={month}/>
            {transactionData.filter(item => new Date(Date.parse(item.date)).getMonth() === month).map(item => (
                <Transactions transaction={item} month={month}/>
            ))}

            <AddTransaction  />
        </div>
    )
}

export default App
