// Retrieve the current user data from localStorage
const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Select the container where the students will be displayed
const studentsList = document.getElementById('studentsList');

// Check if currentUser and currentUser.students exist
if (currentUser && currentUser.students) {
    const students = currentUser.students;

    // Loop through each student and create HTML for their info
    students.forEach(student => {
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
                </div>
            </div>
        `;

        // Append the student info to the students list container
        studentsList.appendChild(studentDiv);
    });
} else {
    studentsList.innerHTML = `<p class="text-center">No students found.</p>`;
}
