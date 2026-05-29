const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");
const yearTarget = document.querySelector("#current-year");
const siteHeader = document.querySelector(".site-header");

if (yearTarget) {
  yearTarget.textContent = new Date().getFullYear();
}

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

if (siteHeader) {
  const desktopQuery = window.matchMedia("(min-width: 921px)");

  const toggleHeaderVisibility = () => {
    const menuIsOpen = navMenu?.classList.contains("is-open");
    const shouldHide = desktopQuery.matches && window.scrollY > 8 && !menuIsOpen;
    siteHeader.classList.toggle("is-hidden", shouldHide);
  };

  window.addEventListener("scroll", toggleHeaderVisibility, { passive: true });
  window.addEventListener("resize", toggleHeaderVisibility);
  toggleHeaderVisibility();
}

// Reveal gallery cards when they enter the viewport.
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}
