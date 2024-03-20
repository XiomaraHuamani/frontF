import React, { useState } from 'react';
import { FaSignOutAlt, FaUserCircle } from 'react-icons/fa';


const Navbar = ({ setIsLoggedIn }) => {
  const navbarStyle = {
    backgroundImage: 'linear-gradient(rgba(110, 0, 205, 1), rgba(110, 0, 205, 0.95))',
    color: 'white' // Color de texto blanco para contrastar
  };

  // Estado para controlar si el botón está enfocado
  const [isFocused, setIsFocused] = useState(false);

  // Manejador de eventos para restablecer el estado a false al hacer clic en el botón
  const handleClick = () => {
    setIsFocused(false);
    setIsLoggedIn(false); // Llamar a la función handleLogout
  };

  const buttonStyle = {
    borderRadius: '20px',
    border: '1px solid #9a66cd',
    color: '#FFFFFF',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '12px 45px',
    letterSpacing: '1px',
    textTransform: 'uppercase',
    transition: 'transform 80ms ease-in',
    // Aplicar estilos de seudoclases manualmente
    transform: isFocused ? 'scale(0.95)' : 'scale(1)',
    outline: 'none', // Eliminar el contorno de enfoque
    // Estilos para la clase "ghost"
    backgroundColor: 'transparent',
    borderColor: '#FFFFFF'
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">Footloose</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              {/* Icono de usuario y nombre */}
              <div className="d-flex align-items-center" style={{ marginRight: '50px' }}>
                <FaUserCircle className="text-white me-2" size={30} />
                <span className="text-white">Rodrigo Briceño</span>
              </div>

              {/* Botón de logout */}
              <button
                className="btn btn-light purple-button ghost"
                onClick={handleClick}
                style={buttonStyle}
                // Manejar eventos de enfoque y desenfoque
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
              >
                <FaSignOutAlt />
                <span className="ms-2">Logout</span>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;