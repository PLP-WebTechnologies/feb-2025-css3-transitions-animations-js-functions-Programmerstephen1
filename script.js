document.addEventListener("DOMContentLoaded", () => {
  const box = document.getElementById("animatedBox");
  const animateBtn = document.getElementById("animateButton");
  const themeToggleBtn = document.getElementById("themeToggle");

  // Load theme from localStorage
  const storedTheme = localStorage.getItem("theme");
  if (storedTheme === "dark") {
    document.body.classList.add("dark");
  }

  // Handle theme toggle
  themeToggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const newTheme = document.body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", newTheme);
  });

  // Trigger animation
  animateBtn.addEventListener("click", () => {
    box.style.animation = "bounce 1s ease-in-out";
    box.addEventListener("animationend", () => {
      box.style.animation = "";
    }, { once: true });
  });
});
