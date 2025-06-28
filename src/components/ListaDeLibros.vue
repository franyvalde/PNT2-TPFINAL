<template>
    <div class="container my-4">
        <h1 class="text-center mb-4">Nuestra Colección de Libros</h1>

        <div class="input-group mb-4">
            <input
                type="text"
                v-model="searchQuery"
                placeholder="Buscar por título o autor..."
                class="form-control"
                @keyup.enter="filterLibros"
            />
            <button class="btn btn-primary" @click="filterLibros">Buscar</button>
        </div>

        <div v-if="filteredLibros.length > 0" class="row">
            <div
                class="col-md-4 mb-4 d-flex align-items-stretch"
                v-for="libro in filteredLibros"
                :key="libro.id"
            >
                <div class="card shadow-sm w-100">
                    <img
                        v-if="libro.portadaURL"
                        :src="libro.portadaURL"
                        :alt="libro.titulo"
                        class="card-img-top book-cover"
                    />
                    <div v-else class="card-img-top no-cover d-flex align-items-center justify-content-center">
                        <span>Sin Portada</span>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title">{{ libro.titulo }}</h5>
                        <p class="card-text text-muted">Autor: {{ libro.autor }}</p>
                        <p class="card-text">{{ libro.descripcion ? libro.descripcion.slice(0, 100) + '...' : 'Descripción no disponible' }}</p>
                        <router-link
                            class="btn btn-primary mt-auto"
                            :to="`/libros/${libro.id}`"
                        >Ver Detalles</router-link>
                    </div>
                </div>
            </div>
        </div>
        <div v-else class="col-12 text-center">
            <p>No se encontraron libros que coincidan con su búsqueda.</p>
        </div>
    </div>
</template>

<script>
import libroService from '../services/libroService';

export default {
    name: 'ListaDeLibros',
    props: {
        limit: {
            type: Number,
            default: 0 // 0 significa sin límite
        }
    },
    data() {
        return {
            libros: [],
            searchQuery: '',
            filteredLibros: [],
        };
    },
    async created() {
        await this.fetchLibros();
    },
    methods: {
        async fetchLibros() {
            try {
                const allLibros = await libroService.getLibros();
                this.libros = this.limit > 0 ? allLibros.slice(0, this.limit) : allLibros;
                this.filterLibros(); // Aplica el filtro inicial
            } catch (error) {
                console.error('Error al cargar los libros:', error);
            }
        },
        filterLibros() {
            if (!this.searchQuery) {
                this.filteredLibros = this.libros;
            } else {
                const query = this.searchQuery.toLowerCase();
                this.filteredLibros = this.libros.filter(libro =>
                    libro.titulo.toLowerCase().includes(query) ||
                    libro.autor.toLowerCase().includes(query)
                );
            }
        }
    },
    watch: {
        
        limit: {
            immediate: true,
            handler: 'fetchLibros'
        }
    }
};
</script>

<style scoped>
.card-img-top {
    height: 250px;
    object-fit: cover;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.no-cover {
    height: 250px;
    background-color: #e9ecef;
    color: #6c757d;
    font-weight: bold;
    text-align: center;
    border-top-left-radius: calc(0.25rem - 1px);
    border-top-right-radius: calc(0.25rem - 1px);
}

.card {
    transition: transform 0.2s ease-in-out;
}

.card:hover {
    transform: translateY(-5px);
}
</style>