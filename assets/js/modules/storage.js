class Student {
    constructor(name, age, address, contactNumber, membership, beltColor) {
        this.name = name;
        this.age = age;
        this.address = address;
        this.contactNumber = contactNumber;
        this.membership = membership;
        this.beltColor = beltColor;
    }
}

class StudentManager {
    constructor() {}

    // Fetch student data from localStorage
    getStudentData = () => {
        const storedStudentData = JSON.parse(localStorage.getItem('currentUser'));
        return storedStudentData ? storedStudentData.students : [];
    };

    // Display students
    displayStudents = () => {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) {
            return;
        }

        const students = this.getStudentData();
        studentsList.innerHTML = ''; // Clear existing student list

        if (students.length > 0) {
            students.forEach((student, index) => {
                const studentDiv = document.createElement('div');
                studentDiv.classList.add('col-md-4', 'mb-4');

                studentDiv.innerHTML = `
                    <div class="card h-100">
                        <div class="card-body">
                            <h5 class="card-title">${student.name}</h5>
                            <p class="card-text"><strong>Age:</strong> ${student.age}</p>
                            <p class="card-text"><strong>Address:</strong> ${student.address}</p>
                            <p class="card-text"><strong>Contact:</strong> ${student.contactNumber}</p>
                            <p class="card-text"><strong>Membership:</strong> ${student.membership}</p>
                            <p class="card-text"><strong>Belt Color:</strong> ${student.beltColor}</p>
                            <div class="d-flex justify-content-center align-items-center">
                                <button onclick="studentManager.editStudent(${index})" class="btn btn-warning btn-sm mr-1">Edit</button>
                                <button onclick="studentManager.deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
                            </div>
                        </div>
                    </div>
                `;
                studentsList.appendChild(studentDiv);
            });
        } else {
            studentsList.innerHTML = `<p class="text-center">No students found.</p>`;
        }
    };

    // Edit student logic
editStudent = (index) => {
    const students = this.getStudentData();
    const student = students[index]; // Get the student based on the index

    // Show the modal with the current student data
    const modal = new bootstrap.Modal(document.getElementById('editStudentModal'));
    modal.show();

    // Populate the form with student data
    document.getElementById('studentName').value = student.name;
    document.getElementById('age').value = student.age;
    document.getElementById('address').value = student.address;
    document.getElementById('contactNumber').value = student.contactNumber;
    document.getElementById('membership').value = student.membership;
    document.getElementById('beltColor').value = student.beltColor;

    // Change form submission logic to update the student data
    document.getElementById('editStudentForm').onsubmit = (event) => {
        event.preventDefault();

        // Update the student info
        students[index] = {
            name: document.getElementById('studentName').value,
            age: document.getElementById('age').value,
            address: document.getElementById('address').value,
            contactNumber: document.getElementById('contactNumber').value,
            membership: document.getElementById('membership').value,
            beltColor: document.getElementById('beltColor').value
        };

        // Save the updated students array to localStorage
        localStorage.setItem('currentUser', JSON.stringify({ students }));

        // Refresh the displayed student list
        this.displayStudents();

        // Hide the modal after successful submission
        modal.hide();

        // Optionally, reset the form and alert the user
        alert('Student information updated!');
        document.getElementById('editStudentForm').reset();
    };
};


    // Delete student logic
    deleteStudent = (index) => {
        const students = this.getStudentData();
        students.splice(index, 1); // Remove the student from the array

        // Save the updated students array to localStorage
        localStorage.setItem('currentUser', JSON.stringify({ students }));

        // Refresh the displayed student list
        this.displayStudents();
    };

    // Add student logic (Encapsulated within the class now)
    addStudent = (student) => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { students: [] };

        // Add new student to the current user's students array
        currentUser.students.push(student);

        // Save the updated currentUser back to localStorage
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Refresh the displayed student list
        this.displayStudents();

        // Optionally, alert the user that the student was added
        alert("Student added successfully!");

        event.target.reset();
    };
}

export {Student, StudentManager};