const counters = document.querySelectorAll(".count");
let started = false;

function runCounter() {
  counters.forEach(counter => {
    const target = +counter.dataset.target;
    let count = 1;

    const update = () => {
      if (count < target) {
        count++;
        counter.innerText = count;
        setTimeout(update, 40);
      } else {
        counter.innerText = target + "+";
      }
    };
    update();
  });
}

window.addEventListener("scroll", () => {
  const stats = document.getElementById("stats");
  const pos = stats.getBoundingClientRect().top;

  if (pos < window.innerHeight && !started) {
    started = true;
    runCounter();
  }
});
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("show");
});
