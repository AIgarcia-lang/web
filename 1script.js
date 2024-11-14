document.getElementById('formInscripcion').addEvent ```javascript
Listener('submit', function(event) {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const identificacion = document.getElementById('identificacion').value;
    const cursoSeleccionado = document.getElementById('cursos').value;

    let mensaje = document.getElementById('mensaje');

    if (nombre && correo && identificacion && cursoSeleccionado) {
        mensaje.textContent = 'Inscripción exitosa para ' + nombre + ' en ' + cursoSeleccionado;
        mensaje.style.color = 'green';
    } else {
        mensaje.textContent = 'Por favor, complete todos los campos.';
        mensaje.style.color = 'red';
    }
});
``` ```javascript
    });
``` ```javascript
    });
