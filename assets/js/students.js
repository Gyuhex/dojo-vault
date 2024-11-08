// Retrieve the current user data from localStorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Select the container where the students will be displayed
const studentsList = document.getElementById('studentsList');

// Display all students
function displayStudents() {
    studentsList.innerHTML = '';  // Clear the existing student list

    if (currentUser && currentUser.students) {
        const students = currentUser.students;

        // Loop through each student and display their information
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
                        <button onclick="editStudent(${index})" class="btn btn-warning btn-sm">Edit</button>
                        <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
                    </div>
                </div>
            `;
            studentsList.appendChild(studentDiv);
        });
    } else {
        studentsList.innerHTML = `<p class="text-center">No students found.</p>`;
    }
}

// Edit student function
function editStudent(index) {
    const students = currentUser.students;
    const {name, age, address, contactNumber, membership, beltColor} = students[index];

    // Show the Edit Form with the current student data
    document.getElementById('editStudentForm').style.display = 'block';

    // Populate the form with student data
    document.getElementById('studentName').value = name;
    document.getElementById('age').value = age;
    document.getElementById('address').value = address;
    document.getElementById('contactNumber').value = contactNumber;
    document.getElementById('membership').value = membership;
    document.getElementById('beltColor').value = beltColor;

    // Change form submission logic to update the student data
    document.getElementById('addStudentForm').onsubmit = function(event) {
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
        localStorage.setItem('currentUser', JSON.stringify(currentUser));

        // Refresh the displayed student list
        displayStudents();

        // Hide the form after successful submission
        document.getElementById('editStudentForm').style.display = 'none';

        // Optionally, reset the form and alert the user
        alert('Student information updated!');
        document.getElementById('addStudentForm').reset();
    };
}

// Delete student function
function deleteStudent(index) {
    const students = currentUser.students;

    // Remove student from the array
    students.splice(index, 1);

    // Save the updated students array to localStorage
    localStorage.setItem('currentUser', JSON.stringify(currentUser));

    // Refresh the displayed student list
    displayStudents();

    // Alert user about the successful deletion
    alert('Student deleted successfully!');
}

// Initialize the student display when the page loads
displayStudents();
