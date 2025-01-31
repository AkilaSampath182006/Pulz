<?php
session_start();
$con=mysqli_connect('localhost','root','','pulz');
$name=$_POST['ID'];
$pwd=$_POST['pwd'];
$query="SELECT * FROM students WHERE studentID='{$name}' and pwd='{$pwd}'";
$result=mysqli_query($con,$query);
if(mysqli_num_rows($result)>0){
    while($row=mysqli_fetch_assoc($result)){
        if ($row['studentID'] == 3 or $row['role']=== 'Teacher') {
            $_SESSION['studentID'] = $name;
            mysqli_close($con); 
            header('Location: grade6.php');
            exit();
        }
        else{
            $_SESSION['phone_number'] = $phnum;
            mysqli_close($con);
            header('Location: index.php');
            exit(); 
        }

    }
    
    
}
else{
    echo "Recheck password or ID";
}
mysqli_close($con);

?>