import { defineStore } from 'pinia';
import axios from 'axios';

const MOCKAPI_BASE_URL = 'https://6860314fc55df67558a061ca.mockapi.io/users'; // TU URL DE MOCKAPI

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: null,
        isAuthenticated: false,
    }),
    actions: {
        async login(username, password) {
            try {
                const response = await axios.get(`${MOCKAPI_BASE_URL}/users`, {
                    params: { username, password } // Busca usuario por username y password
                });

                const foundUser = response.data.find(u => u.username === username && u.password === password);

                if (foundUser) {
                    this.user = foundUser;
                    this.isAuthenticated = true;
                    localStorage.setItem('user', JSON.stringify(foundUser));
                    localStorage.setItem('isAuthenticated', 'true');
                    return true;
                } else {
                    this.logout();
                    return false;
                }
            } catch (error) {
                console.error('Error during login:', error);
                this.logout();
                return false;
            }
        },
        logout() {
            this.user = null;
            this.isAuthenticated = false;
            localStorage.removeItem('user');
            localStorage.removeItem('isAuthenticated');
        },
        loadFromLocalStorage() {
            const user = localStorage.getItem('user');
            const isAuthenticated = localStorage.getItem('isAuthenticated');
            if (user && isAuthenticated === 'true') {
                this.user = JSON.parse(user);
                this.isAuthenticated = true;
            }
        },
    },
});