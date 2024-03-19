import React, { useState } from 'react';
import { FaTrash, FaEdit, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

function Products() {
    const [currentPage, setCurrentPage]= useState(1);
    const productsPerPage = 12; // Número de productos por página

    // Supongamos que tienes una lista de productos llamada "products"
    // Puedes reemplazar esta variable con tu lista de productos real
    const products = [
        { id: 1, name: 'Producto 1', description: 'Descripción del Producto 1', price: 10, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472377-800-auto?v=638454269668470000&width=800&height=auto&aspect=true' },
        { id: 2, name: 'Producto 2', description: 'Descripción del Producto 2', price: 20, image: 'https://passarelape.vtexassets.com/arquivos/ids/1473760-800-auto?v=638460229870900000&width=800&height=auto&aspect=true' },
        { id: 3, name: 'Producto 3', description: 'Descripción del Producto 3', price: 30, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472269-800-auto?v=638454269410000000&width=800&height=auto&aspect=true' },
        { id: 4, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 5, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 6, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 7, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 8, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 9, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 10, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 11, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 12, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 13, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        { id: 14, name: 'Producto 4', description: 'Descripción del Producto 4', price: 40, image: 'https://passarelape.vtexassets.com/arquivos/ids/1472479-800-auto?v=638454269912470000&width=800&height=auto&aspect=true' },
        // Agrega más productos según sea necesario
    ];

    // Calcular índices de los productos que se mostrarán en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

    // Cambiar a la siguiente página
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    // Cambiar a la página anterior
    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    return (
        <>
            <div className="row row-cols-4 g-4">
                {currentProducts.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 product-card" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.querySelector('.card-overlay').style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.querySelector('.card-overlay').style.opacity = 0}>
                            <img src={product.image} className="card-img-top" alt={product.name} />
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <p className="card-text">{product.description}</p>
                                <p className="card-text">{product.price}</p>
                            </div>
                            <div className="card-overlay" style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'rgba(0, 0, 0, 1)', display: 'flex', justifyContent: 'center', alignItems: 'center', opacity: 0, transition: 'opacity 0.9s' }}>
                                <div className="btn-group" role="group" aria-label="Botones de acción">
                                    <button className="btn btn-primary d-flex align-items-center justify-content-center" style={{ marginRight: '10px' }}>
                                        <FaEdit />
                                    </button>
                                    <button className="btn btn-success d-flex align-items-center justify-content-center" style={{ marginRight: '10px' }}>
                                        <FaEye />
                                    </button>
                                    <button className="btn btn-danger d-flex align-items-center justify-content-center">
                                        <FaTrash />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Controles de paginación */}
            <div className="pagination d-flex align-items-center justify-content-center" style={{ paddingTop: '10px', paddingBottom: '10px' }}>
                <button className="pagination-btn" onClick={prevPage} disabled={currentPage === 1} style={{ backgroundColor: currentPage !== 1 ? '#9a66cd' : '#d8b3ff', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px', cursor: 'pointer', marginRight: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                    <FaChevronLeft />
                </button>
                <div>
                    Página {currentPage} de {Math.ceil(products.length / productsPerPage)}
                </div>
                <button className="pagination-btn" onClick={nextPage} disabled={indexOfLastProduct >= products.length} style={{ backgroundColor: indexOfLastProduct < products.length ? '#9a66cd' : '#d8b3ff', color: 'white', borderRadius: '50%', width: '40px', height: '40px', fontSize: '20px', cursor: 'pointer', marginLeft: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', border: 'none' }}>
                    <FaChevronRight />
                </button>
            </div>
        </>
    );
}

export default Products;