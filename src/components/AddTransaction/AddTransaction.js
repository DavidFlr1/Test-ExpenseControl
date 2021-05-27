import React, {useState, useEffect} from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'

import './styles.css'

const AddTransaction = () => {
    const [smShow, setSmShow] = useState(false);
    const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');

    const radios = [
        { name: 'Active', value: '1' },
        { name: 'Radio', value: '2' },
      ];
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
                        <Form.Control type="text" placeholder="Concepto" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Monto</Form.Label>
                        <Form.Control type="number" placeholder="Monto" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Fecha</Form.Label>
                        <Form.Control type="date" placeholder="Monto" />
                    </Form.Group>
                    <br/>
                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Ingreso" />
                    </Form.Group>
                    <br/>
                    <Button className="add-button background-neutral" variant="primary" type="submit">Submit</Button>
                </Form>

                </Modal.Body>
            </Modal>
        </div>
    )
}

export default AddTransaction
