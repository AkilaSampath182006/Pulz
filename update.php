<?php
SESSION_START();
$conn=mysqli_connect('localhost','root','','pulz');
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $studentID = $_POST['ID'];
    $fTerm = $_POST['fterm'];
    $sTerm = $_POST['sterm'];
    $tTerm = $_POST['tterm'];
    $sports = $_POST['sport'];
    $society = $_POST['society'];
    $name = $_POST['Name'];

    // Using a prepared statement
    $updateQuery = "
        UPDATE marks
        JOIN students ON marks.studentID = students.studentID
        SET marks.fTerm = '$fTerm', 
            marks.sTerm = '$sTerm', 
            marks.tTerm = '$tTerm',
            students.Name = '$name',
            students.sports = '$sports',
            students.society = '$society'
        WHERE marks.studentID = '$studentID' ";
if (mysqli_query($conn, $updateQuery)) {
    header("Location: indexOne.php");
    exit();
} else {
    echo "<p style='color: red;'>Error updating data: " . mysqli_error($conn) . "</p>";
}    
}