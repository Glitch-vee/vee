// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    AOS.init({
        duration: 1200, // Increased duration for a smoother animation
        once: true, // Animation occurs only once
    });

    // Utility function to display a temporary loader
    const showLoader = (message) => {
        const loader = document.createElement('div');
        loader.className = 'loader-overlay';
        loader.innerHTML = `
            <div class="loader">
                <span class="spinner-border"></span>
                <p>${message}</p>
            </div>`;
        document.body.appendChild(loader);
        return loader;
    };

    // Remove loader
    const removeLoader = (loader) => {
        loader.remove();
    };

    // Handle contact form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', async (event) => {
            event.preventDefault();

            const loader = showLoader('Sending your message...');
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value,
            };

            try {
                const response = await fetch('/api/contact', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                removeLoader(loader);

                if (response.ok) {
                    alert('✅ Message sent successfully!');
                    contactForm.reset();
                    // Add a confetti animation effect
                    launchConfetti();
                } else {
                    alert('❌ Failed to send message. Please try again.');
                }
            } catch (err) {
                console.error(err);
                alert('⚠️ An error occurred while sending your message.');
                removeLoader(loader);
            }
        });
    }

    // Handle accordion behavior for skills section
    document.querySelectorAll('.collapse').forEach((collapse) => {
        collapse.addEventListener('shown.bs.collapse', () => {
            document.querySelectorAll('.collapse').forEach((otherCollapse) => {
                if (otherCollapse !== collapse) {
                    otherCollapse.classList.remove('show');
                }
            });
        });
    });

    // Add interactive hover effects to skill icons
    document.querySelectorAll('.skill-icon').forEach((icon) => {
        icon.addEventListener('mouseover', () => {
            icon.classList.add('animate-bounce');
        });
        icon.addEventListener('mouseout', () => {
            icon.classList.remove('animate-bounce');
        });
    });

    // Launch confetti animation
    const launchConfetti = () => {
        const confettiSettings = { target: 'confetti-canvas', max: 200, size: 1.2 };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => confetti.clear(), 5000); // Clear confetti after 5 seconds
    };

    // Dynamically load and display images in a gallery section
    const galleryContainer = document.getElementById('gallery');
    if (galleryContainer) {
        const images = [
            '/images/gallery1.jpg',
            '/images/gallery2.jpg',
            '/images/gallery3.jpg',
            '/images/gallery4.jpg',
        ];

        images.forEach((imageSrc) => {
            const img = document.createElement('img');
            img.src = imageSrc;
            img.alt = 'Gallery Image';
            img.className = 'gallery-image aos-init aos-animate';
            img.setAttribute('data-aos', 'zoom-in');
            galleryContainer.appendChild(img);
        });
    }
});
