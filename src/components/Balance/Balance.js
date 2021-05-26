import React from 'react'

import './styles.css'
const Balance = () => {
    return (
        <div className="balance-container">
            <div className="balance-general">
                <p>Balance del mes</p>
                <h2 className="color-neutral">$####</h2>
            </div>
            <div className="balance-transactions">
                <div className="balance-balances" style={{borderRight: "1px solid lightgray"}}>
                    <span className="color-positive">Ingresos</span>
                    <h3 className="color-positive">+$####</h3>
                </div>
                <div className="balance-balances" style={{borderLeft: "1px solid lightgray"}}>
                    <span className="color-negative">Gastos</span>
                    <h3 className="color-negative">-$####</h3>
                </div>
            </div>
            <br/>
        </div>
    )
}

export default Balance
