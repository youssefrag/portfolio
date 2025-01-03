document.addEventListener("DOMContentLoaded", () => {
  const isMobile = window.innerWidth <= 1025;

  // Function to create and observe IntersectionObservers
  function createObserver(selector, observerOptions, toggleClass) {
    const items = document.querySelectorAll(selector);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(toggleClass);
          const alibiDesc = document.getElementById("alibi-desc");
          const guilsProDesc = document.getElementById("guildsPro-desc");

          const alibiStack = document.getElementById("alibi-stack");
          const guildsproStack = document.getElementById("guilsPro-stack");
          if (entry.target.classList[1] === "alibi") {
            guildsproStack.style.display = "none";
            alibiStack.style.display = "inline";
            guilsProDesc.classList.remove("active");
            alibiDesc.classList.add("active");
          } else if (entry.target.classList[1] === "guildsPro") {
            alibiStack.style.display = "none";
            guildsproStack.style.display = "inline";

            guilsProDesc.classList.add("active");
            alibiDesc.classList.remove("active");
          }
        }
      });
    }, observerOptions);

    items.forEach((item) => {
      observer.observe(item);
    });
  }

  // Create observer for different sections

  createObserver(
    "#work .job",
    { root: null, threshold: isMobile ? 0.5 : 1 },
    "active"
  );
});

// About Section button change on hover

const buttonContainer = document.getElementsByClassName(
  "about-button-container"
)[0];

const buttonContentRegular = document.getElementsByClassName(
  "about-button-regular"
)[0];

const buttonContentHovered = document.getElementsByClassName(
  "about-button-hovered"
)[0];

buttonContainer.addEventListener("mouseover", () => {
  console.log("hovering");
  buttonContentHovered.style.display = "inline";
  buttonContentRegular.style.display = "none";
});

buttonContainer.addEventListener("mouseleave", () => {
  console.log("leaving hover");
  buttonContentHovered.style.display = "none";
  buttonContentRegular.style.display = "inline";
});

function scrollToWork() {
  const work = document.getElementById("work");

  work.scrollIntoView();
}
