class Auth {
    constructor() {
        this.email = '';
        this.password = '';
    }

    loginAuth = () => {
        // Get form values
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation for hardcoded credentials (for now)
        const validEmail = 'gyuhexmeow7@gmail.com'; // Replace with actual expected email
        const validPassword = '123'; // Replace with actual expected password

        // Check if entered credentials match
        if (email === validEmail && password === validPassword) {
            alert("Login Success");

            // Create a user session object
            const user = {
                email: email,
                students: [] // Initialize with an empty student list
            };

            // Store the user session in localStorage
            localStorage.setItem('currentUser', JSON.stringify(user));

            // Redirect to the dashboard
            window.location.replace('dashboard.html');
        } else {
            alert("Invalid credentials");
        }
    }
}

// Create an instance of the Auth class
const authenticate = new Auth();

// Handle the form submission
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();
    authenticate.loginAuth();
});
