
// ==============================
// 1. LOADING SCREEN
// ==============================

const loader = document.getElementById("loader");

window.addEventListener("load", function () {

    setTimeout(function () {
        loader.classList.add("hidden");
    }, 700);

});

// Pengaman jika loading terlalu lama.
setTimeout(function () {
    loader.classList.add("hidden");
}, 3000);


// ==============================
// 2. TAHUN OTOMATIS
// ==============================

document.getElementById("year").textContent =
    new Date().getFullYear();


// ==============================
// 3. MOBILE NAVIGATION
// ==============================

const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", function () {

    nav.classList.toggle("open");

});


// Tutup menu setelah link diklik.

document.querySelectorAll(".nav-link").forEach(function (link) {

    link.addEventListener("click", function () {

        nav.classList.remove("open");

    });

});


// ==============================
// 4. BUTTON RIPPLE ANIMATION
// ==============================

document.querySelectorAll(".btn").forEach(function (button) {

    button.addEventListener("click", function (event) {

        const rect = button.getBoundingClientRect();

        const ripple = document.createElement("span");

        const size = Math.max(rect.width, rect.height);

        ripple.classList.add("ripple");

        ripple.style.width = size + "px";
        ripple.style.height = size + "px";

        ripple.style.left =
            event.clientX - rect.left - size / 2 + "px";

        ripple.style.top =
            event.clientY - rect.top - size / 2 + "px";

        button.appendChild(ripple);

        setTimeout(function () {

            ripple.remove();

        }, 600);

    });

});


// ==============================
// 5. PROJECT CARD CLICK ANIMATION
// ==============================

const projectCards = document.querySelectorAll(".project-card");

projectCards.forEach(function (card) {

    function selectCard() {

        projectCards.forEach(function (item) {

            item.classList.remove("is-selected");

        });

        card.classList.add("is-selected");

    }

    card.addEventListener("click", selectCard);

    card.addEventListener("keydown", function (event) {

        if (event.key === "Enter" || event.key === " ") {

            event.preventDefault();
            selectCard();

        }

    });

});


// ==============================
// 6. SCROLL REVEAL ANIMATION
// ==============================

const revealElements = document.querySelectorAll(
    ".section-label, .section-title, .skill-card, .project-card, .timeline-item, .contact-content"
);

revealElements.forEach(function (element) {

    element.classList.add("reveal");

});

if ("IntersectionObserver" in window) {

    const observer = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    }, {
        threshold: 0.12
    });

    revealElements.forEach(function (element) {

        observer.observe(element);

    });

} else {

    revealElements.forEach(function (element) {

        element.classList.add("visible");

    });

}


// ==============================
// 7. ACTIVE NAVIGATION
// ==============================

const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {

    const sectionObserver = new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                navLinks.forEach(function (link) {

                    link.classList.toggle(
                        "active",
                        link.getAttribute("href") === "#" + entry.target.id
                    );

                });

            }

        });

    }, {
        rootMargin: "-35% 0px -55% 0px"
    });

    sections.forEach(function (section) {

        sectionObserver.observe(section);

    });

}
