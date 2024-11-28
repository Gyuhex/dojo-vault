
class Auth {
    constructor(email, password) {
        this.email = email
        this.password = password
    }

    loginAuth = () => {
         // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple Validation for hardcoded credentials (for now)
        if (email === email && password === password) {
            alert("Login Success");

            // Save session for this user (hardcoded for now)
            const user = {
                email: email,
                password: password,
                students: [] // Initialize with an empty student list
            };

            // Store user session in localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Redirect to the dashboard
            window.location.href = 'dashboard.html';
        } else {
            alert("Invalid credentials");
        }
    }
}

let authenticate = new Auth();

document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    authenticate.loginAuth();
});
