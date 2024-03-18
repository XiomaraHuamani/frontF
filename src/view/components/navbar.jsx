import React from 'react';
import { Outlet } from 'react-router-dom';

function Navbar() {
  const navbarStyle = {
    backgroundImage: 'linear-gradient(rgba(110, 0, 205, 1), rgba(110, 0, 205, 0.95))',
    // Agrega otros estilos personalizados aquí si es necesario
  };
  return (
    <div>
      <nav className="navbar navbar-expand-lg" style={navbarStyle}>
        <div className="container-fluid">
          <a className="navbar-brand text-white" href="/">Footloose</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
      </nav>
      <Outlet/>
    </div>

  );
}

export default Navbar;