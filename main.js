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


    window.addEventListener("resize", adjustResponsive);
    
   function adjustResponsive() {
    const width = window.innerWidth;

    // Example adjustments based on window width
    if (width < 576) {
        // Extra small devices (portrait phones, less than 576px)
        document.body.style.backgroundColor = "#f8f9fa"; // Light background
    } else if (width >= 576 && width < 768) {
        // Small devices (landscape phones, 576px and up)
        document.body.style.backgroundColor = "#e9ecef"; // Slightly darker background
    } else if (width >= 768 && width < 992) {
        // Medium devices (tablets, 768px and up)
        document.body.style.backgroundColor = "#dee2e6"; // Even darker background
    } else if (width >= 992 && width < 1200) {
        // Large devices (desktops, 992px and up)
        document.body.style.backgroundColor = "#ced4da"; // Darker background
    } else {
        // Extra large devices (large desktops, 1200px and up)
        document.body.style.backgroundColor = "#adb5bd"; // Dark background
    }
}


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
