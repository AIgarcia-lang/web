document.getElementById('loginForm').addEventListener('submit', function(event) {
    let errorMessages = '';
    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Validación de matrícula
    if (matricula.trim() === '') {
        errorMessages += 'El número de matrícula es obligatorio.<br>';
    }

    // Validación de correo electrónico
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessages += 'El correo electrónico no es válido.<br>';
    }

    // Validación de contraseña
    if (password.length < 6) {
        errorMessages += 'La contraseña debe tener al menos 6 caracteres.<br>';
    }

    if (errorMessages) {
        event.preventDefault(); // Evitar el envío del formulario
        document.getElementById('errorMessages').innerHTML = errorMessages;
    } else {
        document.getElementById('errorMessages').innerHTML = ''; // Limpiar mensajes de error
    }
});