const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", () => {
  mainNav.classList.toggle("show");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => mainNav.classList.remove("show"));
});

document.getElementById("year").textContent = new Date().getFullYear();

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formMessage.textContent = "আপনার বার্তা গ্রহণ করা হয়েছে। দ্রুত আপনার সঙ্গে যোগাযোগ করা হবে।";
  contactForm.reset();
});
