<template>
    <div class="about-page-wrapper py-5">
        <div class="container mt-4 mb-5 about-section">

            <!-- Encabezado -->
            <div class="text-center mb-5">
                <i class="fas fa-tools about-icon mb-3 animate__animated animate__fadeInDown"></i>
                <h1 class="about-title animate__animated animate__fadeIn">Panel de Administración</h1>
                <p class="lead text-muted animate__animated animate__fadeInUp">
                    Bienvenido, Administrador.
                </p>
                <hr class="custom-hr animate__animated animate__zoomIn">
            </div>

            <!-- Descripción -->
            <div class="row justify-content-center mb-5">
                <div class="col-md-8">
                    <p class="about-description animate__animated animate__fadeInUp delay-100ms">
                        Como administrador , esta plataforma te permite <strong>explorar</strong> y
                        <strong>acceder</strong> fácilmente a una amplia colección de libros digitales en formato PDF.

                        Fue desarrollada con tecnologías modernas como Vue.js, Pinia y Bootstrap, priorizando el
                        rendimiento, la usabilidad y una experiencia intuitiva.

                    </p>

                </div>
            </div>


            <!-- Beneficios del sistema -->
            <div class="row text-center mt-5">
                <div class="col-md-4 mb-4 animate__animated animate__fadeInUp delay-400ms">
                    <div class="feature-box">
                        <i class="fas fa-lightbulb feature-icon mb-3"></i>
                        <h3>Postear Libro</h3>
                        <p> Publicá libros en formato PDF de manera <strong>rápida, sencilla y organizada</strong>,
                            manteniendo actualizada la biblioteca digital desde el panel de administración.</p>
                    </div>
                </div>
                <div class="col-md-4 mb-4 animate__animated animate__fadeInUp delay-500ms">
                    <div class="feature-box">
                        <i class="fas fa-users feature-icon mb-3"></i>
                        <h3>Editar y Eliminar Libros </h3>
                        <p>Herramientas intuitivas para <strong> modificar o eliminar libros </strong>existentes en la
                            colección. </p>
                    </div>
                </div>
                <div class="col-md-4 mb-4 animate__animated animate__fadeInUp delay-600ms">
                    <div class="feature-box">
                        <i class="fas fa-shield-alt feature-icon mb-3"></i>
                        <h3>Filtrado para busquedas</h3>
                        <p> Utilizá los filtros disponibles para <strong>buscar libros por nombre, autor o ID</strong>,
                            agilizando la administración y localización del contenido.</p>
                    </div>
                </div>
            </div>

            <!-- Advertencia -->
            <div class="alert alert-warning text-center mt-5 animate__animated animate__fadeInUp delay-800ms">
                <i class="fas fa-exclamation-triangle me-2"></i>
                Esta sección es solo para usuarios administradores. Asegúrate de no compartir tu acceso.
            </div>

            <!-- Botón CTA al panel de gestión -->
            <div class="text-center mt-4 animate__animated animate__fadeInUp delay-900ms">
                <router-link to="/libros" class="btn btn-outline-primary btn-lg custom-btn-hover">
                    <i class="fas fa-cogs me-2"></i> Ir al panel de gestión de libros
                </router-link>
            </div>

        </div>
    </div>


</template>

<script>
export default {
    name: 'About'
};
</script>

<style scoped>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';

.about-page-wrapper {
    background-color: #f0f4f8;
    min-height: calc(100vh - 100px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.about-section {
    background-color: #ffffff;
    border-radius: 12px;
    padding: 40px 30px;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 900px;
    margin: auto;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

.about-icon {
    font-size: 3.5rem;
    color: var(--bs-primary);
}

.about-title {
    font-size: 3rem;
    color: #2c3e50;
    margin-bottom: 15px;
    font-weight: 700;
}

.lead {
    font-size: 1.15rem;
    color: #6c757d;
}

.custom-hr {
    border-top: 2px solid rgba(0, 0, 0, 0.08);
    width: 60px;
    margin: 2rem auto;
}

.about-description {
    font-size: 1.05rem;
    color: #495057;
    line-height: 1.7;
    margin-bottom: 1rem;
    text-align: justify;
    padding: 0 15px;
}

.feature-box {
    background-color: #f8f9fa;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.05);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;
}

.feature-box:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.feature-icon {
    font-size: 2.5rem;
    color: var(--bs-info);
    margin-bottom: 15px;
}

.feature-box h3 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #343a40;
    margin-bottom: 10px;
}

.feature-box p {
    font-size: 0.95rem;
    color: #6c757d;
}

.cta-about-section {
    background-color: #e9f5ff;
    border-radius: 10px;
    padding: 30px;
    margin-top: 3rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
}

.cta-about-section h2 {
    font-size: 2.2rem;
    color: #007bff;
    font-weight: 600;
}


.custom-btn-hover {
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
    border-radius: 0.5rem;
    padding: 12px 25px;
    font-size: 1.1rem;
}

.custom-btn-hover:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 123, 255, 0.3);
}


.delay-100ms {
    animation-delay: 0.1s;
}

.delay-200ms {
    animation-delay: 0.2s;
}

.delay-300ms {
    animation-delay: 0.3s;
}

.delay-400ms {
    animation-delay: 0.4s;
}

.delay-500ms {
    animation-delay: 0.5s;
}

.delay-600ms {
    animation-delay: 0.6s;
}

.delay-700ms {
    animation-delay: 0.7s;
}
</style>
