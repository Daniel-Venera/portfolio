let log = console.log;

let projects = document.querySelectorAll(".projects-row");
let skillsItems = document.querySelectorAll(".skills-items__item");
log(skillsItems);
window.addEventListener("scroll", function () {
  if (window.innerWidth > 767) {
    log(window.scrollY);
    if (window.scrollY > 105) {
      projects.forEach(function (e) {
        e.style.transform = "translateY(0)";
        e.style.opacity = "1";
      });
    }

    if (window.scrollY > 1226) {
      skillsItems.forEach(function (e) {
        e.style.transform = "translate(0, 0)";
        e.style.opacity = "1";
      });
    }
  }
});
