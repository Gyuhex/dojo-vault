function displayData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { students: [] };
    const studentInfo = currentUser.students;

    // Total number of students
    const totalStudents = studentInfo.length;

    // Calculate belt counts
    const beltCounts = studentInfo.reduce((counts, student) => {
        counts[student.beltColor] = (counts[student.beltColor] || 0) + 1;
        return counts;
    }, {});

    // Calculate membership counts
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
                ${Object.keys(beltCounts).map(belt => `<li>${belt}: ${beltCounts[belt]}</li>`).join('')}
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

// Toggle sidebar
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Call displayData on page load
displayData();

function renderBeltChart(beltCounts) {
    const ctx = document.getElementById('beltChart').getContext('2d');

    // Prepare the data
    const labels = Object.keys(beltCounts); // Belt colors
    const data = Object.values(beltCounts); // Number of students per belt

    // Create the chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: 'Number of Students',
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(231, 74, 59, 0.2)',
                    'rgba(153, 102, 255, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(231, 74, 59, 1)',
                    'rgba(153, 102, 255, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call renderBeltChart with belt data
function displayData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const studentInfo = currentUser.students;

    const beltCounts = studentInfo.reduce((counts, student) => {
        counts[student.beltColor] = (counts[student.beltColor] || 0) + 1;
        return counts;
    }, {});

    renderBeltChart(beltCounts);
}
