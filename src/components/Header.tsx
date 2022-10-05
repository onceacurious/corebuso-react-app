import React, { useState } from 'react'
import corebusoBrandLogo from '../assets/corebuso_logo.png'

import { Modal, Button, Form } from 'react-bootstrap'

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form data-netlify="true" name='contact' method='POST'>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="name@example.com"
                                autoFocus
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlTextarea1"
                        >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
            <header>
                <nav className="navbar navbar-expand-md navbar-dark fixed-top">
                    <div className="container fle_cajrzm nav-background" id="navBar">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navCollBtn"
                            aria-controls="navCollBtn" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>

                        <div className="collapse navbar-collapse justify-content-md-center" id="navCollBtn">
                            <a className="nav-link d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none"
                                aria-current="page" href="#">
                                <img className='gjp_oamxzs' src={corebusoBrandLogo} alt="Brand Logo" />
                            </a>
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link hjm_kmqzwn" href="#">Home</a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle hjm_kmqzwn" href="#" id="dropdownFeature"
                                        data-bs-toggle="dropdown" aria-expanded="false">Features</a>
                                    <ul className="dropdown-menu" style={{ backgroundColor: 'var(--color2-75)' }}
                                        aria-labelledby="dropdownFeature">
                                        <li><a className="dropdown-item hjm_kmqzwn" style={{ backgroundColor: 'var(--color2-25)' }}
                                            href=" #">Web Development</a></li>
                                        <li><a className="dropdown-item hjm_kmqzwn" style={{ backgroundColor: 'var(--color2-25)' }}
                                            href="#">Bookkeeping</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item">

                                    <a className="nav-link hjm_kmqzwn" href="#">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link hjm_kmqzwn" href="#">About</a>
                                </li>
                                <li>
                                    <a type="button" className="nav-link dfw_howkny" onClick={handleShow}
                                    >Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </>
    )
}

export default Header