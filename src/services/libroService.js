import axios from 'axios';

const MOCKAPI_BASE_URL = 'https://6862964d96f0cc4e34ba4d07.mockapi.io/libros/libros';

const libroService = {
    async getLibros() {
        try {
            const response = await axios.get(MOCKAPI_BASE_URL);
            return response.data;
        } catch (error) {
            console.error('Error al obtener libros:', error);
            throw error;
        }
    },

    async getLibroDetails(id) {
        try {
            const response = await axios.get(`${MOCKAPI_BASE_URL}/${id}`);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener detalles del libro ${id}:`, error);
            throw error;
        }
    },

    async createLibro(libroData) {
        try {
            console.log('Enviando datos del nuevo libro a MockAPI:', libroData);
            const response = await axios.post(MOCKAPI_BASE_URL, libroData);
            console.log('Libro creado en MockAPI:', response.data);
            return response.data;
        } catch (error) {
            console.error('Error al crear libro:', error);
            throw error;
        }
    },

    async updateLibro(id, libroData) {
        try {
            console.log(`Actualizando libro ${id} con datos:`, libroData);
            const response = await axios.put(`${MOCKAPI_BASE_URL}/${id}`, libroData);
            console.log(`Libro ${id} actualizado:`, response.data);
            return response.data;
        } catch (error) {
            console.error(`Error al actualizar libro ${id}:`, error);
            throw error;
        }
    },

    async deleteLibro(id) {
        try {
            console.log(`Eliminando libro con ID: ${id}`);
            const response = await axios.delete(`${MOCKAPI_BASE_URL}/${id}`);
            console.log(`Libro ${id} eliminado:`, response.data);
            return response.data;
        } catch (error) {
            console.error(`Error al eliminar libro ${id}:`, error);
            throw error;
        }
    }
};

export default libroService;
