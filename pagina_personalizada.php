<?php
session_start();
if (!isset($_SESSION['user_id'])) {
    header("Location: index.html"); // Redirigir a la página de inicio de sesión si no está autenticado
    exit();
}

// Aquí puedes obtener los datos del estudiante desde la base de datos usando $_SESSION['user_id']
require 'database.php';
$user_id = $_SESSION['user_id'];
$query = "SELECT * FROM estudiantes WHERE id = ?";
$stmt = $conn->prepare($query);
$stmt->bind_param("i", $user_id);
$stmt->execute();
$result = $stmt->get_result();
$student = $result->fetch_assoc();
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Página Personalizada</title>
</head>
<body>
    <h1>Bienvenido, <?php echo htmlspecialchars($student['nombre']); ?></h1>
    <p>Tu número de matrícula es: <?php echo htmlspecialchars($student['matricula']); ?></p>
    <p>Tu correo electrónico es: <?php echo htmlspecialchars($student['email']); ?></p>
    <a href="logout.php">Cerrar sesión</a>
</body>
</html>