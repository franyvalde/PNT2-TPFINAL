<template>
  <div class="container my-4">
    <h2>Registro</h2>
    <form @submit.prevent="handleRegister">

      <div class="mb-3">
        <label for="name" class="form-label">Nombre</label>
        <input type="text" v-model="name" id="name" class="form-control" placeholder="Nombre" required />
      </div>
      <div class="mb-3">
        <label for="lastName" class="form-label">Apellido</label>
        <input type="text" v-model="lastName" id="lastName" class="form-control" placeholder="Apellido" required />
      </div>
      <div class="mb-3">
        <label for="username" class="form-label">Username (Email)</label>
        <input type="email" v-model="username" id="username" class="form-control" placeholder="tu.usuario@ejemplo.com"
          required />
      </div>
      <div class="mb-3">
        <label for="password" class="form-label">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" placeholder="Contraseña"
          required />
      </div>
      <button type="submit" class="btn btn-primary">Registrarse</button>
      <p class="mt-3">Si ya estás registrado, <router-link to="/login">haz click aquí</router-link></p>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useAuthStore } from '../store/auth.js';
import { useRouter } from 'vue-router';
import axios from 'axios';

const authStore = useAuthStore();
const router = useRouter();

const username = ref('');
const password = ref('');
const name = ref('');
const lastName = ref('');

const MOCKAPI_USERS_URL = 'https://6860314fc55df67558a061ca.mockapi.io/users/users';

const handleRegister = async () => {
  try {
    const response = await axios.post(MOCKAPI_USERS_URL, {
      username: username.value,
      password: password.value,
      name: name.value,
      lastName: lastName.value,
      role: 'user'
    });

    if (response.status === 201) {
      console.log('Usuario registrado en MockAPI:', response.data);
      alert('¡Registro exitoso! Ahora puedes iniciar sesión con tu nuevo usuario.');

      router.push('/login');
    } else {
      console.error('Error al registrar usuario - Código de estado:', response.status, response.data);
      alert(`Error al registrar. Código: ${response.status}. Mensaje: ${response.data.message || 'Inténtalo de nuevo.'}`);
    }
  } catch (error) {
    console.error('Error durante el registro:', error);
    if (error.response) {
      console.error('Respuesta de error del servidor:', error.response.data);
      alert(`Error en el servidor: ${error.response.data.message || 'Hubo un problema al registrar.'}`);
    } else if (error.request) {
      console.error('No se recibió respuesta del servidor. ¿Hay conexión a internet?');
      alert('No se pudo conectar con el servidor. Por favor, verifica tu conexión a internet.');
      console.error('Error desconocido:', error.message);
      alert('Ocurrió un error inesperado durante el registro.');
    }
  }
};
</script>

<style scoped>
.container {
  max-width: 500px;
  margin-top: 50px;
  padding: 30px;
  background-color: #ffffff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

h2 {
  text-align: center;
  margin-bottom: 30px;
  color: #343a40;
}

.form-label {
  font-weight: 600;
  color: #495057;
}

.btn-primary {
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  font-size: 1.1rem;
  margin-top: 20px;
}

p.mt-3 {
  text-align: center;
  margin-top: 15px;
  font-size: 0.95rem;
  color: #6c757d;
}

p.mt-3 a {
  color: var(--bs-primary);
  text-decoration: none;
  font-weight: 600;
}

p.mt-3 a:hover {
  text-decoration: underline;
}
</style>