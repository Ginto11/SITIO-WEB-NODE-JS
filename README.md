 ![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20DESAROLLO-green)
# SITIO-WEB-NODE-JS

Sitio web realizado con Node js, que se conecta con la API REST, para llevar a cabo cada una de las peticiones realizadas por el cliente.

## Descripción

Este proyecto es una aplicación web construida con Node.js, Express, EJS y PostgreSQL. Utiliza Bootstrap para un diseño responsive y moderno. La aplicación permite a los usuarios interactuar con una base de datos PostgreSQL, realizando operaciones CRUD (Crear, Leer, Actualizar, Eliminar) de manera sencilla.

## Tecnologías utilizadas

- **Node.js**: Entorno de ejecución para JavaScript del lado del servidor.
- **Express**: Framework web para Node.js, utilizado para manejar rutas y solicitudes HTTP.
- **EJS**: Motor de plantillas para generar HTML dinámico.
- **PostgreSQL**: Base de datos relacional utilizada para almacenar la información.
- **Bootstrap**: Framework CSS para un diseño responsivo y atractivo.

## Requisitos previos

Asegúrate de tener instaladas las siguientes dependencias antes de empezar:

- [Node.js](https://nodejs.org/)
- [PostgreSQL](https://www.postgresql.org/)

## Instalación

Sigue estos pasos para poner en marcha la aplicación en tu entorno local:

### 1. Clonar el repositorio

Primero, clona este repositorio en tu máquina local:

```
git clone https://github.com/tu-usuario/tu-repositorio.git
cd tu-repositorio
```
### 2. Instalar dependencias

Dentro del directorio del proyecto, instala las dependencias utilizando `npm`:
```
npm install

```
### 3. Configuración de la base de datos
Antes de ejecutar la aplicación, asegúrate de que tienes PostgreSQL configurado y corriendo en tu máquina. Luego, crea una base de datos para la aplicación y configura las credenciales adecuadas.

- Crea una base de datos en PostgreSQL:
```
CREATE DATABASE nombre_de_tu_base_de_datos;
```

- Configura el archivo `.env` con las credenciales de la base de datos. Ejemplo:
```
DB_USER=tu_usuario
DB_HOST=localhost
DB_DATABASE=nombre_de_tu_base_de_datos
DB_PASSWORD=tu_contraseña
DB_PORT=5432
```
### 4. Migraciones de base de datos
Si tu aplicación utiliza migraciones para la base de datos, asegúrate de ejecutarlas (dependiendo de tu configuración, esto podría estar en un archivo específico o script).

### 5. Ejecutar la aplicación
```
npm start
```
### Uso
Accede a la aplicación a través de tu navegador en `http://localhost:3000` y empieza a interactuar con ella.

### Rutas
- GET `/`: Página principal de la aplicación.
- GET `/usuarios`: Muestra la lista de usuarios.
- POST `/usuario`: Crea un nuevo usuario.
- PUT `/usuario/:id`: Actualiza un usuario existente.
- DELETE `/usuario/:id`: Elimina un usuario.


