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

    getStudentData = () => {
        const storedStudentData = JSON.parse(localStorage.getItem('currentUser'));
        return storedStudentData ? storedStudentData.students : [];
    };

    displayStudents = () => {
        const studentsList = document.getElementById('studentsList');
        if (!studentsList) {
            console.error("Element with id 'studentsList' not found.");
            return;
        }

        const students = this.getStudentData();
        studentsList.innerHTML = ''; // Clear the existing student list

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
                                <button onclick="editStudent(${index})" class="btn btn-warning btn-sm mr-1">Edit</button>
                                <button onclick="deleteStudent(${index})" class="btn btn-danger btn-sm">Delete</button>
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
}

// Example Usage
const studentManager = new StudentManager();
studentManager.displayStudents();
