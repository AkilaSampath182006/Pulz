<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Sign In</title>
  <link rel="stylesheet" href="css/sign.css">
</head>
<body>
  <div class="wrapper">
    <form action="siginPr.php" method="POST">
      <h2>Sign In</h2>
        <div class="input-field">
        <input type="text" name="ID" required>
        <label>Enter your ID</label>
      </div>
      <div class="input-field">
        <input type="password" name="pwd" required>
        <label>Enter your password</label>
      </div>
      <div class="forget">
        <label for="remember">
          <input type="checkbox" id="remember">
          <p>Remember me</p>
        </label>
        
      </div>
      <button type="submit">Log In</button>
      <div class="register">
        <p>Don't have an account? <a href="register.php">Register</a></p>
      </div>
    </form>
  </div>
</body>
</html>