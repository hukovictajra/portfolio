// Resume page functionality
document.addEventListener("DOMContentLoaded", function () {
	const iframe = document.getElementById("resume-iframe");
	const loading = document.getElementById("resume-loading");
	const fullscreenBtn = document.getElementById("fullscreen-btn");
	const viewerContainer = document.querySelector(".resume-viewer-container");

	// Handle iframe loading
	iframe.addEventListener("load", function () {
		// Hide loading spinner after iframe loads
		setTimeout(() => {
			loading.classList.add("hidden");
		}, 500);
	});

	// Handle iframe error
	iframe.addEventListener("error", function () {
		loading.classList.add("hidden");
		console.error("Failed to load PDF");
	});

	// Fullscreen functionality
	let isFullscreen = false;

	fullscreenBtn.addEventListener("click", function () {
		if (!isFullscreen) {
			enterFullscreen();
		} else {
			exitFullscreen();
		}
	});

	function enterFullscreen() {
		viewerContainer.classList.add("resume-fullscreen");
		fullscreenBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3"></path>
            </svg>
            Exit Fullscreen
        `;
		isFullscreen = true;

		// Hide navbar in fullscreen
		const navbar = document.getElementById("navbar");
		if (navbar) {
			navbar.style.display = "none";
		}
	}

	function exitFullscreen() {
		viewerContainer.classList.remove("resume-fullscreen");
		fullscreenBtn.innerHTML = `
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
            </svg>
            Fullscreen
        `;
		isFullscreen = false;

		// Show navbar again
		const navbar = document.getElementById("navbar");
		if (navbar) {
			navbar.style.display = "";
		}
	}

	// Handle escape key to exit fullscreen
	document.addEventListener("keydown", function (e) {
		if (e.key === "Escape" && isFullscreen) {
			exitFullscreen();
		}
	});

	// Handle window resize
	window.addEventListener("resize", function () {
		// Adjust iframe height on mobile orientation change
		if (window.innerWidth <= 768) {
			const container = document.querySelector(".resume-viewer-container");
			if (container && !isFullscreen) {
				// Force a reflow to ensure proper sizing
				container.style.height = "";
				setTimeout(() => {
					container.style.height = window.innerHeight < window.innerWidth ? "85vh" : "70vh";
				}, 100);
			}
		}
	});

	// Hide loading after timeout
	setTimeout(() => {
		if (!loading.classList.contains("hidden")) {
			loading.classList.add("hidden");
		}
	}, 3000);

	// Add smooth scrolling for any navigation links on this page
	const navLinks = document.querySelectorAll('a[href^="#"]');
	navLinks.forEach((link) => {
		link.addEventListener("click", function (e) {
			e.preventDefault();
			const targetId = this.getAttribute("href");
			const targetElement = document.querySelector(targetId);

			if (targetElement) {
				const navbar = document.getElementById("navbar");
				const navbarHeight = navbar ? navbar.offsetHeight : 0;
				const targetPosition = targetElement.offsetTop - navbarHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		});
	});
});
