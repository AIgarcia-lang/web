document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const matricula = document.getElementById('matricula').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('error-message');

    // Validación del correo electrónico
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage.textContent = 'El correo electrónico no es válido.';
        return;
    }

    // Validación de la contraseña
    if (password.length < 6) {
        errorMessage.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        return;
    }

    // Si todo es correcto, redirigir a la página del estudiante
    alert('Inicio de sesión exitoso');
    window.location.href = 'estudiante.html';
});