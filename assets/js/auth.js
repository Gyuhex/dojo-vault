document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Simple Validation for hardcoded credentials (for now)
    if (email === "gyuhexmeow7@gmail.com" && password === "kalabang70") {
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

    // Check credentials in localStorage (for demo purposes)
    // const users = JSON.parse(localStorage.getItem('users')) || [];
    // const user = users.find(u => u.email === email && u.password === password);

    // if (user) {
    //     localStorage.setItem('currentUser', JSON.stringify(user));
    //     window.location.href = 'dashboard.html';
    // } else {
    //     alert('Invalid credentials');
    // }
});
