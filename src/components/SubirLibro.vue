<template>
    <div class="container mt-4">
        <h1>Subir Nuevo Libro</h1>
        <form @submit.prevent="handleSubmit">
            <div class="mb-3">
                <label for="name" class="form-label">Título</label>
                <input type="text" class="form-control" id="name" v-model="libro.name" required>
            </div>
            <div class="mb-3">
                <label for="author" class="form-label">Autor</label>
                <input type="text" class="form-control" id="author" v-model="libro.author" required>
            </div>
            <div class="mb-3">
                <label for="desc" class="form-label">Descripción</label>
                <textarea class="form-control" id="desc" v-model="libro.desc" rows="3" required></textarea>
            </div>

            <button type="submit" class="btn btn-primary">Subir Libro</button>
            <div v-if="message" :class="messageType === 'success' ? 'alert alert-success mt-3' : 'alert alert-danger mt-3'">
                {{ message }}
            </div>
        </form>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import libroService from '../services/libroService';

const router = useRouter();

// Se define la estructura del objeto libro para que coincida EXACTAMENTE con el esquema de MockAPI
const libro = ref({
    name: '',       // Corresponde a 'name' en MockAPI
    author: '',     // Corresponde a 'author' en MockAPI
    desc: '',       // Corresponde a 'desc' en MockAPI
});

const message = ref('');
const messageType = ref('');

const handleSubmit = async () => {
    message.value = 'Subiendo libro...';
    messageType.value = 'info';

    try {
        // Envía el objeto libro directamente a MockAPI
        // MockAPI generará el 'id' y 'createdAt' automáticamente.
        const response = await libroService.createLibro(libro.value);
        console.log('Libro creado en MockAPI:', response);

        message.value = 'Libro subido y registrado exitosamente!';
        messageType.value = 'success';

        // Limpiar formulario después de subir exitosamente
        libro.value = { name: '', author: '', desc: '' };

        // Redirigir a la lista de libros
        router.push('/libros');

    } catch (error) {
        console.error('Error al subir el libro:', error);
        // Muestra un mensaje de error más específico si proviene del servidor
        if (error.response && error.response.data) {
            message.value = `Error: ${error.response.status} - ${JSON.stringify(error.response.data)}`;
        } else {
            message.value = 'Error al subir el libro. Por favor, intenta de nuevo.';
        }
        messageType.value = 'danger';
    }
};
</script>

<style scoped>

</style>
