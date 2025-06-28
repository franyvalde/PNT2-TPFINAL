<template>
    <div>
        <div class="jumbotron text-center bg-light py-5">
            <h1 class="display-4">Bienvenido a la Biblioteca Digital</h1>
            <p class="lead">Explora, descarga y disfruta de nuestra colección de libros.</p>
            <hr class="my-4">
            <p>Encuentra tu próxima lectura favorita.</p>
            <router-link to="/libros" class="btn btn-primary btn-lg" role="button">Explorar Libros</router-link>
        </div>

        <div class="container my-5">
            <h2 class="text-center mb-4">Nuestros Últimos Libros</h2>
            <ListaDeLibros :limit="3" /> </div>

    </div>
</template>

<script>
import ListaDeLibros from '../components/ListaDeLibros.vue'; // Nuevo componente
import PiePagina from '../components/PiePagina.vue';

export default {
    components: {
        ListaDeLibros,
        PiePagina,
    },
    
};
</script>

<style scoped>
.jumbotron {
    background-color: #f8f9fa;
    border-radius: 0.3rem;
    padding: 2rem 1rem;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}


</style>
