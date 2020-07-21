let log = console.log;

let projects = document.querySelectorAll(".projects-row");
let skillsItems = document.querySelectorAll(".skills-items__item");
let formationItems = document.querySelectorAll(".formation-item > img");
let aboutContent = document.querySelector(".about-content");
let contact = document.querySelector(".contact-content");

window.addEventListener("scroll", function () {
  if (window.innerWidth > 767) {
    log(window.scrollY);
    if (window.scrollY > 105) {
      projects.forEach(function (e) {
        e.style.transform = "translateY(0)";
        e.style.opacity = "1";
      });
    }

    if (window.scrollY > 1500) {
      skillsItems.forEach(function (e) {
        e.style.transform = "translate(0, 0)";
        e.style.opacity = "1";
      });
    }
    if (window.scrollY > 1800) {
      formationItems.forEach(function (e) {
        log(e);
        e.style.transform = "rotateY(0)";
      });
    }
    if (window.scrollY > 2000) {
      aboutContent.style.transform = "translateX(0)";
      aboutContent.style.opacity = "1";
    }
    if (window.scrollY > 2400) {
      contact.style.transform = "translateX(0)";
      contact.style.opacity = "1";
    }
  }
});
