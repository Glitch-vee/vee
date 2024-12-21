// Initialize AOS (Animate On Scroll) Library
document.addEventListener('DOMContentLoaded', () => {
    AOS.init({
        duration: 1200, // Animation duration in milliseconds
        once: true, // Animations occur only once
        easing: 'ease-in-out', // Smooth easing for animations
    });

    // Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });

    // Interactive Hover Effects for Cards in Focus Section
    const focusCards = document.querySelectorAll('#focus .card');
    focusCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-10px)';
            card.style.boxShadow = '0 12px 30px rgba(0, 0, 0, 0.2)';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
            card.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        });
    });

    // Interactive Portfolio Hover Effects
    const portfolioItems = document.querySelectorAll('#portfolio .portfolio-item');
    portfolioItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'scale(1.05)';
            item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.15)';
        });
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'scale(1)';
            item.style.boxShadow = 'none';
        });
    });

    // Contact Form Submission with Feedback (Simulated)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (event) => {
            event.preventDefault();

            // Create Feedback Loader
            const loader = document.createElement('div');
            loader.className = 'form-loader';
            loader.textContent = 'Sending...';
            contactForm.appendChild(loader);

            // Simulate Form Submission Delay
            setTimeout(() => {
                loader.textContent = 'Message Sent Successfully!';
                loader.style.color = '#28a745'; // Success Color

                // Remove Loader After 3 Seconds
                setTimeout(() => {
                    loader.remove();
                }, 3000);
            }, 2000);
        });
    }
});
