<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow p-4" style="min-width: 320px; max-width: 400px; width: 100%;">
      <h3 class="text-center mb-3">Iniciar Sesión</h3>
      <form @submit.prevent="handleLogin">
        <div class="mb-3">
          <label for="username" class="form-label">Usuario</label>
          <input
            v-model="username"
            type="text"
            id="username"
            class="form-control"
            placeholder="Ingrese su usuario"
            required
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Contraseña</label>
          <input
            v-model="password"
            type="password"
            id="password"
            class="form-control"
            placeholder="Ingrese su contraseña"
            required
          />
        </div>
        <button type="submit" class="btn btn-primary w-100">Ingresar</button>
        <p v-if="error" class="text-danger mt-2 text-center">{{ error }}</p>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '../store/auth';
import { useRouter } from 'vue-router';

const authStore = useAuthStore();
const router = useRouter();
const username = ref('');
const password = ref('');
const error = ref('');

const handleLogin = async () => {
  error.value = '';
  const success = await authStore.login(username.value, password.value);

  if (success) {
    router.push(authStore.user?.role === 'admin' ? '/admin' : '/');
  } else {
    error.value = 'Credenciales inválidas';
  }
};

onMounted(() => {
  authStore.loadFromLocalStorage();
});
</script>
