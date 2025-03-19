document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.getElementById("navbar");

    // Toggle navigation menu for mobile
    menuToggle.addEventListener("click", () => {
        navbar.style.display = navbar.style.display === "flex" ? "none" : "flex";
    });

    // Smooth Scrolling
    document.querySelectorAll("nav a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        });
    });

    // Load More Functionality (Romantic Version)
    const loadMoreBtn = document.getElementById("load-more");
    const serviceList = document.getElementById("service-list");

    loadMoreBtn.addEventListener("click", () => {
        const loveMessages = [
            "💖 You are my dream come true.",
            "🌹 Every moment with you is a love story.",
            "💕 My heart beats only for you.",
            "✨ You are my forever and always.",
            "💌 Love grows stronger with every heartbeat."
        ];

        loveMessages.forEach((message, index) => {
            setTimeout(() => {
                const p = document.createElement("p");
                p.textContent = message;
                p.style.fontSize = "18px";
                p.style.color = "#d10050"; // Soft romantic red
                p.style.fontWeight = "bold";
                p.style.opacity = "0";
                p.style.transition = "opacity 0.8s ease-in-out";
                serviceList.appendChild(p);
                setTimeout(() => {
                    p.style.opacity = "1";
                }, 100);
            }, index * 700);
        });

        loadMoreBtn.style.display = "none";
    });

    // Form Submission (Romantic Message)
    const form = document.getElementById("contact-form");
    const formMessage = document.getElementById("form-message");

    form.addEventListener("submit", event => {
        event.preventDefault();
        formMessage.textContent = "💖 Thank you, my love! Your message is a treasure in my heart. 💌";
        formMessage.style.color = "#d10050"; // Romantic red
        formMessage.style.fontWeight = "bold";
        formMessage.style.textAlign = "center";
        form.reset();
    });
});
