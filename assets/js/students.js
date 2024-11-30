class Student {
    constructor(name, age, address, contacNumber, membership, beltColor) {
        this.name = name
        this.age = age
        this.address = address
        this.contactNumber = contactNumber
        this.membership = membership
        this.beltColor = beltColor 
    }
}

class StudentManager extends Student {
    constructor(name, age, address, contactNumber, membership, beltColor, email) {
        super(name, age, address, contactNumber, membership, beltColor);
        this.email = email
    }

    getStudentData = () => {
        const storedStudentData = JSON.parse(localStorage.getItem('currentUser'));
        const students = storedStudentData.students;
        console.log(students);
    }

    
}

let test = new StudentManager();
test.getStudentData();