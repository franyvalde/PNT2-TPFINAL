import { defineStore } from 'pinia';
import axios from 'axios';

const MOCKAPI_USERS_URL = 'https://6860314fc55df67558a061ca.mockapi.io/users/users'; 

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await axios.get(MOCKAPI_USERS_URL); 
                const users = response.data;
                const foundUser = users.find(u => 
                    u.username === username && u.password === password
                );

                if (foundUser) {
                    this.user = foundUser;
                    this.isAuthenticated = true;
                    localStorage.setItem('user', JSON.stringify(foundUser));
                    localStorage.setItem('isAuthenticated', 'true');
                    
                    console.log('Inicio de sesión exitoso para:', foundUser.username);
                    return true; 
                } else {
                    console.warn('Intento de inicio de sesión fallido: Credenciales inválidas para', username);
                    this.logout(); 
                    return false; 
                }
            } catch (error) {
                console.error('Error durante el proceso de login:', error);
                this.logout(); 
                return false; 
            }
        },
        
        logout() {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
            console.log('Sesión cerrada.');
        },

        loadFromLocalStorage() {
            const user = localStorage.getItem('user');
            const isAuthenticated = localStorage.getItem('isAuthenticated');
            if (user && isAuthenticated === 'true') {
                try {
                    this.user = JSON.parse(user);
                    this.isAuthenticated = true;
                    console.log('Estado de autenticación cargado desde localStorage.');
                } catch (e) {
                    console.error('Error al parsear usuario desde localStorage:', e);
                    this.logout(); 
                }
            }
        },
    },
});