// main.js
document.addEventListener('DOMContentLoaded', function () {
    // Initialize AOS animations
    AOS.init({
        duration: 1000,
        once: true,
    });

    // Handle contact form submission
    document.getElementById('contactForm').addEventListener('submit', async function (event) {
        event.preventDefault();
        
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

            if (response.ok) {
                alert('Message sent successfully!');
                document.getElementById('contactForm').reset();
            } else {
                alert('Failed to send message');
            }
        } catch (err) {
            console.error(err);
            alert('An error occurred');
        }
    });

    // Handle accordion behavior for skills section
    document.querySelectorAll('.collapse').forEach(function (collapse) {
        collapse.addEventListener('shown.bs.collapse', function () {
            document.querySelectorAll('.collapse').forEach(function (otherCollapse) {
                if (otherCollapse !== collapse) {
                    otherCollapse.classList.remove('show');
                }
            });
        });
    });
});