document.querySelectorAll(".qna-accordion-button").forEach((button, index) => {
	button.addEventListener("click", () => {
		const content = button.nextElementSibling;
		const icon = button.querySelector(".qna-accordion-header-plus");
		const isCurrentlyOpen = content.classList.contains("qna-accordion-open");

		// Close all other accordions
		document.querySelectorAll(".qna-accordion-content").forEach((panel) => {
			if (panel !== content) {
				panel.classList.remove("qna-accordion-open");
				panel.classList.add("qna-accordion-closed");
				panel.previousElementSibling.querySelector(".qna-accordion-header-plus").textContent = "+";
			}
		});

		// Toggle the current accordion
		if (isCurrentlyOpen) {
			content.classList.remove("qna-accordion-open");
			content.classList.add("qna-accordion-closed");
			icon.textContent = "+";
		} else {
			content.classList.remove("qna-accordion-closed");
			content.classList.add("qna-accordion-open");
			icon.textContent = "−";
		}
	});
});

// Ensure first accordion is open on page load
const firstContent = document.querySelector(".qna-accordion-content");
const firstIcon = document.querySelector(".qna-accordion-header-plus");
if (firstContent) {
	firstContent.classList.add("qna-accordion-open");
	firstContent.classList.remove("qna-accordion-closed");
	if (firstIcon) firstIcon.textContent = "−";
}

// Initialize all other accordions as closed
document.querySelectorAll(".qna-accordion-content").forEach((content, index) => {
	if (index > 0) {
		content.classList.add("qna-accordion-closed");
		content.classList.remove("qna-accordion-open");
	}
});

// Mobile menu functionality
document.addEventListener("DOMContentLoaded", function () {
	const menuToggle = document.getElementById("menu-toggle");
	const mobileMenu = document.getElementById("mobile-menu");

	if (menuToggle && mobileMenu) {
		menuToggle.addEventListener("click", function () {
			mobileMenu.classList.toggle("hidden");

			// Toggle hamburger icon
			const svg = menuToggle.querySelector("svg");
			if (mobileMenu.classList.contains("hidden")) {
				// Show hamburger icon
				svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>';
			} else {
				// Show X icon
				svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>';
			}
		});

		// Close mobile menu when clicking on navigation links
		const mobileNavLinks = mobileMenu.querySelectorAll("a");
		mobileNavLinks.forEach((link) => {
			link.addEventListener("click", function () {
				mobileMenu.classList.add("hidden");
				// Reset hamburger icon
				const svg = menuToggle.querySelector("svg");
				svg.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>';
			});
		});
	}
});
