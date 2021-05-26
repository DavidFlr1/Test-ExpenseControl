import React, { useState, useEffect } from 'react'
import Nav from 'react-bootstrap/Nav'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import './styles.css'

const Navbar = ({handleUpdateMonth}) => {
    const [monthNumber, setMonthNumber] = useState(0)
    const months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

    const handleMonths = async (selectedKey) => {
        setMonthNumber(monthNumber + parseInt(selectedKey))
        
        if(monthNumber === 0 && selectedKey === '-1') {
            setMonthNumber(11)
        }
        if(monthNumber === 11 && selectedKey === '1'){
            setMonthNumber(0)
        }
    }
    
    useEffect(() => {
        handleMonths(0)
        handleUpdateMonth(monthNumber)
    })
    return (
        <div className="navbar-container navbar-display">
            <Nav defaultActiveKey="/home" as="ul" onSelect={(selectedKey) => handleMonths(selectedKey)}>
            <Nav.Item as="li" className="navbar-display">
                <Nav.Link eventKey="-1" >
                    <FontAwesomeIcon icon={faChevronLeft} style={{color: "white"}}/>
                </Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="navbar-subitem navbar-display">
                <Nav.Link eventKey="0" disabled style={{color: "white"}}>{months[monthNumber === 0 ? 11 : monthNumber - 1]}</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="navbar-item navbar-display">
                <Nav.Link eventKey="0" disabled style={{color: "white"}}>{months[monthNumber]}</Nav.Link>
            </Nav.Item>
            <Nav.Item as="li" className="navbar-subitem navbar-display">
                <Nav.Link eventKey="0" disabled style={{color: "white"}}>{months[monthNumber === 11 ? 0 : monthNumber + 1]}</Nav.Link>
            </Nav.Item>

            <Nav.Item as="li" className="navbar-display">
                <Nav.Link eventKey="1" >
                    <FontAwesomeIcon icon={faChevronRight} style={{color: "white"}}/>
                </Nav.Link>
            </Nav.Item>
            </Nav>

        </div>
    )
}

export default Navbar
