import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './styles.css'

const AddTransaction = ({handleAddData}) => {
    const [smShow, setSmShow] = useState(false);

    const [name, setName] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('')
    const [date, setDate] = useState('')

    return (
        <div >
            <Button className="add-button background-neutral" styles={{position: "sticky"}} onClick={() => setSmShow(true)} variant="primary" size="lg" block>Agregar Movimiento</Button>{' '}
            <Modal centered size="sm" show={smShow} onHide={() => setSmShow(false)} aria-labelledby="example-modal-sizes-title-sm">
                <Modal.Header>
                    <Modal.Title id="example-modal-sizes-title-sm">Nueva transaccion</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Concepto</Form.Label>
                        <Form.Control type="text" placeholder="Concepto" required onChange={(event) => {setName(event.target.value)}} value={name} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type="number" placeholder="Monto" required onChange={(event) => {setAmount(event.target.value)}} value={amount}/>
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" placeholder="Monto" min="01/01/2021" max="12/31/2021" required onChange={(event) => {setDate(event.target.value)}} value={date}/>
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Control as="select" required onChange={(event) => {setType(event.target.value)}} value={type}>
                            <option defaultValue>Ingreso</option>
                            <option>Gasto</option>
                        </Form.Control>
                    </Form.Group>
                    <br/>
                    <Button className="submit-button background-neutral" variant="primary" onClick={() => {
                        var myType = false
                        if(name != '' && amount != '' && date != ''){
                            if(type === '' || type === 'Ingreso'){
                                myType = false
                            } else {
                                myType = true
                            }

                            handleAddData(name, amount, myType, date)

                            setSmShow(false)
                            setName('')
                            setAmount(0)
                            setType('')
                            setDate('')
                        } else {
                            alert('You must fill all camps to continue')
                        }
                    }}>Submit</Button>
                </Form>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddTransaction
