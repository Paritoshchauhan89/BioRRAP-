document.addEventListener('DOMContentLoaded', () => {
    // Initialize Zoom Level and Theme
    let zoomLevel = parseInt(localStorage.getItem('zoomLevel')) || 100;
    let theme = localStorage.getItem('theme') || 'light-mode';

    // Apply stored Zoom Level
    document.body.style.zoom = `${zoomLevel}%`;
    const percentageElement = document.querySelector('.percentage');
    if (percentageElement) {
        percentageElement.textContent = `${zoomLevel}%`;
    }

    // Apply stored Theme
    document.body.classList.add(theme);
    const themeIcon = document.getElementById('themeIcon');
    if (themeIcon) {
        themeIcon.classList.add(theme === 'dark-mode' ? 'bi-moon' : 'bi-sun');
    }

    // Zoom In functionality
    window.zoomIn = function () {
        if (zoomLevel < 200) {
            zoomLevel += 10;
            document.body.style.zoom = `${zoomLevel}%`;
            if (percentageElement) {
                percentageElement.textContent = `${zoomLevel}%`;
            }
            localStorage.setItem('zoomLevel', zoomLevel); // Save zoom level
        }
    };

    // Zoom Out functionality
    window.zoomOut = function () {
        if (zoomLevel > 50) {
            zoomLevel -= 10;
            document.body.style.zoom = `${zoomLevel}%`;
            if (percentageElement) {
                percentageElement.textContent = `${zoomLevel}%`;
            }
            localStorage.setItem('zoomLevel', zoomLevel); // Save zoom level
        }
    };

    // Toggle Fullscreen functionality
    window.toggleFullscreen = function () {
        const fullscreenIcon = document.getElementById('fullscreen-icon');
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
            if (fullscreenIcon) {
                fullscreenIcon.classList.replace('bi-arrows-fullscreen', 'bi-fullscreen-exit');
            }
        } else {
            document.exitFullscreen();
            if (fullscreenIcon) {
                fullscreenIcon.classList.replace('bi-fullscreen-exit', 'bi-arrows-fullscreen');
            }
        }
    };

    // Dark/Light Mode Toggle
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle && themeIcon) {
        themeToggle.addEventListener('click', () => {
            if (document.body.classList.contains('light-mode')) {
                document.body.classList.remove('light-mode');
                document.body.classList.add('dark-mode');
                themeIcon.classList.replace('bi-sun', 'bi-moon');
                localStorage.setItem('theme', 'dark-mode'); // Save theme
            } else {
                document.body.classList.remove('dark-mode');
                document.body.classList.add('light-mode');
                themeIcon.classList.replace('bi-moon', 'bi-sun');
                localStorage.setItem('theme', 'light-mode'); // Save theme
            }
        });
    }
});
