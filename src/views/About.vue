<template>
  <div class="about-page-wrapper py-5">
    <div class="container mt-4 mb-5 about-section">
     
      <div class="text-center mb-5">
        <i class="fas fa-info-circle about-icon mb-3 animate__animated animate__fadeInDown"></i>
        <h1 class="about-title animate__animated animate__fadeIn">Sobre esta Aplicación</h1>
        <p class="lead text-muted animate__animated animate__fadeInUp">
          Conocé más sobre nuestra misión y la tecnología que nos impulsa.
        </p>
        <hr class="custom-hr animate__animated animate__zoomIn">
      </div>

     
      <div class="row justify-content-center mb-5">
        <div class="col-md-8">
          <p class="about-description animate__animated animate__fadeInUp delay-100ms">
            Esta es una aplicación de Biblioteca Digital donde puedes explorar, buscar, y descargar libros en formato PDF.
          </p>
          <p class="about-description animate__animated animate__fadeInUp delay-200ms">
            Desarrollada por nuestro equipo utilizando Vue.js, Pinia, Bootstrap y otras tecnologías modernas para ofrecer una experiencia de usuario fluida y eficiente.
          </p>
          <p class="about-description animate__animated animate__fadeInUp delay-300ms">
            Nuestro objetivo es facilitar el acceso al conocimiento y la lectura a través de una plataforma sencilla e intuitiva, conectando a lectores con una vasta colección de obras.
          </p>
        </div>
      </div>

      
      <div class="row text-center mt-5">
        <div class="col-md-4 mb-4 animate__animated animate__fadeInUp delay-400ms">
          <div class="feature-box">
            <i class="fas fa-lightbulb feature-icon mb-3"></i>
            <h3>Innovación</h3>
            <p>Construida con las últimas tecnologías web para una experiencia óptima.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4 animate__animated animate__fadeInUp delay-500ms">
          <div class="feature-box">
            <i class="fas fa-users feature-icon mb-3"></i>
            <h3>Accesibilidad</h3>
            <p>Diseñada para que el conocimiento sea accesible para todos.</p>
          </div>
        </div>
        <div class="col-md-4 mb-4 animate__animated animate__fadeInUp delay-600ms">
          <div class="feature-box">
            <i class="fas fa-shield-alt feature-icon mb-3"></i>
            <h3>Seguridad</h3>
            <p>Protegemos tus datos y garantizamos una navegación segura.</p>
          </div>
        </div>
      </div>

     
      <div class="text-center mt-5 pt-4 cta-about-section animate__animated animate__fadeInUp delay-700ms">
        <h2 class="mb-4">¿Listo para explorar?</h2>
        <router-link to="/libros" class="btn btn-primary btn-lg custom-btn-hover">
          <i class="fas fa-book-reader me-2"></i> Ir a la Biblioteca
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


.delay-100ms { animation-delay: 0.1s; }
.delay-200ms { animation-delay: 0.2s; }
.delay-300ms { animation-delay: 0.3s; }
.delay-400ms { animation-delay: 0.4s; }
.delay-500ms { animation-delay: 0.5s; }
.delay-600ms { animation-delay: 0.6s; }
.delay-700ms { animation-delay: 0.7s; }
</style>

