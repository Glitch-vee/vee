// main.js
document.addEventListener('DOMContentLoaded', () => {
    // Initialize AOS animations
    AOS.init({
        duration: 1500, // Longer duration for smoother animations
        easing: 'ease-out-back', // Smooth easing for a bold, playful effect
        delay: 100, // Slight delay for staggering animations
        once: true, // Play animations only once
    });

    // Add a welcome animation for the header
    const headerTitle = document.querySelector('.header-title');
    if (headerTitle) {
        headerTitle.classList.add('animate-pop');
    }

    // Contact Form Submission with Animated Feedback
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
                    showToast('🎉 Message sent successfully!', 'success');
                    contactForm.reset();
                    launchConfetti();
                } else {
                    showToast('❌ Failed to send message. Please try again.', 'error');
                }
            } catch (err) {
                console.error(err);
                showToast('⚠️ An error occurred while sending your message.', 'error');
                removeLoader(loader);
            }
        });
    }

    // Creative Gallery Section
    const galleryContainer = document.getElementById('gallery');
    if (galleryContainer) {
        const images = [
            '/images/gallery1.jpg',
            '/images/gallery2.jpg',
            '/images/gallery3.jpg',
            '/images/gallery4.jpg',
        ];

        images.forEach((imageSrc, index) => {
            const imageWrapper = document.createElement('div');
            imageWrapper.className = 'gallery-item';
            imageWrapper.setAttribute('data-aos', index % 2 === 0 ? 'fade-up' : 'fade-down');
            imageWrapper.innerHTML = `
                <img src="${imageSrc}" alt="Gallery Image ${index + 1}" class="gallery-image" />
                <div class="gallery-overlay">
                    <p class="gallery-caption">Gallery Image ${index + 1}</p>
                </div>
            `;
            galleryContainer.appendChild(imageWrapper);
        });
    }

    // Fancy Animations for Skill Icons
    const skillIcons = document.querySelectorAll('.skill-icon');
    skillIcons.forEach((icon) => {
        icon.addEventListener('mouseover', () => {
            icon.style.transform = 'scale(1.2) rotate(10deg)';
            icon.style.transition = 'transform 0.3s ease';
        });
        icon.addEventListener('mouseout', () => {
            icon.style.transform = 'scale(1) rotate(0)';
        });
    });

    // Scroll-triggered animation for special sections
    const specialSection = document.querySelector('.special-section');
    if (specialSection) {
        specialSection.setAttribute('data-aos', 'flip-right');
    }

    // Utility Functions
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

    const removeLoader = (loader) => {
        loader.remove();
    };

    const showToast = (message, type) => {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.innerHTML = `<p>${message}</p>`;
        document.body.appendChild(toast);
        setTimeout(() => {
            toast.style.opacity = '0';
            setTimeout(() => toast.remove(), 500);
        }, 3000);
    };

    const launchConfetti = () => {
        const confettiSettings = { target: 'confetti-canvas', max: 150, size: 1.5 };
        const confetti = new ConfettiGenerator(confettiSettings);
        confetti.render();
        setTimeout(() => confetti.clear(), 5000); // Clear confetti after 5 seconds
    };
});
