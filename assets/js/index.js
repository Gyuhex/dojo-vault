function logout() {
    // Clear any user-related data in local storage or session storage
    localStorage.removeItem('currentUser'); // Adjust key as per your project
    localStorage.removeItem('authToken'); // If you use tokens for authentication

    // Optionally clear all local storage (if necessary)
    // localStorage.clear();

    // Redirect to the login or index page
    window.location.href = "index.html";
}
