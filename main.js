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

    // Scroll-based animations
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate-visible");
                } else {
                    entry.target.classList.remove("animate-visible");
                }
            });
        },
        { threshold: 0.3 }
    );

    document.querySelectorAll(".animate__animated").forEach((el) => observer.observe(el));

    // Responsive adjustments
    const adjustResponsive = () => {
        const isMobile = window.innerWidth < 768;
        const heroText = document.querySelector("#hero h1");
        heroText.style.fontSize = isMobile ? "2.5rem" : "4rem";
        heroText.style.letterSpacing = isMobile ? "0.05rem" : "0.1rem";

        // Add responsive adjustments for other elements
        const heroParagraph = document.querySelector("#hero p");
        heroParagraph.style.fontSize = isMobile ? "1rem" : "1.5rem";
        heroParagraph.style.marginTop = isMobile ? "1rem" : "2rem";

        const heroButton = document.querySelector("#hero a");
        heroButton.style.padding = isMobile ? "8px 20px" : "10px 30px";
        heroButton.style.fontSize = isMobile ? "1rem" : "1.2rem";

        // Adjust portfolio items
        document.querySelectorAll(".portfolio-item").forEach((item) => {
            item.style.width = isMobile ? "100%" : "auto";
            item.style.marginBottom = isMobile ? "2rem" : "0";
        });

        // Ensure elements have appropriate styles for mobile devices
        document.querySelectorAll("section, .container").forEach((el) => {
            el.style.padding = isMobile ? "1rem" : "2rem";
        });

        document.querySelectorAll("h2, h4, h5").forEach((el) => {
            el.style.fontSize = isMobile ? "1.5rem" : "2rem";
        });

        document.querySelectorAll("p, li").forEach((el) => {
            el.style.fontSize = isMobile ? "1rem" : "1.2rem";
        });
    };

    window.addEventListener("resize", adjustResponsive);
    adjustResponsive();

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
