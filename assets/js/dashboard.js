function displayData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));

    const studentInfo = currentUser.students;

    // Total number of students
    const totalStudents = studentInfo.length;

    // Calculate belt counts
    const beltCounts = studentInfo.reduce((counts, student) => {
        counts[student.beltColor] = (counts[student.beltColor] || 0) + 1;
        return counts;
    }, {});

    // Calculate membership counts (paid vs unpaid)
    const membershipCounts = studentInfo.reduce((counts, student) => {
        counts[student.membership] = (counts[student.membership] || 0) + 1;
        return counts;
    }, {});

    // Select the display area
    const displayDashboard = document.getElementById('displayDashboard');

    // Build the HTML to display data
    displayDashboard.innerHTML = `
        <h2>Dashboard</h2>
        <div>
            <h3>Total Students: ${totalStudents}</h3>
        </div>
        <div>
            <h4>Belt Counts</h4>
            <ul>
                ${Object.keys(beltCounts).map(belt => {
                    return `<li>${belt}: ${beltCounts[belt]}</li>`;
                }).join('')}
            </ul>
        </div>
        <div>
            <h4>Membership Status</h4>
            <ul>
                <li>Paid: ${membershipCounts['paid'] || 0}</li>
                <li>Unpaid: ${membershipCounts['unpaid'] || 0}</li>
            </ul>
        </div>
    `;
}

// Call displayData to populate the dashboard when the page loads
displayData();
