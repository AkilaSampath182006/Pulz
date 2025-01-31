<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign Up</title>
  <link rel="stylesheet" href="css/sign.css">
</head>
<body>
  <div class="wrapper">
    <form action="registerPr.php" method="POST">
      <h2>Sign Up</h2>
        <div class="input-field">
        <input type="text" name="ID" >
        <label>ID</label>
      </div>
      <div class="input-field">
        <input type="password" name="pwd" required>
        <label>Password</label>
      </div>
      <div class="input-field">
        <input type="text" name="name" required>
        <label>Name</label>
      </div><br>
      <div class="input-field">
      <label for="role">Role</label>
    <select id="role" name="role" onchange="showFields()" required>
      <option value="" disabled selected>Select your role</option>
      <option value="Teacher">Teacher</option>
      <option value="Student">Student</option>
    </select>
      </div>
       <!--  for Teacher -->
       <div class="input-field">
    <div id="teacher-fields" style="display: none;">
      
      <input type="text" id="subject" name="subject" placeholder="Enter your subject" />
      <label for="subject">SubjectID</label>
    </div>
    <button type="submit">Sign Up</button>
</div>
    <!--  for Student -->
    <div id="student-fields" style="display: none;">
    <div class="input-field">
      <input type="text" id="grade" name="grade" placeholder="Enter your grade" />
      <label for="grade">Grade</label>
</div>
<div class="input-field">
      <input type="text" id="sport" name="sport" placeholder="Enter your grade" />
      <label for="sport">Sport</label>
</div>
<div class="input-field">
      <input type="text" id="society" name="society" placeholder="Enter your grade" />
      <label for="society">Society</label>
</div>


<button type="submit">Sign Up</button>

     <br><br>
      
      
    </form>
  </div>
</body>
<script>
    function showFields() {
  const role = document.getElementById('role').value;

  // Hide all 
  document.getElementById('teacher-fields').style.display = 'none';
  document.getElementById('student-fields').style.display = 'none';

  // Show fields 
  if (role === 'Teacher') {
    document.getElementById('teacher-fields').style.display = 'block';
  } else if (role === 'Student') {
    document.getElementById('student-fields').style.display = 'block';
  }
}

</script>
</html>