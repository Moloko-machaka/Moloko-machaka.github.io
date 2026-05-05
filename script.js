console.log("Portfolio loaded");


// Animate progress bars on page load
window.addEventListener("load", () => {
    document.querySelectorAll(".progress-fill").forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0%";
        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});

function filterSelection(category) {
    let cards = document.querySelectorAll(".tech-card");

    cards.forEach(card => {
        card.classList.remove("hide");

        if (category !== "all" && !card.classList.contains(category)) {
            card.classList.add("hide");
        }
    });
}

const buttons = document.querySelectorAll(".filters button");

buttons.forEach(btn => {
    btn.addEventListener("click", function () {
        buttons.forEach(b => b.classList.remove("active"));
        this.classList.add("active");
    });
});

filterSelection("all");

window.addEventListener("load", () => {
    document.querySelectorAll(".progress-fill").forEach(bar => {
        let width = bar.style.width;
        bar.style.width = "0%";

        setTimeout(() => {
            bar.style.width = width;
        }, 300);
    });
});