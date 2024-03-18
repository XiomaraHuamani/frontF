import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from "./view/components/navbar"
import Login from "./view/pages/login"
import Catalog from "./view/pages/catalog"
import Register from "./view/pages/register"

function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/login';
  const isRegisterPage = location.pathname === '/register';
  const showNavbar = !(isLoginPage || isRegisterPage);

  return (
    <div>
      {showNavbar && <Navbar />}
      <Routes>
        <Route path='/' element={<Catalog />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
