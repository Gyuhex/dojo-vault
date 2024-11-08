document.getElementById('loginForm').addEventListener('submit', function(event) {
   event.preventDefault();

    //Get values from input    
   const email = document.getElementById('email').value; 
   const password = document.getElementById('password').value; 
//    console.log(email, password);

    // Simple Validation
    if(email === "gyuhexmeow7@gmail.com" && password === "kalabang70"){
        alert("Success");
    } else {
        alert("Invalid")
    }
});
