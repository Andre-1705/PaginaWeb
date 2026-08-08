// Configuración de la API del back
const API_BASE = 'http://localhost:8080'; // cambiar al deploy cuando sea

// Obtener todos los libros del back
function obtenerLibros() {
    fetch(API_BASE + '/ListarLibroController')
        .then(res => res.json())
        .then(libros => renderizarLibros(libros));
}

// Renderizar la tabla dinámicamente
function renderizarLibros(libros) {
    const tbody = document.querySelector('.elegi-tabla tbody');
    tbody.innerHTML = libros.map(libro => `
        <tr>
            <td>${libro.id}</td>
            <td><img src="${libro.img}" alt="${libro.titulo}"></td>
            <td>${libro.titulo}</td>
            <td>$${libro.precio}</td>
        </tr>
    `).join('');
}

