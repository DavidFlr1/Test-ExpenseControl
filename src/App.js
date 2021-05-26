import React, {useState, useEffect} from 'react'
import { Navbar, Balance, Transactions,AddTransaction } from './components/index'
import { BrowserRouter as Router, Switch, Route, useRouteMatch } from 'react-router-dom'

const App = () => {
    const [month, setMonth] = useState(0)

    const handleUpdateMonth = (monthNumber) => {
        setMonth(monthNumber)
    }



    return (
        <div className="main-container">
            <Navbar handleUpdateMonth={handleUpdateMonth} />
            <Balance />
            <label className="date-section">01/01/200</label>
            <AddTransaction  />
            <Transactions />
        </div>
    )
}

export default App
