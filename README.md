# Relatos de Papel - Tienda en Línea de Libros 📚

**Relatos de Papel** es una tienda en línea diseñada para amantes de los libros. Este proyecto combina un frontend interactivo desarrollado con React y un backend simulado utilizando `json-server-auth`, ofreciendo una experiencia fluida y funcional para explorar, filtrar y comprar libros.

## Requisitos previos

Antes de iniciar el proyecto, asegúrate de cumplir con los siguientes requisitos:

- [Node.js](https://nodejs.org/) (versión 14 o superior)
- npm (incluido con Node.js)
- [npx](https://www.npmjs.com/package/npx) (incluido con npm)

## Instalación

1. Clona el repositorio en tu máquina local:

   ```bash
   git clone https://github.com/tu_usuario/relatos-de-papel.git
   ```

2. Navega al directorio del proyecto:

   ```bash
   cd relatos-de-papel
   ```

3. Instala las dependencias necesarias:

   ```bash
   npm install
   ```

## Iniciar el proyecto

El proyecto consta de dos partes: el **frontend** y el **backend**. Sigue estos pasos para ejecutarlos:

### Iniciar el Frontend

1. En el directorio raíz del proyecto, ejecuta:

   ```bash
   npm start
   ```

2. Esto abrirá el frontend en tu navegador en [http://localhost:3000](http://localhost:3000).

### Iniciar el Backend

1. Abre una nueva terminal en el mismo directorio del proyecto.

2. Ejecuta el siguiente comando para iniciar el servidor backend con `json-server-auth`:

   ```bash
   npx json-server-auth data/db.json --port 8000
   ```

3. El backend estará disponible en [http://localhost:8000](http://localhost:8000).

> **Nota:** Asegúrate de que el archivo `data/db.json` contiene los datos necesarios para el funcionamiento del backend.

## Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```
.
├── data/
│   └── db.json             # Archivo de datos para json-server
├── src/
│   ├── components/         # Componentes reutilizables
│   ├── context/            # Manejo del estado global con Context API
│   ├── hooks/              # Hooks personalizados
│   ├── pages/              # Páginas principales del proyecto
│   ├── services/           # Servicios para llamadas a la API
│   └── App.js              # Componente raíz
├── package.json            # Configuración de dependencias
└── README.md               # Documentación del proyecto
```

## Funcionalidades principales

- **Explorar libros:** Una lista de libros con filtros para encontrar fácilmente lo que buscas.
- **Carrito de compras:** Agrega libros al carrito y procede al pago.
- **Autenticación:** Regístrate o inicia sesión para gestionar tu experiencia personalizada.
- **Backend simulado:** `json-server-auth` gestiona los datos de libros y usuarios con autenticación básica.

## Scripts disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm start`: Inicia el servidor de desarrollo del frontend.
- `npx json-server-auth data/db.json --port 8000`: Inicia el servidor backend simulado.



