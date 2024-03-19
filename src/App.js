import React, { useState } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from "./view/components/navbar";
import Login from "./view/pages/login";
import Catalog from "./view/pages/catalog";
import Register from "./view/pages/register";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Estado de autenticación

  return (
    <div>
      {isLoggedIn && <Navbar setIsLoggedIn={setIsLoggedIn} />} {/* Mostrar navbar solo si está autenticado */}
      <Routes>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn} />} />
        <Route path='/registro' element={<Register />} />
        <Route path='/' element={isLoggedIn ? <Catalog /> : <Navigate to="/login" />} />
      </Routes>
    </div>
  );
}

export default App;