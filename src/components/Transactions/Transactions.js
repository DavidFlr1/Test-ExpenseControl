import React, {useState, useEffect} from 'react'
import Alert from 'react-bootstrap/Alert'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Transactions = () => {
    const [showDetails, setShowDetails] = useState(false)

    
    return (
        <div>
            <div className="transactions-container">

                <div className="transactions-type"></div>
                <div className="transactions-concept">
                    <h5>Nueva transaccion</h5>
                </div>
                <div className="transactions-amount">
                    <p>$500</p>
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
                            <span className="color-neutral">Nueva transaccion</span>
                            <p className="color-neutral">Fecha: 01/01/2000</p>
                        </div>
                        <div className="transactions-balances" style={{borderLeft: "1px solid lightgray"}}>
                            <h3 className="color-positive">+$500</h3>
                        </div>
                    </div>
                </Alert>
            </div>
        </div>
    )
}

export default Transactions
