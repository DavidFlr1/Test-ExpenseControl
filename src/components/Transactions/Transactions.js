import React, {useState, useEffect} from 'react'
import Alert from 'react-bootstrap/Alert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Transactions = ({transaction, month}) => {
    const [showDetails, setShowDetails] = useState(false)    

    useEffect(() => {
        setShowDetails(false)
    },[month])
    return (
        <div>
            <div className="transactions-container">

                <div className={transaction.type ? "background-negative transactions-negative" : "background-positive transactions-positive"}></div>
                <div className="transactions-concept">
                    <h5>{transaction.name}</h5>
                </div>
                <div className="transactions-amount">
                    <p className={transaction.type ? "color-negative" : "color-positive"}>{transaction.type ? '-' : '+'}${transaction.amount}</p>
                </div>
                <div className="transactions-arrow">
                    {showDetails ? 
                    <FontAwesomeIcon icon={faChevronDown} onClick={() => setShowDetails(!showDetails)}/> :
                    <FontAwesomeIcon icon={faChevronUp} onClick={() => setShowDetails(!showDetails)}/>
                    }
                </div>
            </div>
            <div>
                <Alert variant="light" show={showDetails} className="transactions-details">
                    <Alert.Heading>Detalles de la transaccion</Alert.Heading>
                    <hr />
                    <div className="transactions-subDetails">
                        <div className="transactions-balances" style={{borderRight: "1px solid lightgray"}}>
                            <span className="color-neutral">{transaction.name}</span>
                            <p className="color-neutral">{transaction.date}</p>
                        </div>
                        <div className="transactions-balances" style={{borderLeft: "1px solid lightgray"}}>
                            <h3 className={transaction.type ? "color-negative" : "color-positive"}>${transaction.amount}</h3>
                        </div>
                    </div>
                </Alert>
            </div>
        </div>
    )
}

export default Transactions
