<template>
    <div class="container mt-5 about-section">
        <h1 class="about-title">Sobre esta Aplicación</h1>
        <p class="about-description">
            Esta es una aplicación de **Biblioteca Digital** donde puedes explorar, buscar, y descargar libros en formato PDF.
        </p>
        <p class="about-description">
            Desarrollada por nuestro equipo utilizando Vue.js, Pinia, Bootstrap y otras tecnologías modernas para ofrecer una experiencia de usuario fluida y eficiente.
        </p>
        <p class="about-description">
            Nuestro objetivo es facilitar el acceso al conocimiento y la lectura a través de una plataforma sencilla e intuitiva.
        </p>
    </div>
</template>

<script>
export default {
    name: 'About'
};
</script>

<style scoped>
.about-section {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 30px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    text-align: center;
}

.about-title {
    font-size: 2.5rem;
    color: #343a40;
    margin-bottom: 20px;
}

.about-description {
    font-size: 1.1rem;
    color: #495057;
    line-height: 1.5;
    margin-bottom: 15px;
}
</style>
