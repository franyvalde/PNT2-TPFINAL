<template>
    <footer class="footer mt-auto py-3 bg-dark">
        <div class="container text-center">
            <p>&copy; 2025 PNT Todos los derechos reservados.</p>
            <div class="contact">
                <p>Contáctanos: info@elgrupo.com</p>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: 'Footer'
    };
</script>

<style scoped>
    .footer {
        background-color: #23272b;
        padding: 10px 0;
        border-top: 1px solid #495057;
        color: #ffffff; /* Asegura que el texto sea visible */
    }

    .footer p {
        margin: 0;
        font-size: 0.9rem;
        color: #ffffff;
    }
</style>