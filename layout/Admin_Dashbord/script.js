// Function to show the selected section
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => section.classList.remove('active'));

    // Show the selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update analytics if the section is analytics
    if (sectionId === 'analytics') {
        updateAnalytics();
    }
}

// Handle User Actions
document.addEventListener('DOMContentLoaded', function() {
    // Event delegation for buttons inside the user table
    document.querySelector('.user-table').addEventListener('click', function(event) {
        const target = event.target;
        if (target.tagName === 'BUTTON') {
            const action = target.textContent.trim();
            const userRow = target.closest('tr');
            const userNameCell = userRow.querySelector('td');

            if (action === 'Edit') {
                // Implement edit functionality
                const currentName = userNameCell.textContent.trim();
                const newName = prompt(`Edit name for ${currentName}:`, currentName);
                if (newName) {
                    userNameCell.textContent = newName;
                }
            } else if (action === 'Delete') {
                if (confirm(`Are you sure you want to delete ${userNameCell.textContent.trim()}?`)) {
                    userRow.remove();
                }
            }
        }
    });

    // Handle Settings Form Submission
    document.querySelector('.settings-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const siteName = document.getElementById('site-name').value;
        const adminEmail = document.getElementById('email').value;
        const theme = document.getElementById('theme').value;

        alert(`Settings Saved:\nSite Name: ${siteName}\nAdmin Email: ${adminEmail}\nTheme: ${theme}`);
        
        console.log({
            siteName,
            adminEmail,
            theme
        });
    });

    // Initialize Charts
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'Sales',
                data: [1200, 1900, 3000, 5000, 2300, 3800],
                borderColor: '#9f97f3',
                borderWidth: 2,
                fill: false
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

    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Users',
                data: [200, 300, 400, 700, 600, 900, 1000],
                backgroundColor: '#9f97f3'
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

    const ctx3 = document.getElementById('chart3').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Chrome', 'Firefox', 'Safari', 'Others'],
            datasets: [{
                data: [60, 20, 10, 10],
                backgroundColor: ['#9f97f3', '#f87979', '#ffcd56', '#4bc0c0']
            }]
        },
        options: {
            responsive: true
        }
    });

    // Show default section
    showSection('dashboard');
});
