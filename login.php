<?php
session_start();
require 'database.php'; // Archivo para la conexión a la base de datos

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $matricula = $_POST['matricula'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    // Aquí deberías realizar la consulta a la base de datos para verificar las credenciales
    $query = "SELECT * FROM estudiantes WHERE matricula = ? AND email = ?";
    $stmt = $conn->prepare($query);
    $stmt->bind_param("ss", $matricula, $email);
    $stmt->execute();
    $result = $stmt->get_result();
    
    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['password '])) {
            $_SESSION['user_id'] = $row['id'];
            header("Location: pagina_personalizada.php"); // Redirigir a la página personalizada
            exit();
        } else {
            echo "Contraseña incorrecta.";
        }
    } else {
        echo "Número de matrícula o correo electrónico no válidos.";
    }
}
?> ### 5. Conexión a la Base de Datos (database.php)

```php
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "nombre_base_datos";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}
?>