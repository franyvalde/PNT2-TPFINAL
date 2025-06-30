# 📚 Biblioteca Digital

Una aplicación web para gestionar y compartir libros digitales en formato PDF, desarrollada con Vue.js 3 y MockAPI.

## 📋 Descripción

Biblioteca Digital es una plataforma que permite a los usuarios explorar, buscar y descargar libros en formato PDF. Los administradores pueden gestionar el catálogo agregando nuevos libros con sus respectivas portadas y descripciones.

## 🚀 Características

### Para Usuarios
- 📖 Explorar catálogo completo de libros
- 🔍 Buscar libros por título o autor
- 📥 Descargar libros en formato PDF
- 👤 Registro y autenticación de usuarios
- 📱 Diseño responsive para todos los dispositivos

### Para Administradores
- ➕ Agregar nuevos libros al catálogo
- 📝 Gestionar información de libros (título, autor, descripción)
- 🖼️ Subir portadas mediante URL
- 📄 Vincular archivos PDF mediante URL

## 🛠️ Tecnologías Utilizadas

- **Frontend Framework:** Vue.js 3
- **Router:** Vue Router 4
- **State Management:** Pinia
- **Estilos:** Bootstrap 5
- **HTTP Client:** Axios
- **Build Tool:** Vite
- **Backend Simulado:** MockAPI

## 📦 Instalación

### Prerrequisitos
- Node.js (v14 o superior)
- npm 

### Pasos de instalación

1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/biblioteca-digital.git
cd biblioteca-digital
```

2. Instalar dependencias
```bash
npm install
# o
yarn install
```


3. Ejecutar la aplicación
```bash
npm run dev
# o
yarn dev
```

4. Abrir en el navegador
```
http://localhost:5173
```

## 🔑 Usuarios de Prueba

### Usuario Regular
- **Email:** usuario@test.com
- **Contraseña:** user123
- **Permisos:** Ver y descargar libros

### Usuario Administrador
- **Email:** admin
- **Contraseña:** admin
- **Permisos:** Todos los permisos + gestión de libros

## 🏗️ Estructura del Proyecto

```
biblioteca-digital/
├── src/
│   ├── components/
│   │   ├── NavBar.vue
│   │   ├── PiePagina.vue
│   │   ├── ListaDeLibros.vue
│   │   ├── DetalleLibro.vue
│   │   └── SubirLibro.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   └── Admin.vue
│   ├── router/
│   │   └── index.js
│   ├── store/
│   │   └── auth.js
│   ├── services/
│   │   └── libroService.js
│   ├── App.vue
│   └── main.js
├── public/
├── package.json
├── vite.config.js
└── README.md
```

## 📸 Captura de Pantalla
![image](https://github.com/user-attachments/assets/fc2f6259-21d4-4196-8f6c-9eb6eee9b14a)


### Página Principal
La página de inicio muestra una bienvenida y acceso rápido al catálogo.

### Catálogo de Libros
Vista de tarjetas con todos los libros disponibles, mostrando portada, título, autor y descripción.

### Detalle de Libro
Información completa del libro con opción de descarga del PDF.

### Panel de Administración
Formulario para agregar nuevos libros (solo visible para administradores).

## 🚦 Flujo de la Aplicación

1. **Registro/Login:** Los usuarios pueden registrarse o iniciar sesión
2. **Exploración:** Navegar por el catálogo de libros
3. **Búsqueda:** Filtrar libros por título o autor
4. **Descarga:** Acceder a los PDFs de los libros
5. **Administración:** Los admins pueden agregar nuevos libros

## ⚙️ Scripts Disponibles

```bash
# Desarrollo
npm run dev

# Construir para producción
npm run build

# Vista previa de producción
npm run preview
```

## 📝 Proximas Features
- [ ] Implementar edición de libros
- [ ] Implementar eliminación de libros
- [ ] Agregar paginación al catálogo
- [ ] Implementar categorías de libros
- [ ] Agregar sistema de favoritos
- [ ] Implementar comentarios y reseñas

## 👥 Autores

Aixa Naya
Carlos Arteaga
Franco Valderrama
Alejo madama


## 🙏 Agradecimientos

- Profesor Daniel Sanchez de la materia PNT2
- Compañeros de equipo
- Documentación de Vue.js

---

**Nota:**  proyecto académico desarrollado para la materia de PNT2. Utiliza MockAPI como simulador de backend.
