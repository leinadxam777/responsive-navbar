const navToggle = document.getElementById("nav-toggle");
const navLinks = document.getElementById("nav-links");

navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");

  if (isOpen) {
    navLinks.style.maxHeight = navLinks.scrollHeight + "px";
  } else {
    navLinks.style.maxHeight = null;
  }
  
  navToggle.classList.toggle("open", isOpen);
  navToggle.setAttribute("aria-expanded", isOpen);
});