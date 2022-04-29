import React from 'react'
import { useState } from 'react';
import { Dropdown } from 'react-bootstrap';
import { DropdownButton } from 'react-bootstrap';
import { Button, Modal } from 'react-bootstrap';
import MultipleSelect from './MultipleSelect'

import '../Page/Page45.css'

function AddRecord() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <button onClick={handleShow} className='addrecord'>
                <img className='imageaddrecord' src='../asset/image/Ellipse 14.png'>
                </img>
                <img className='addimage' src='../asset/image/Vector (175).png' />
            </button>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body> <div >
                    <Dropdown>
                        <Dropdown.Toggle variant="success" id="dropdown-basic">
                        Select Duration
                        </Dropdown.Toggle>

                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">1 Month</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">3 Month</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">6 Month</Dropdown.Item>
                            <Dropdown.Item href="#/action-4">12 Month</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <input placeholder='Enter price' style={{top: "230px"}} className='pricediscount'/>
                <input placeholder='Discount in %' style={{top: "305px"}} className='pricediscount'/>
                 </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                    Save
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                    CANCEL
                    </Button>
                </Modal.Footer>
            </Modal>

        </div>
    )
}

export default AddRecord