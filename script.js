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
          const powaDesc = document.getElementById("powa-desc");

          const alibiStack = document.getElementById("alibi-stack");
          const guildsproStack = document.getElementById("guilsPro-stack");
          const powaStack = document.getElementById("powa-stack");

          if (entry.target.classList[1] === "alibi") {
            guildsproStack.style.display = "none";
            powaStack.style.display = "none";
            alibiStack.style.display = "inline";

            guilsProDesc.classList.remove("active");
            powaDesc.classList.remove("active");
            alibiDesc.classList.add("active");
          } else if (entry.target.classList[1] === "guildsPro") {
            alibiStack.style.display = "none";
            powaStack.style.display = "none";
            guildsproStack.style.display = "inline";

            alibiDesc.classList.remove("active");
            powaDesc.classList.remove("active");
            guilsProDesc.classList.add("active");
          } else if (entry.target.classList[1] === "powa") {
            alibiStack.style.display = "none";
            guildsproStack.style.display = "none";
            powaStack.style.display = "inline";

            alibiDesc.classList.remove("active");
            guilsProDesc.classList.remove("active");
            powaDesc.classList.add("active");
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
  const mobileWork = document.getElementById("mobile-work");

  console.log(work.style.display);

  work.scrollIntoView();
  mobileWork.scrollIntoView();
}

// function scrollToWorkMobile() {
//   const mobileWork = document.getElementById("mobile-work");

//   mobileWork.scrollIntoView();
// }
