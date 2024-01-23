function login() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if both username and password are not blank
    if (username !== '' && password !== '') {
        // Redirect to ownerpage.html
        window.location.href = 'ownerpage.html';
    } else {
        // Show an alert or handle empty credentials
        alert('Please enter both username and password.');
    }
}

// Add an event listener to the form
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting
    login(); // Call the login function
});
