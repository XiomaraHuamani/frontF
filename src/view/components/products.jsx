import React, { useState, useEffect  } from 'react';
import { FaTrash, FaEdit, FaEye, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
//imagen

//Productos
const Products = () => {
    const [products, setProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [image, setImage] = useState([]);
    const productsPerPage = 4;

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products/product/');
                setProducts(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchProducts();


        const fetchImage = async ()  => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/products/image/');
                setImage(response.data);
            } catch (error) {
                console.error('Error fetching products:', error);
            }
        };
        fetchImage();
       

    }, []);

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
    //imagen
    //const Imagenes = require.context('{product.image}', true)
    //const Imagenes = require.context('~/public', true);
    //http://127.0.0.1:8000/products/image/   
    return (
        <>
            <div className="row row-cols-4 g-4">
                {currentProducts.map(product => (
                    <div className="col" key={product.id}>
                        <div className="card h-100 product-card" style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden' }} onMouseEnter={(e) => e.currentTarget.querySelector('.card-overlay').style.opacity = 0.7} onMouseLeave={(e) => e.currentTarget.querySelector('.card-overlay').style.opacity = 0}>
                        {image.map(img => (
                        <img src={`http://127.0.0.1:8000/products/image${img.image}`} className="card-img-top" alt={product.name} />
                        ))}
                        {/* <img src={`http://127.0.0.1:8000/products/image${product.image}`} className="card-img-top" alt={product.name} /> */}
                        {/* <img src={Imagenes(`./${product.image}`)} className="card-img-top" alt={product.name} /> */}
                            {/* <img src={'http://127.0.0.1:8000/products/image/'} className="card-img-top" alt={product.name} /> */}
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
