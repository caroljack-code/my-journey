<?php
// Database connection code (same as you provided)

if ($conn->connect_error) {
    die('Connection failed: ' . $conn->connect_error);
} else {
    $name = $_REQUEST["fullname"];
    $email = $_REQUEST['email'];
    $message = $_REQUEST['message'];

    $stmt = $conn->prepare("INSERT INTO tdata(name,email,message) VALUES(?,?,?)");
    $stmt->bind_param("sss", $name, $email, $message);

    $stmt->execute();
    
    // Send an email notification to your address
    $to = "thwellmugambigichovi02@gmail.com"; // My email address
    $subject = "New contact form submission from $name";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);

    echo "Message sent";
    $stmt->close();
    $conn->close();
}
?>



