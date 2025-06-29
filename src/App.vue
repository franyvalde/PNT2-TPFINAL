<template>
  <div id="app" class="d-flex flex-column min-vh-100">
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">Biblioteca Digital</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link to="/libros" class="nav-link">Libros</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/about" class="nav-link">Acerca de</router-link>
            </li>
            <li class="nav-item" v-if="authStore.user?.role === 'admin'">
              <router-link to="/admin" class="nav-link">Admin</router-link>
            </li>
            <li class="nav-item" v-if="authStore.user?.role === 'admin'">
              <router-link to="/admin/subir-libro" class="nav-link">Subir Libro</router-link>
            </li>
          </ul>
          <ul class="navbar-nav">
            <li class="nav-item" v-if="!authStore.isAuthenticated">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <!-- acaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa -->
             <li class="nav-item" v-if="!authStore.isAuthenticated">
  <router-link to="/register" class="nav-link">Registrarse</router-link>
</li>


            <li class="nav-item dropdown" v-else>
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hola, {{ authStore.user ? authStore.user.username : 'Usuario' }}
              </a>
              <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                <li><a class="dropdown-item" @click="handleLogout" href="#">Cerrar Sesión</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>

   
    <main class="flex-grow-1">
      <router-view />
    </main>

    
    <PiePagina />
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useAuthStore } from './store/auth.js';
import { useRouter } from 'vue-router';
import PiePagina from './components/PiePagina.vue'; 

const authStore = useAuthStore();
const router = useRouter();

const handleLogout = () => {
    authStore.logout();
    router.push('/login');
};

onMounted(() => {
  
    import('bootstrap/dist/js/bootstrap.bundle.min.js')
        .then(bootstrap => {
            
            const dropdownElement = document.getElementById('navbarDropdown');
            if (dropdownElement) {
                new bootstrap.Dropdown(dropdownElement);
            }
        })
        .catch(error => console.error("Error al cargar Bootstrap JS:", error));
});
</script>

<style>

html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

main {
  flex-grow: 1; 
  
  padding-bottom: 20px;
}
</style>