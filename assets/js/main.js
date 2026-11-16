document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav-links");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
    });
  }

  // Role Track Highlight Filter (keeps all cards rendered in DOM for SEO/LLMs)
  const trackTabs = document.querySelectorAll("[data-track-btn]");
  const trackCards = document.querySelectorAll("[data-track-card]");
  if (trackTabs.length && trackCards.length) {
    trackTabs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-track-btn");
        trackTabs.forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
        trackCards.forEach((card) => {
          const id = card.getAttribute("data-track-card");
          if (target === "all") {
            card.classList.remove("is-highlighted");
            card.style.opacity = "1";
          } else if (id === target) {
            card.classList.add("is-highlighted");
            card.style.opacity = "1";
          } else {
            card.classList.remove("is-highlighted");
            card.style.opacity = "0.58";
          }
        });
      });
    });
  }

  // Project category filter on projects.html
  const filterBtns = document.querySelectorAll("[data-proj-filter]");
  const projCards = document.querySelectorAll("[data-proj-cat]");
  if (filterBtns.length && projCards.length) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        const cat = btn.getAttribute("data-proj-filter");
        filterBtns.forEach((b) => b.setAttribute("aria-selected", String(b === btn)));
        projCards.forEach((card) => {
          const cats = (card.getAttribute("data-proj-cat") || "").split(" ");
          card.style.display = (cat === "all" || cats.includes(cat)) ? "" : "none";
        });
      });
    });
  }
});
