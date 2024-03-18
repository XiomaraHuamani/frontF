import React from 'react';

const Login = () => {
    return (
        <div style={{
            display: 'flex',              // Utiliza flexbox para dividir la pantalla en dos secciones
            height: '100vh',              // Establece la altura del contenedor al 100% de la ventana
        }}>
            {/* Primera sección (70% de la pantalla) */}
            <div style={{
                backgroundColor: '#f5edff',  // Color de fondo morado pastel más claro
                width: '70%',                // Ocupa el 70% del ancho del contenedor
            }}>
                <h1 style={{ color: '#4d4d4d', textAlign: 'center' }}>Hola, soy el login</h1>
                {/* Aquí puedes agregar los campos de inicio de sesión */}
            </div>

            {/* Segunda sección (30% de la pantalla) */}
            <div style={{
                backgroundColor: '#e7daff',  // Color de fondo morado pastel más claro (similar al otro tono)
                width: '30%',                // Ocupa el 30% del ancho del contenedor
            }}>
                {/* Puedes agregar contenido adicional a esta sección si es necesario */}
            </div>
        </div>
    );
}

export default Login;