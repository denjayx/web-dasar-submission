const hamburgerButton = document.getElementById("hamburger");
const mobileNav = document.getElementById("mobile-nav");
console.log(mobileNav);
hamburgerButton.addEventListener("click", () => {
	mobileNav.classList.toggle("active");
});
