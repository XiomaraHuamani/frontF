import React from 'react';
import { FaTrash, FaEdit, FaEye } from 'react-icons/fa';

function Products() {

    return (
        <>
            <div className="row row-cols-4 g-4">
                <div className="col">
                    <div className="card h-100">
                        <img src="https://imanesdeviaje.com/wp-content/uploads/2020/03/paisajes-mas-bonitos-del-mundo-cascada-islandia-1.jpg" className="card-img-top" alt="..." style={{ height: '200px', width: 'auto', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Tipo de producto</h5>
                            <p className="card-text">Descripción de producto</p>
                            <p className="card-text">Precio del producto</p>
                        </div>
                        <div className="card-footer bg-white">
                            <div className="row justify-content-center align-items-center">
                                <div className="col text-center col-3">
                                    <button className="btn btn-primary d-flex align-items-center justify-content-center" style={{ padding: '10px 20px', marginRight: '10px' }}>
                                        <FaEdit />
                                    </button>
                                </div>
                                <div className="col text-center col-3">
                                    <button className="btn btn-success d-flex align-items-center justify-content-center" style={{ padding: '10px 20px', marginRight: '10px' }}>
                                        <FaEye />
                                    </button>
                                </div>
                                <div className="col text-center col-3">
                                    <button className="btn btn-danger d-flex align-items-center justify-content-center" style={{ padding: '10px 20px', marginRight: '10px' }}>
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://pbs.twimg.com/media/CXud1FXW8AExLxC.jpg" className="card-img-top" alt="..." style={{ height: '200px', width: 'auto', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Tipo de producto</h5>
                            <p className="card-text">Descripción de producto</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://img.freepik.com/foto-gratis/paisaje-forestal_71767-127.jpg" className="card-img-top" alt="..." style={{ height: '200px', width: 'auto', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Tipo de producto</h5>
                            <p className="card-text">Descripción de producto</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card h-100">
                        <img src="https://tecnologiaenaula.files.wordpress.com/2017/01/imagenes-paisajes-bonitos-5.jpg" className="card-img-top" alt="..." style={{ height: '200px', width: 'auto', objectFit: 'cover' }} />
                        <div className="card-body">
                            <h5 className="card-title">Tipo de producto</h5>
                            <p className="card-text">Descripción de producto</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Products;