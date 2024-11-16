document.getElementById('addStudentForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get input values
    const studentName = document.getElementById('studentName').value;
    const age = document.getElementById('age').value;
    const address = document.getElementById('address').value;
    const contactNumber = document.getElementById('contactNumber').value;
    const membership = document.getElementById('membership').value;
    const beltColor = document.getElementById('beltColor').value;

    // Create student object
    const student = {
        name: studentName,
        age: age,
        address: address,
        contactNumber: contactNumber,
        membership: membership,
        beltColor: beltColor
    };

    // Get current user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    // Ensure the user has a students array; if not, initialize it
    if (!currentUser.students) {
        currentUser.students = [];
    }

    // Add new student to the current user's students array
    currentUser.students.push(student);

    // Save the updated currentUser back to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Optional: Alert the user that the student was added
    alert("Student added successfully!");

    // Clear form fields (optional)
    document.getElementById('addStudentForm').reset();
});
