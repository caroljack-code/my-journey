<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];
  $to = "carolyneki260@gmail.com"; // Your email address

  $subject = "New contact form submission from $name";
  $headers = "From: $email";

  // Send the email
  mail($to, $subject, $message, $headers);

  // You can add additional logic here, such as sending a confirmation response.
  echo "Message sent successfully!";
}
?>
