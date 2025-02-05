<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "sales@eco-solutions.ph"; // Your email address
    $subject = "New Inquiry from Website";
    $email = $_POST['email'];
    $message = $_POST['message'];

    $headers = "From: $email";

    if (mail($to, $subject, $message, $headers)) {
        echo "Email sent successfully!";
    } else {
        echo "Failed to send email.";
    }
}
?> 