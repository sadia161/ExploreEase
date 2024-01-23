function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Check if both username and password are not blank
    if (username.trim() !== '' && password.trim() !== '') {
        // Redirect to index.html
        window.location.href = 'index.html';
    } else {
        // Show an alert or handle empty credentials
        alert('Please enter both username and password.');
    }
}
