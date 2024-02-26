document.addEventListener('DOMContentLoaded', function() {
  var submitButton = document.getElementById('loginButton');

  submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent default form submission behavior
      
      // Call the validateForm function to perform form validation
      if (validateForm()) {
        // If form validation passes, show a confirmation message
        var confirmed = confirm('Do you want to submit the form?');
        if (confirmed) {
            // If the user confirms, you can proceed with further actions,
            // such as submitting the form or making AJAX requests.
            console.log('Form submitted successfully!');
            // Example: document.getElementById('loginForm').submit();
        } else {
            console.log('Form submission cancelled.');
        }
    } else {
        // If form validation fails, you can handle errors or display messages to the user.
        console.log('Form validation failed!');
    }
  });

  function validateForm() {
    var usernameInput = document.getElementById("username");
    var passwordInput = document.getElementById("password");
    var usernameError = document.getElementById("usernameError");
    var passwordError = document.getElementById("passwordError");
    var isValid = true;

    // Reset error messages
    if (usernameError) usernameError.textContent = '';
    if (passwordError) passwordError.textContent = '';

    // Custom username and password for validation
    var correctUsername = "nichu"; // Replace 'your_username' with your actual username
    var correctPassword = "12345678"; // Replace 'your_password' with your actual password

    // Validate username and password
    if (!usernameInput || usernameInput.value.trim() !== correctUsername) {
        if (usernameError) usernameError.textContent = 'Invalid username';
        isValid = false;
    }

    if (!passwordInput || passwordInput.value !== correctPassword) {
        if (passwordError) passwordError.textContent = 'Invalid password';
        isValid = false;
    }
    if (isValid) {
      window.location.href = "form2.html"; // Redirect to page 2 on successful login
  }

    return isValid;
}


});

function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
      sidebar.style.width = "0";
  } else {
      sidebar.style.width = "250px";
  }
}



