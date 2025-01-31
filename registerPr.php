<?php
session_start();

// Database connection
$con = mysqli_connect('localhost', 'root', '', 'pulz');

// Collecting form data
$name = $_POST['name'];
$id = $_POST['ID'];
$pwd = $_POST['pwd'];
$role = $_POST['role'];
$sport = $_POST['sport'];
$society = $_POST['society'];
$grade= $_POST['grade'];
$subject= $_POST['subject'];
// Insert query
$queryOne = "INSERT INTO students VALUES ('$id', '$name', '$grade', '$sport', '$society', '$pwd', '$role')";
$queryTwo= "INSERT INTO teachers VALUES ('$id','$subject' ,'$name')";
// Execute query
$resultOne = mysqli_query($con, $queryOne);
$resultTwo = mysqli_query($con, $queryTwo);
// Redirect on success
if ($resultOne) {
    header('Location: index.php');
    exit();
}
if ($resultTwo) {
    header('Location: index.php');
    exit();
}

// Close database connection
mysqli_close($con);
?>