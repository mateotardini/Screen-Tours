<?php
// Verificar si se envía mediante POST
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Recibir datos del formulario
    $data = json_decode(file_get_contents('php://input'), true);

    // Validar y sanitizar datos (ejemplo básico)
    $name = htmlspecialchars(trim($data['name']));
    $email = filter_var($data['email'], FILTER_SANITIZE_EMAIL);
    $subject = htmlspecialchars(trim($data['subject']));
    $comments = htmlspecialchars(trim($data['comments']));

    // Validar campos requeridos
    if (empty($name) || empty($email) || empty($subject) || empty($comments)) {
        http_response_code(400);
        echo json_encode(array('message' => 'Por favor, complete todos los campos.'));
        exit;
    }

    // Envío de correo electrónico
    $to = 'mateotardini@gmail.com';
    $message = "Nombre: $name\n";
    $message .= "Correo electrónico: $email\n\n";
    $message .= "Asunto: $subject\n";
    $message .= "Comentarios:\n$comments";
    $headers = "From: $email\r\nReply-To: $email\r\n";

    // Intentar enviar el correo
    $mailSent = mail($to, 'Mensaje de contacto desde tu sitio web', $message, $headers);


    if ($mailSent) {

        $cacheKey = 'contact_form_cache';
        $cacheTime = 3600;
        apcu_store($cacheKey, json_encode(array('message' => 'Correo enviado correctamente.')), $cacheTime);

        http_response_code(200);
        echo json_encode(array('message' => 'Correo enviado correctamente.'));
    } else {
        http_response_code(500);
        echo json_encode(array('message' => 'Error al enviar el correo.'));
    }
} else {
    http_response_code(405);
    echo json_encode(array('message' => 'Método no permitido.'));
}
?>