<?php
if (!empty($_POST)) {
    $servername = 'localhost';
    $username = 'root';
    $password = '#Geenesh1';
    $database = 'mcgarage';

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
    $PersonID = $_POST['PersonID'];

    $sql = "insert into contact_us (Fullname, Email, Number, Subject, Message) values ('$Fullname', '$Email', '$Number', '$Subject', '$Message')";

    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo 'Data inserted Sucessfully';
    } else {
        echo 'Error' . mysqli_error($conn);
    }
    mysqli_close($conn);
}
