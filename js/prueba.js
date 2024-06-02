   // API 
   //const API_URL = 'https://covers.openlibrary.org/a/olid/OL23919A-M.jpg.json'
    

function invocarApi(){
    //alert('fetch');
    fetch('https://reqres.in/api/users?page=1')
    .then(response => response.json())
    .then(data => {
        Filas(data.data)
    });
}

function Filas(filas){
    const rows = filas.map (x => Fila(x));
    document.getElementById('datos').innerHTML = rows.join('');
}

function Fila(obj){  

    console.log(obj.email);
    return `
    <tr>
        <td>${obj.id}</td>
        <td>
            <img src="${obj.avatar}">
        </td>
        <td>${obj.first_name}</td> 
        <td>${obj.last_name}</td> 
    </tr>    
        `
}

// Validación de datos para que usuario y contraseña no estén en blanco


function validación() { 
    const usuario = document.getElementById('usuario').value;
    const contraseña = document.getElementById('contraseña').value; 

    if (usuario.trim() === '' || contraseña.trim() === '') {
        alert('Por favor, completa ambos campos.');
    }
}



