import axios from 'axios';

const handleSignIn = async (username, password) => {
    try {
        const response = await axios.post('http://127.0.0.1:8000/users/login/', {
            username,
            password
        });

        // Manejar la respuesta de la API
        if (response.status === 200) {
            // Autenticación exitosa
            return { success: true, data: response.data };
        } else {
            // Autenticación fallida
            return { success: false, message: response.data.message };
        }
    } catch (error) {
        console.log(username)
        console.log(password)
        console.error('Error al iniciar sesión:', error);
        return { success: false, message: 'Error al iniciar sesión' };
    }
};

export default handleSignIn;