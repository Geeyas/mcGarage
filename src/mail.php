<?php

$name = $_POST['Fullname'];
$number = $_POST['Number'];
$email = $_POST['Email'];
$subject = $_POST['Subject'];
$message = $_POST['Message'];

$mailHeader = "From:" . $name . "<" . $email . ">\r\n";
$receipent = "mcgarage6060@gmail.com";

mail($receipent, $subject, $message, $mailHeader)
    or die("Error");

echo '
<html>
<head>
<title>Thanks you!</title>
<style>
h1{color:#05337e, text-align:center}
</style>
</head>
<body>
<h1>Message has been sent Successfully. One of our team member will be in touch with you!<h1>
<a href="https://23838925.it.scu.edu.au">Home page</a>
</body>
</html>

';
