// Get a reference to the custom cursor element
const cursor = document.getElementById('customCursor');
   
// Listen for mouse movements on the document
document.addEventListener('mousemove', (e) => {
  // Set the custom cursor position to match the mouse's x and y coordinates
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});


const homeSection = document.getElementById('home');
const aboutSection = document.getElementById('about');

// Cache common elements

const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const menuToggle = document.getElementById('menu-toggle');
const contactForm = document.getElementById('contact-form');

// Helper functions
const toggleMenu = () => {
  mobileMenu.style.maxHeight = mobileMenu.style.maxHeight 
    ? null 
    : mobileMenu.scrollHeight + "px";
};

const closeMenu = () => {
  if (menuToggle) {
    menuToggle.checked = false;
  }
  mobileMenu.style.maxHeight = null;
};

window.addEventListener('load', () => {
  homeSection.classList.add('slide-in-left');
  aboutSection.classList.add('slide-in-right');
});


// Attach event listeners if elements exist

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', toggleMenu);
}

document.querySelectorAll('.mobile-menu a').forEach(link => {
  link.addEventListener('click', closeMenu);
});

// Handle form submission using EmailJS
if (contactForm) {
  contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    emailjs.sendForm('service_1hh64yb', 'template_283rcct', this)
      .then(function(response) {
        alert('Message sent successfully!');
        contactForm.reset();
      }, function(error) {
        alert('Failed to send message, please try again later.');
        console.error('EmailJS Error:', error);
      });
  });
}
