
//nav
// Navbar scroll effect 
// window.addEventListener('scroll', function() {
//     var navbar = document.querySelector('.sec1');
//     if (window.scrollY > 0) {
//         navbar.style.position = 'fixed';
//         navbar.style.top = '0';
//     } else {
//         navbar.style.position = 'relative';
//         navbar.style.background = 'none';
//         navbar.style.top = '15px'; 
//     }
// });
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.sec1');
    if (window.scrollY > 0) {
        navbar.style.position = 'fixed';
        navbar.style.top = '0';
        navbar.style.background = 'rgba(255, 255, 255, 0.2)'; // Semi-transparent background
        navbar.style.backdropFilter = 'blur(10px)'; // Blur effect
        navbar.style.webkitBackdropFilter = 'blur(10px)'; // For Safari compatibility
        navbar.style.color = 'black'; // Text color set to black
    } else {
        navbar.style.position = 'relative';
        navbar.style.background = 'none';
        navbar.style.backdropFilter = 'none';
        navbar.style.webkitBackdropFilter = 'none';
        navbar.style.top = '15px';
        navbar.style.color = ''; // Revert to original text color (if needed)
    }
});



//About
document.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-section');
    elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom >= 0) {
            element.classList.add('is-visible');
        } else {
            element.classList.remove('is-visible');
        }
    });
});


// Function to toggle theme
function toggleTheme() {
    const body = document.body;
    const themeToggleButton = document.getElementById('theme-toggle');
    
    // Toggle the 'dark-mode' class on the body
    body.classList.toggle('dark-mode');
    
    // Check if dark mode is active and update button text
    if (body.classList.contains('dark-mode')) {
        themeToggleButton.textContent = 'Light';
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggleButton.textContent = 'Dark';
        localStorage.setItem('theme', 'light');
    }
}

// Load theme preference on page load
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        document.getElementById('theme-toggle').textContent = 'Light';
    }
});
