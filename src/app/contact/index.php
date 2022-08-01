<?php
if (!empty($_POST)) {
    $servername = 'localhost';
    $username = 'gachar10_geeyas';
    $password = 'GeeyasAcharyaSCU';
    $database = 'gachar10_mcGarage';

    //database connection
    $conn = mysqli_connect($servername, $username, $password, $database);
    if (!$conn) {
        die('Connection Failed : ' . mysqli_connect_error());
    }
    $Fullname = $_POST['Fullname'];
    $Email = $_POST['Email'];
    $Number = $_POST['Number'];
    $Subject = $_POST['Subject'];
    $Message = $_POST['Message'];

    $sql = "insert into ContactUs (Fullname, Email, Number, Subject, Message) values ('$Fullname', '$Email', '$Number', '$Subject', '$Message')";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo 'Data inserted Sucessfully';
    } else {
        echo 'Error' . mysqli_error($conn);
    }
    mysqli_close($conn);
}
