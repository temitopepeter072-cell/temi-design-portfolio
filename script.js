// ================================
// AFRICAN NATURE - MAIN SCRIPT
// ================================

// Wait for DOM
document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 1. Sticky Header Effect
    // =========================
    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.background = "#000";
            header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.5)";
        } else {
            header.style.background = "#111";
            header.style.boxShadow = "none";
        }
    });


    // =========================
    // 2. Smooth Scroll
    // =========================
    const links = document.querySelectorAll("nav a");

    links.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            targetSection.scrollIntoView({
                behavior: "smooth"
            });
        });
    });


    // =========================
    // 3. Active Link Highlight
    // =========================
    const sections = document.querySelectorAll("section");

    window.addEventListener("scroll", () => {
        let current = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute("id");
            }
        });

        links.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href") === "#" + current) {
                link.classList.add("active");
            }
        });
    });


    // =========================
    // 4. Audio Control (One at a time)
    // =========================
    const audios = document.querySelectorAll("audio");

    audios.forEach(audio => {
        audio.addEventListener("play", () => {
            audios.forEach(otherAudio => {
                if (otherAudio !== audio) {
                    otherAudio.pause();
                }
            });
        });
    });


    // =========================
    // 5. Scroll Reveal Animation
    // =========================
    const cards = document.querySelectorAll(".card");

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;

            if (cardTop < triggerBottom) {
                card.style.opacity = "1";
                card.style.transform = "translateY(0)";
            } else {
                card.style.opacity = "0";
                card.style.transform = "translateY(40px)";
            }
        });
    };

    cards.forEach(card => {
        card.style.opacity = "0";
        card.style.transition = "all 0.6s ease";
    });

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll();


    // =========================
    // 6. Simple Beat Cart System
    // =========================
    let cart = JSON.parse(localStorage.getItem("africanNatureCart")) || [];

    const buyButtons = document.querySelectorAll(".card .btn");

    buyButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();

            const beatName = button.parentElement.querySelector("h3").innerText;
            const price = button.parentElement.querySelector(".price").innerText;

            const item = { beatName, price };

            cart.push(item);
            localStorage.setItem("africanNatureCart", JSON.stringify(cart));

            alert(beatName + " added to cart!");
        });
    });


    // =========================
    // 7. Display Cart Count (Optional)
    // =========================
    const logo = document.querySelector("header h1");

    const updateCartDisplay = () => {
        if (cart.length > 0) {
            logo.innerHTML = "African Nature 🛒(" + cart.length + ")";
        } else {
            logo.innerHTML = "African Nature";
        }
    };

    updateCartDisplay();


    // =========================
    // 8. Form Validation Enhancement
    // =========================
    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (e) => {
            const email = form.querySelector("input[type='email']").value;

            if (!email.includes("@")) {
                e.preventDefault();
                alert("Please enter a valid email address.");
            }
        });
    }


    // =========================
    // 9. Dynamic Footer Year
    // =========================
    const footer = document.querySelector("footer");

    const year = new Date().getFullYear();
    footer.innerHTML = "© " + year + " African Nature | All Rights Reserved";

});
