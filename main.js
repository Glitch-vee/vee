document.addEventListener("DOMContentLoaded", () => {
    // Smooth scrolling
    const smoothScroll = (target) => {
        document.querySelector(target).scrollIntoView({
            behavior: "smooth",
        });
    };

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            smoothScroll(this.getAttribute("href"));
        });
    });


    document.querySelectorAll(".animate__animated").forEach((el) => observer.observe(el));
    

    // Portfolio hover effects
    document.querySelectorAll(".portfolio-item").forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.transform = "scale(1.05)";
            item.style.boxShadow = "0 10px 20px rgba(0, 0, 0, 0.3)"; /* Use dark shadow for contrast */
        });
        item.addEventListener("mouseleave", () => {
            item.style.transform = "scale(1)";
            item.style.boxShadow = "0 5px 10px rgba(0, 0, 0, 0.5)";
        });
    });

    // Contact form validation
    const contactForm = document.querySelector("#contact form");
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = contactForm.querySelector("input[placeholder='Your Name']").value.trim();
        const email = contactForm.querySelector("input[placeholder='Your Email']").value.trim();
        const message = contactForm.querySelector("textarea").value.trim();

        if (!name || !email || !message) {
            alert("All fields are required!");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        alert("Thank you for reaching out! I will get back to you soon.");
        contactForm.reset();
    });
});
