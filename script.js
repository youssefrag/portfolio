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
