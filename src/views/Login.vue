<template>
    <div class="container my-4">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
            <div class="mb-3">
                <label for="username" class="form-label">Username</label>
                <input
                    type="text"
                    v-model="username"
                    id="username"
                    class="form-control"
                    placeholder="Usuario"
                    required
                />
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input
                    type="password"
                    v-model="password"
                    id="password"
                    class="form-control"
                    placeholder="Contraseña"
                    required
                />
            </div>
            <button type="submit" class="btn btn-primary">Iniciar sesión</button>
            </form>
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

const handleLogin = async () => {
    const success = await authStore.login(username.value, password.value);

    if (success) {
        if (authStore.user?.role === 'admin') {
            router.push('/admin');
        } else {
            router.push('/');
        }
    } else {
        alert("Credenciales inválidas");
    }
};

onMounted(() => {
    authStore.loadFromLocalStorage();
});
</script>