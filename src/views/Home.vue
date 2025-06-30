<template>
  <div class="home-page-wrapper">

    <section class="welcome-section text-center py-5">
      <div class="container">
        <h1 class="display-4 mb-3">Bienvenido a Biblioteca Digital</h1>
        <p class="lead mb-4">Una biblioteca digital donde podrás explorar, descargar y disfrutar de nuestra colección de
          libros.</p>

        <section class="carousel-section py-5">
          <div class="container">
            <div id="booksCarousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="3000">
              <div class="carousel-indicators">
                <button type="button" data-bs-target="#booksCarousel" data-bs-slide-to="0" class="active"
                  aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#booksCarousel" data-bs-slide-to="1"
                  aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#booksCarousel" data-bs-slide-to="2"
                  aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#booksCarousel" data-bs-slide-to="3"
                  aria-label="Slide 4"></button>
              </div>

              <div class="carousel-inner rounded-5">
                <div class="carousel-item active">
                  <img
                    src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                    class="d-block w-100 carousel-image" alt="Biblioteca clásica">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Literatura Clásica</h5>
                    <p>Descubre los grandes clásicos de la literatura universal</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img src="https://images.pexels.com/photos/1595085/pexels-photo-1595085.jpeg"
                    class="d-block w-100 carousel-image" alt="Código de programación">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Ciencia y Tecnología</h5>
                    <p>Mantente al día con los últimos avances científicos</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                    class="d-block w-100 carousel-image" alt="Libros de historia">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Historia y Biografías</h5>
                    <p>Explora el pasado a través de relatos fascinantes</p>
                  </div>
                </div>

                <div class="carousel-item">
                  <img
                    src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600&q=80"
                    class="d-block w-100 carousel-image" alt="Libros digitales">
                  <div class="carousel-caption d-none d-md-block">
                    <h5>Lectura Digital</h5>
                    <p>Accede a miles de libros desde cualquier dispositivo</p>
                  </div>
                </div>
              </div>

              <button class="carousel-control-prev" type="button" data-bs-target="#booksCarousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Anterior</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#booksCarousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Siguiente</span>
              </button>
            </div>
          </div>
        </section>
        <div class="container">

          <p class="text-center text-muted">Sumérgete en un mundo de conocimiento.</p>
        </div>

        <p class="mb-4">Encuentra tu próxima lectura favorita.</p>
        <router-link to="/libros" class="btn btn-primary btn-lg custom-btn-hover" role="button">
          <i class="fas fa-book me-2"></i> Explorar Libros
        </router-link>
      </div>
    </section>





  </div>
</template>

<script>

export default {

};
</script>

<style scoped>
.home-page-wrapper {
  background-color: #f5f7fa;
  min-height: calc(100vh - 100px);
}


.welcome-section {
  background-color: #f5f7fa;
  border-radius: 0;
  padding: 4rem 2rem;
  box-shadow: none;
  color: #343a40;
}

.welcome-section h1 {
  font-weight: 700;
  font-size: 3.2rem;
}

.welcome-section p.lead {
  font-size: 1.15rem;
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

.content-spacer {
  background-color: #f5f7fa;
  padding-top: 3rem;
  padding-bottom: 5rem;
}

.carousel-image {
  width: 100%;
  height: 60vh;
  /* Altura relativa al viewport */
  max-height: 500px;
  /* Altura máxima */
  min-height: 300px;
  /* Altura mínima */
  object-fit: cover;
  filter: brightness(0.7);
}

.carousel-caption {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 10px;
  padding: 1rem;
  bottom: 2rem;
  left: 50%;
  right: auto;
  transform: translateX(-50%);
  max-width: 90%;
}

.carousel-caption h5 {
  font-size: clamp(1.2rem, 3vw, 2rem);
  /* Tamaño responsivo */
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.carousel-caption p {
  font-size: clamp(0.9rem, 2.5vw, 1.2rem);
  /* Tamaño responsivo */
  margin-bottom: 0;
}

.carousel-section {
  background-color: #f8f9fa;
}

.custom-btn-hover:hover {
  transform: translateY(-2px);
  transition: all 0.3s ease;
}

/* Responsive breakpoints */
@media (max-width: 1200px) {
  .carousel-image {
    height: 50vh;
    max-height: 400px;
  }
}

@media (max-width: 992px) {
  .carousel-image {
    height: 45vh;
    max-height: 350px;
  }

  .carousel-caption {
    padding: 0.8rem;
  }
}

@media (max-width: 768px) {
  .carousel-image {
    height: 40vh;
    max-height: 300px;
    min-height: 250px;
  }

  .carousel-caption {
    padding: 0.6rem;
    bottom: 1rem;
  }
}

@media (max-width: 576px) {
  .carousel-image {
    height: 35vh;
    max-height: 250px;
    min-height: 200px;
  }

  .carousel-caption {
    padding: 0.5rem;
    bottom: 0.5rem;
    max-width: 95%;
  }
}

@media (max-width: 400px) {
  .carousel-image {
    height: 30vh;
    min-height: 180px;
  }

  .carousel-caption h5 {
    font-size: 1rem;
  }

  .carousel-caption p {
    font-size: 0.8rem;
  }
}
</style>
