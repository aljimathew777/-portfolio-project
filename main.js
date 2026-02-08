/* Toggle Icon Navbar */
let menuIcon = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

/* Dark/Light Mode Toggle */
let darkModeIcon = document.querySelector('#darkMode-icon');

if (darkModeIcon) {
    darkModeIcon.onclick = () => {
        darkModeIcon.classList.toggle('bx-sun');
        document.body.classList.toggle('light-mode');
    };
}

if (menuIcon) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}

/* Scroll Sections Active Link */
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                if (id) {
                    let activeLink = document.querySelector('header nav a[href*=' + id + ']');
                    if (activeLink) {
                        activeLink.classList.add('active');
                    }
                }
            });
        };
    });

    /* Sticky Navbar */
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    /* Remove toggle icon and navbar when click navbar link (scroll) */
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/* Scroll Reveal */
ScrollReveal({
    // reset: true, /* Toggle this to repeat animations on scroll up/down */
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });
ScrollReveal().reveal('.about-content p', { origin: 'right', interval: 200 });
ScrollReveal().reveal('.about-content h2', { origin: 'top', scale: 0.8 });
ScrollReveal().reveal('.about-content .btn', { origin: 'bottom', delay: 1000 });

/* Typed JS */
/* Typed JS */
if (document.querySelector('.typing-text')) {
    const typed = new Typed('.typing-text', {
        strings: ['Web Developer', 'Gamer', 'Student'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });
}

/* Custom Cursor */
const cursorDot = document.querySelector('[data-cursor-dot]');
const cursorOutline = document.querySelector('[data-cursor-outline]');

window.addEventListener("mousemove", function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // cursorOutline.style.left = `${posX}px`;
    // cursorOutline.style.top = `${posY}px`;

    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

/* Contact Form WhatsApp Submission */
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Get form values
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const phone = contactForm.querySelector('input[name="phone"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;

        // Construct WhatsApp message
        let whatsappMessage = `*New Contact Message*\n\n`;
        whatsappMessage += `*Name:* ${name}\n`;
        whatsappMessage += `*Email:* ${email}\n`;
        whatsappMessage += `*Phone:* ${phone}\n`;
        whatsappMessage += `*Message:* ${message}`;

        // Encoder URI component
        const encodedMessage = encodeURIComponent(whatsappMessage);

        // WhatsApp URL (using the provided number)
        const whatsappUrl = `https://wa.me/918137043528?text=${encodedMessage}`;

        // Show status
        formStatus.style.display = 'block';
        formStatus.style.color = '#0ef';
        formStatus.textContent = "Redirecting to WhatsApp...";

        // Open WhatsApp in new tab
        window.open(whatsappUrl, '_blank');

        // Optional: Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            formStatus.style.display = 'none';
        }, 1000); // Wait 1 second before clean up
    });
}
