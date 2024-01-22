function redirectToLogin(userType) {
    if (userType === 'customer') {
        window.location.href = 'login.html';
    } else if (userType === 'hotelowner') {
        window.location.href = 'loginowner.html';
    } else {
        alert('Invalid user type selected.');
    }
}
