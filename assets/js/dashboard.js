// Function to display dashboard data
function displayData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { students: [] };
    const studentInfo = currentUser.students;

    // Calculate Student Count
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
        <div class="chart-container">
            <canvas id="beltChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="membershipChart"></canvas>
        </div>
    `;

    // Render the charts after data is displayed
    renderBeltChart(beltCounts, totalStudents);
    renderMembershipChart(membershipCounts);
}

// Function to toggle sidebar visibility
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('active');
}

// Function to render the belt chart
function renderBeltChart(beltCounts, totalStudents) {
    const ctx = document.getElementById('beltChart').getContext('2d');

    // Prepare the data for the chart
    const labels = Object.keys(beltCounts); // Belt colors
    const data = Object.values(beltCounts); // Number of students per belt

    // Create the chart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                label: `${totalStudents} Number of Students`,
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

// Function to render the membership status chart
function renderMembershipChart(membershipCounts) {
    const ctx = document.getElementById('membershipChart').getContext('2d');

    // Prepare the data for the chart
    const labels = ['Paid', 'Unpaid'];
    const data = [membershipCounts['paid'] || 0, membershipCounts['unpaid'] || 0];

    // Create the chart
    new Chart(ctx, {
        type: 'pie',
        data: {
            labels: labels,
            datasets: [{
                label: 'Membership Status',
                data: data,
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 99, 132, 0.2)'
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 99, 132, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true
        }
    });
}

// Call displayData on page load
displayData();
