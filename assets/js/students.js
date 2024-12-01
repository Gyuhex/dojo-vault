import { Student, StudentManager } from './modules/storage.js';

// Create the student manager instance and attach it to the global window object
const studentManager = new StudentManager();
window.studentManager = studentManager; // Make it globally accessible

// Example Usage
studentManager.displayStudents();

// Event listener for adding a student
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
    const student = new Student(studentName, age, address, contactNumber, membership, beltColor);

    // Add student using the addStudent method
    studentManager.addStudent(student);
});
