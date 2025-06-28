import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '../store/auth.js'; 

import Home from '../views/Home.vue'; 
import Login from '../views/Login.vue'; 
import Admin from '../views/Admin.vue'; 
import About from '../views/About.vue'; 
import Register from '../views/Register.vue';
import ListaDeLibros from '../components/ListaDeLibros.vue';
import DetalleLibro from '../components/DetalleLibro.vue';
import SubirLibro from '../components/SubirLibro.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },
    { 
        path: '/register', 
        name: 'Register', 
        component: Register 
    }, 
    {
        path: '/admin',
        name: 'Admin',
        component: Admin,
        meta: { requiresAuth: true, requiresAdmin: true }, // Protege esta ruta
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/libros', // Nueva ruta para listar libros
        name: 'ListaDeLibros',
        component: ListaDeLibros,
    },
    {
        path: '/libros/:id', // Nueva ruta para el detalle del libro
        name: 'DetalleLibro',
        component: DetalleLibro,
        props: true, // Permite pasar el ID como prop
    },
    {
        path: '/admin/subir-libro', // Ruta para subir libros
        name: 'SubirLibro',
        component: SubirLibro,
        meta: { requiresAuth: true, requiresAdmin: true },
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

// Guardia de navegación para proteger rutas
router.beforeEach((to, from, next) => {
    const authStore = useAuthStore();
    if (to.meta.requiresAuth && !authStore.isAuthenticated) {
        next('/login'); // Redirige a login si no está autenticado
    } else if (to.meta.requiresAdmin && authStore.user?.role !== 'admin') {
        next('/'); // Redirige a home si no es admin
    } else {
        next();
    }
});

export default router;