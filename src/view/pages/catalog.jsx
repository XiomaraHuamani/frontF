import React, { useState } from 'react';

import { FaSearch } from 'react-icons/fa';
// import { Modal, Button, Form } from 'react-bootstrap';
import ModalProducts from '../components/modalProducts';
import FixedButtons from '../components/fixedButtons';
import Products from '../components/products';
import Filters from '../components/filters';

function Catalog() {
    const [show, setShow] = useState(false);
    const [clicked, setClicked] = useState(false);

    const handleMouseDown = () => {
        setClicked(true);
    };

    const handleMouseUp = () => {
        setClicked(false);
    };

    const handleShow = () => {
        setClicked(true);
        setTimeout(() => setClicked(false), 300); // Después de 300ms, regresa al color original
        setShow(true);
    };

    const handleClose = () => {
        setShow(false)
    };

    return (
        <div>
            <div className="mt-4"></div> {/* Espacio entre el navbar y los contenedores */}
            <div className="container">
                <div className="row">
                    <div className="col-md-6 d-flex justify-content-center align-items-center">
                        <div className="input-group mb-3">
                            <span className="input-group-text" id="basic-addon1"><FaSearch /></span>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Buscador"
                                aria-label="Buscador"
                                aria-describedby="basic-addon1"
                                style={{ outline: 'none', boxShadow: 'none' }} // Desactiva el resaltado azul
                            />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <Filters/>
                    <Products/>
                </div>
            </div>
            <FixedButtons
                setClicked={setClicked}
                handleShow={handleShow}
                handleMouseDown={handleMouseDown}
                handleMouseUp={handleMouseUp}
                clicked={clicked}
            />
            <ModalProducts show={show} handleClose={handleClose} />
        </div>

    );
}
export default Catalog;