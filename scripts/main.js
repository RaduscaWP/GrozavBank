// GrozavBank — lightweight interactions
// Nav shadow on scroll, mobile menu toggle, reveal-on-scroll.

(() => {
  const nav = document.querySelector("[data-nav]");
  const burger = document.querySelector("[data-burger]");
  const mobileMenu = document.querySelector("[data-mobile-menu]");

  // Nav scroll state
  const onScroll = () => {
    if (!nav) return;
    if (window.scrollY > 12) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  };
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  // Mobile menu
  const setMenu = (open) => {
    if (!burger || !mobileMenu) return;
    burger.setAttribute("aria-expanded", String(open));
    if (open) {
      mobileMenu.removeAttribute("hidden");
      mobileMenu.style.display = "flex";
    } else {
      mobileMenu.style.display = "";
      mobileMenu.setAttribute("hidden", "");
    }
  };

  if (burger) {
    burger.addEventListener("click", () => {
      const open = burger.getAttribute("aria-expanded") === "true";
      setMenu(!open);
    });
  }

  if (mobileMenu) {
    mobileMenu.addEventListener("click", (e) => {
      if (e.target.tagName === "A") setMenu(false);
    });
  }

  // Reveal on scroll — skip hero (always in view on load)
  const revealTargets = document.querySelectorAll(
    ".section-head, .phone, .window, .feat, .sec, .secpanel, .plan, .cta__inner"
  );

  // Mark as reveal candidates. Anything already in viewport on init is shown
  // immediately so the page never looks empty on first paint.
  const markVisibleIfInView = (el) => {
    const rect = el.getBoundingClientRect();
    const vh = window.innerHeight || document.documentElement.clientHeight;
    if (rect.top < vh * 0.95) {
      el.classList.add("is-visible");
      return true;
    }
    return false;
  };

  revealTargets.forEach((el) => el.setAttribute("data-reveal", ""));

  // Pre-pass so anything above the fold renders instantly.
  revealTargets.forEach(markVisibleIfInView);

  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.05 }
    );
    revealTargets.forEach((el) => {
      if (!el.classList.contains("is-visible")) io.observe(el);
    });
  } else {
    revealTargets.forEach((el) => el.classList.add("is-visible"));
  }
})();
