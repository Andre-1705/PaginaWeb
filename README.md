# PaginaWeb - Libros on line

Front-end del sitio web de gestión de libros. Interfaz para buscar, visualizar y gestionar un catálogo de libros.

## Tecnologías

- HTML5 + CSS3
- JavaScript vanilla
- Bootstrap 5.3.3
- Google Fonts (Ubuntu)
- SVG inline (íconos)

### Páginas

|     Archivo       |                  Descripción                     |
|-------------------|--------------------------------------------------|
|index.html         | Página principal: hero, buscador, tabla de libros|
|registrarse.html   | Formulario de registro de usuario                |
|inicio_sesion.html | Formulario de inicio de sesión                   |

#### Estructura

PaginaWeb/
├── index.html
├── registrarse.html
├── inicio_sesion.html
├── css/
│ └── style.css
├── js/
│ └── prueba.js
└── img/

> Uso

Abrir `index.html` en el navegador o servir con cualquier servidor estático:

```bash
npx serve .
```

> Funcionalidades

- Búsqueda de libros por nombre (resalta coincidencias en la tabla)
- Visualización del catálogo con portadas, títulos y precios
- Formularios de registro e inicio de sesión (preparados para futura integración con autenticación)

> Proximamente

- Conexión con la API REST (back)
- CRUD completo de libros desde la interfaz
- Autenticación de usuarios.
  