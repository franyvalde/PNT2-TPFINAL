<template>
    <div class="container my-4">
        <div v-if="libro" class="row">
            <div class="col-md-4">
                <img
                    v-if="libro.portadaURL"
                    :src="libro.portadaURL"
                    :alt="libro.titulo"
                    class="img-fluid rounded shadow"
                />
                <div v-else class="no-cover-detail d-flex align-items-center justify-content-center rounded shadow">
                    <span>Sin Portada</span>
                </div>
            </div>
            <div class="col-md-8">
                <h1 class="mb-4">{{ libro.titulo }}</h1>
                <p class="lead"><strong>Autor:</strong> {{ libro.autor }}</p>
                <p>{{ libro.descripcion || 'Sin descripción disponible.' }}</p>

                <div class="d-grid gap-2">
                    <a :href="libro.urlPDF" target="_blank" class="btn btn-success btn-lg">
                        <i class="fas fa-download me-2"></i> Descargar PDF
                    </a>
                </div>
            </div>
        </div>
        <div v-else class="text-center">
            <p>Cargando detalles del libro...</p>
        </div>

        <router-link to="/libros" class="btn btn-secondary mt-5">Volver a la lista de libros</router-link>
    </div>
</template>

<script>
import libroService from '../services/libroService';

export default {
    name: 'DetalleLibro',
    props: ['id'], // Recibe el ID del libro de la ruta

    data() {
        return {
            libro: null,
        };
    },

    async created() {
        try {
            this.libro = await libroService.getLibroDetails(this.id);
        } catch (error) {
            console.error('Error al cargar los detalles del libro:', error);
            
        }
    },
};
</script>

<style scoped>
.no-cover-detail {
    width: 100%;
    height: 400px; 
    background-color: #e9ecef;
    color: #6c757d;
    font-weight: bold;
    text-align: center;
    font-size: 1.5rem;
}

.btn-success {
    background-color: #28a745;
    border-color: #28a745;
}
.btn-success:hover {
    background-color: #218838;
    border-color: #1e7e34;
}
</style>