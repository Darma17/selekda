document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const filterValue = this.getAttribute('data-filter');
            portfolioItems.forEach(item => {
                if (filterValue === 'all' || item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });

    const modal = document.getElementById('projectModal');
    const closeModal = document.querySelector('.close-btn');
    const viewDetailsButtons = document.querySelectorAll('.view-details-btn');

    viewDetailsButtons.forEach(button => {
        button.addEventListener('click', function() {
            const projectId = this.getAttribute('data-project');

            // Example static data for demonstration
            const projectDetails = {
                '1': {
                    title: 'Task Management Web App',
                    description: 'A full-stack web application for managing tasks, built with React and Node.js.',
                    image: '../images/web.png',
                    author: 'Darma Smith',
                    date: '2024-08-15',
                    views: 250,
                    comments: 12
                },
                '2': {
                    title: 'Fitness Tracker App',
                    description: 'A mobile app designed to track workouts and monitor fitness progress, developed using Flutter.',
                    image: '../images/web.png',
                    author: 'Darma Johnson',
                    date: '2024-07-20',
                    views: 320,
                    comments: 8
                },
                '3': {
                    title: 'Data Visualization Dashboard',
                    description: 'An interactive dashboard for visualizing data trends using D3.js and Python.',
                    image: '../images/web.png',
                    author: 'Darma Lee',
                    date: '2024-06-05',
                    views: 180,
                    comments: 15
                },
                '4': {
                    title: 'E-commerce Website',
                    description: 'A scalable e-commerce platform built with Django and PostgreSQL.',
                    image: '../images/web.png',
                    author: 'Darma Wilson',
                    date: '2024-05-30',
                    views: 400,
                    comments: 20
                }
                // Add more projects as needed
            };

            const project = projectDetails[projectId];
            if (project) {
                modal.querySelector('.modal-title').textContent = project.title;
                modal.querySelector('.modal-description').textContent = project.description;
                modal.querySelector('.modal-img').src = project.image;
                modal.querySelector('.modal-meta').innerHTML = `
                    <p><strong>Author:</strong> ${project.author}</p>
                    <p><strong>Date:</strong> ${project.date}</p>
                    <p><strong>Total Views:</strong> ${project.views}</p>
                    <p><strong>Comments:</strong> ${project.comments}</p>
                `;
                modal.style.display = 'flex';
            }
        });
    });

    closeModal.addEventListener('click', function() {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function(event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});
