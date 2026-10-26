// Header: border once scrolled, and the small-screen menu toggle.
(() => {
  const h = document.querySelector(".site-header");
  const b = h.querySelector(".menu-toggle");
  const s = () => h.toggleAttribute("data-scrolled", scrollY > 8);
  addEventListener("scroll", s, { passive: true }); s();
  b.addEventListener("click", () => {
    const open = h.toggleAttribute("data-open");
    b.setAttribute("aria-expanded", open);
  });
})();
