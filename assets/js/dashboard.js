// Function to initialize charts with default values
function initializeCharts() {
    const beltChartCanvas = document.getElementById('beltChart').getContext('2d');
    const membershipChartCanvas = document.getElementById('membershipChart').getContext('2d');

    // Belt Chart (Default Setup)
    window.beltChart = new Chart(beltChartCanvas, {
        type: 'bar',
        data: {
            labels: ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Brown', 'Black'], // Default belt colors
            datasets: [{
                label: 'Total Students',
                data: [0, 0, 0, 0, 0, 0, 0], // Default data
                backgroundColor: [
                    'rgba(255, 255, 255, 0.8)', // White
                    'rgba(255, 223, 0, 0.8)',   // Yellow
                    'rgba(255, 165, 0, 0.8)',   // Orange
                    'rgba(0, 128, 0, 0.8)',     // Green
                    'rgba(0, 0, 255, 0.8)',     // Blue
                    'rgba(165, 42, 42, 0.8)',   // Brown
                    'rgba(0, 0, 0, 0.8)'        // Black
                ],
                borderColor: [
                    'rgba(255, 255, 255, 1)',   // White
                    'rgba(255, 223, 0, 1)',     // Yellow
                    'rgba(255, 165, 0, 1)',     // Orange
                    'rgba(0, 128, 0, 1)',       // Green
                    'rgba(0, 0, 255, 1)',       // Blue
                    'rgba(165, 42, 42, 1)',     // Brown
                    'rgba(0, 0, 0, 1)'          // Black
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    // Membership Chart (Default Setup)
    window.membershipChart = new Chart(membershipChartCanvas, {
        type: 'pie',
        data: {
            labels: ['Paid', 'Unpaid'], // Default membership types
            datasets: [{
                label: 'Membership Status',
                data: [0, 0], // Default data
                backgroundColor: [
                    'rgba(75, 192, 192, 0.8)', // Paid
                    'rgba(255, 99, 132, 0.8)'  // Unpaid
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',    // Paid
                    'rgba(255, 99, 132, 1)'    // Unpaid
                ],
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false
        }
    });
}

// Function to update charts with actual data
function updateCharts(beltCounts, totalStudents, membershipCounts) {
    // Update Belt Chart
    const beltColors = ['White', 'Yellow', 'Orange', 'Green', 'Blue', 'Brown', 'Black'];
    const beltData = beltColors.map(color => beltCounts[color.toLowerCase()] || 0); // Map counts to belt colors

    window.beltChart.data.datasets[0].data = beltData;
    window.beltChart.data.datasets[0].label = `${totalStudents} Total Students`;
    window.beltChart.update();

    // Update Membership Chart
    const membershipData = [membershipCounts['paid'] || 0, membershipCounts['unpaid'] || 0];
    window.membershipChart.data.datasets[0].data = membershipData;
    window.membershipChart.update();
}

// Function to display dashboard data
function displayData() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser')) || { students: [] };
    const studentInfo = currentUser.students;

    // Calculate Student Count
    const totalStudents = studentInfo.length;

    // Calculate belt counts
    const beltCounts = studentInfo.reduce((counts, student) => {
        const belt = student.beltColor.toLowerCase(); // Ensure case consistency
        counts[belt] = (counts[belt] || 0) + 1;
        return counts;
    }, {});

    // Calculate membership counts
    const membershipCounts = studentInfo.reduce((counts, student) => {
        counts[student.membership] = (counts[student.membership] || 0) + 1;
        return counts;
    }, {});

    // Update charts with actual data
    updateCharts(beltCounts, totalStudents, membershipCounts);
}

// Initialize charts on page load
document.addEventListener('DOMContentLoaded', () => {
    const displayDashboard = document.getElementById('displayDashboard');
    displayDashboard.innerHTML = `
        <h2>Dashboard</h2>
        <div class="chart-container">
            <canvas id="beltChart"></canvas>
        </div>
        <div class="chart-container">
            <canvas id="membershipChart"></canvas>
        </div>
    `;

    initializeCharts(); // Initialize charts with default values
    displayData(); // Fetch and display actual data
});
