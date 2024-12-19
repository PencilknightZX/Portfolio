// Select Elements
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.querySelector('header ul');
const sections = document.querySelectorAll('section');

// Toggle Menu
menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

// Scroll Animation
window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY + window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.offsetTop + section.offsetHeight / 4;

        if (scrollPosition > sectionTop) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});

// Close Menu on Link Click (Mobile Devices)
document.querySelectorAll('header ul li a').forEach(link => {
    link.addEventListener('click', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});

// Handle form submission
document.getElementById("contact-form").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // Clear the form fields
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";

    // Display the confirmation message
    const formStatus = document.getElementById("form-status");
    formStatus.style.display = "block";

    // Hide the confirmation message after 5 seconds
    setTimeout(() => {
        formStatus.style.display = "none";
    }, 5000);
});
