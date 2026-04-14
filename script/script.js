let body = document.querySelector("body");
let header = document.querySelector("header");
let menuBar = document.querySelector("header nav ul");
let toggle = document.querySelector("header nav .toggle");
let toggleAnchor = document.querySelectorAll("header nav ul a");

window.addEventListener("scroll", () => {
  if (window.scrollY > 40) {
    header.classList.add("stickyNavBar");
  } else {
    if (!menuBar.classList.contains("menuBar")) {
      header.classList.remove("stickyNavBar");
    }
  }
});

toggle.addEventListener("click", () => {
  menuBar.classList.toggle("menuBar");
  header.classList.add("stickyNavBar");
  toggle.classList.toggle("crose");
});
toggleAnchor.forEach((element) =>
  element.addEventListener("click", () => {
    menuBar.classList.toggle("menuBar");
    header.classList.add("stickyNavBar");
    toggle.classList.toggle("crose");
  }),
);

const counters = document.querySelectorAll(".counter");
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const counter = entry.target;
      const target = +counter.dataset.target;
      const duration = 2000;
      const incrementTime = 20;
      const steps = duration / incrementTime;
      const increment = target / steps;

      let current = 0;

      const updateCounter = setInterval(() => {
        current += increment;

        if (current >= target) {
          current = target;
          clearInterval(updateCounter);
        }

        if (target >= 1000) {
          counter.textContent = Math.ceil(current / 1000) + "k";
        } else {
          counter.textContent = Math.ceil(current);
        }
      }, incrementTime);

      observer.unobserve(counter);
    }
  });
});

counters.forEach((counter) => observer.observe(counter));
