<template>
  <div class="home-page-wrapper">
   
    <section class="welcome-section text-center py-5">
      <div class="container">
        <h1 class="display-4 mb-3">Bienvenido a la Biblioteca Digital</h1>
        <p class="lead mb-4">Explora, descarga y disfruta de nuestra colección de libros.</p>
      
        <p class="mb-4">Encuentra tu próxima lectura favorita.</p>
        <router-link to="/libros" class="btn btn-primary btn-lg custom-btn-hover" role="button">
          <i class="fas fa-book me-2"></i> Explorar Libros
        </router-link>
      </div>
    </section>

  
    <section class="content-spacer py-5">
        <div class="container">
            
            <p class="text-center text-muted">Sumérgete en un mundo de conocimiento.</p>
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
</style>
