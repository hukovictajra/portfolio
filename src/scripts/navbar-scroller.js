const navbar = document.getElementById("navbar");
const firstSection = document.querySelector("section");
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

// Navbar scroll effect with gradual background fade-in
let ticking = false;

function updateNavbar() {
	const scrollY = window.scrollY;
	const sectionHeight = firstSection.offsetHeight;
	const navbarHeight = navbar.offsetHeight;

	// Calculate scroll progress through the first section (0 to 1)
	const scrollProgress = Math.min(scrollY / (sectionHeight - navbarHeight), 1);

	// Calculate background opacity: starts at 0% (0) and goes to 80% (0.8)
	const minOpacity = 0;
	const maxOpacity = 0.8;
	const backgroundOpacity = minOpacity + scrollProgress * (maxOpacity - minOpacity);

	// Apply the background opacity to the navbar
	navbar.style.setProperty("--navbar-bg-opacity", backgroundOpacity);

	// Add/remove scrolled class for additional blur effect
	if (scrollProgress > 0.1) {
		// Start additional blur at 10% scroll
		navbar.classList.add("navbar-scrolled");
	} else {
		navbar.classList.remove("navbar-scrolled");
	}

	ticking = false;
}

window.addEventListener("scroll", () => {
	if (!ticking) {
		requestAnimationFrame(updateNavbar);
		ticking = true;
	}
});

// Mobile menu toggle functionality
menuToggle.addEventListener("click", () => {
	const isMenuOpen = mobileMenu.classList.contains("show");

	if (isMenuOpen) {
		// Close menu
		mobileMenu.classList.remove("show");
		menuToggle.classList.remove("active");
		document.body.style.overflow = ""; // Re-enable scrolling
	} else {
		// Open menu
		mobileMenu.classList.add("show");
		menuToggle.classList.add("active");
		document.body.style.overflow = "hidden"; // Prevent background scrolling
	}
});

// Close mobile menu when clicking outside
mobileMenu.addEventListener("click", (e) => {
	if (e.target === mobileMenu) {
		mobileMenu.classList.remove("show");
		menuToggle.classList.remove("active");
		document.body.style.overflow = ""; // Re-enable scrolling
	}
});

// Handle window resize - close mobile menu if switching to desktop
window.addEventListener("resize", () => {
	if (window.innerWidth >= 768) {
		// md breakpoint
		mobileMenu.classList.remove("show");
		menuToggle.classList.remove("active");
		document.body.style.overflow = ""; // Re-enable scrolling
	}
});

// Smooth scrolling for navigation links
function smoothScrollToSection(targetId) {
	const targetSection = document.querySelector(targetId);
	if (targetSection) {
		const navbarHeight = navbar.offsetHeight;
		const targetPosition = targetSection.offsetTop - navbarHeight;

		window.scrollTo({
			top: targetPosition,
			behavior: "smooth",
		});
	}
}

// Check if a link should use smooth scrolling (anchor links) or normal navigation (page links)
function shouldUseSmootScroll(href) {
	return href.startsWith("#") && href.length > 1;
}

// Add smooth scrolling to desktop navigation links
const desktopNavLinks = document.querySelectorAll(".navbar-navigation-item");
desktopNavLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		const href = link.getAttribute("href");

		if (shouldUseSmootScroll(href)) {
			e.preventDefault();
			smoothScrollToSection(href);
		}
		// For other links (like ./resume.html), let the browser handle normal navigation
	});
});

// Add smooth scrolling to mobile navigation links
const mobileNavLinks = document.querySelectorAll(".mobile-menu-item");
mobileNavLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		const href = link.getAttribute("href");

		// Always close mobile menu first
		mobileMenu.classList.remove("show");
		menuToggle.classList.remove("active");
		document.body.style.overflow = "";

		if (shouldUseSmootScroll(href)) {
			e.preventDefault();
			smoothScrollToSection(href);
		}
		// For other links (like ./resume.html), let the browser handle normal navigation
	});
});

// Add smooth scrolling to navbar title link
const navbarTitle = document.querySelector(".navbar-title a");
if (navbarTitle) {
	navbarTitle.addEventListener("click", (e) => {
		const href = navbarTitle.getAttribute("href");

		if (shouldUseSmootScroll(href)) {
			e.preventDefault();
			smoothScrollToSection(href);
		}
		// For other links, let the browser handle normal navigation
	});
}

// Prevent menu from staying open on page load
document.addEventListener("DOMContentLoaded", () => {
	mobileMenu.classList.remove("show");
	menuToggle.classList.remove("active");
	document.body.style.overflow = "";
});
