// Typing Effect
const words = ["modern websites", "UI/UX", "web apps"];
let i = 0, j = 0, text = "", deleting = false;

function type() {
    const el = document.getElementById("typing");

    if (!deleting && j <= words[i].length) {
        text = words[i].substring(0, j++);
    } else if (deleting && j >= 0) {
        text = words[i].substring(0, j--);
    }

    el.innerHTML = text;

    if (j === words[i].length) deleting = true;
    if (j === 0) {
        deleting = false;
        i = (i + 1) % words.length;
    }

    setTimeout(type, 100);
}
type();

// Scroll animation
const cards = document.querySelectorAll(".project-card");

window.addEventListener("scroll", () => {
    cards.forEach(card => {
        if (card.getBoundingClientRect().top < window.innerHeight - 50) {
            card.classList.add("show");
        }
    });
});

// Dark mode
document.getElementById("theme-toggle").onclick = () => {
    document.body.classList.toggle("light");
};

// Mobile menu
document.getElementById("menu-toggle").onclick = () => {
    document.getElementById("nav-links").classList.toggle("active");
};

// Back to top
const btn = document.getElementById("topBtn");

btn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });