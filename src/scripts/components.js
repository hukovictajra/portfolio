// Component loader for navbar and footer
class ComponentLoader {
	constructor() {
		this.loadedComponents = new Set();
		this.loadedStyles = new Set();
		this.componentConfig = {
			navbar: { css: "src/style/navbar.css" },
			footer: { css: "src/style/footer.css" },
		};
	}

	async loadCSS(cssUrl) {
		// Check if CSS is already loaded
		if (this.loadedStyles.has(cssUrl)) {
			return true;
		}

		return new Promise((resolve, reject) => {
			// Check if link already exists in document
			const existingLink = document.querySelector(`link[href="${cssUrl}"]`);
			if (existingLink) {
				this.loadedStyles.add(cssUrl);
				resolve(true);
				return;
			}

			const link = document.createElement("link");
			link.rel = "stylesheet";
			link.href = cssUrl;

			link.onload = () => {
				this.loadedStyles.add(cssUrl);
				console.log(`✓ CSS loaded: ${cssUrl}`);
				resolve(true);
			};

			link.onerror = () => {
				console.error(`✗ Failed to load CSS: ${cssUrl}`);
				reject(new Error(`Failed to load CSS: ${cssUrl}`));
			};

			document.head.appendChild(link);
		});
	}

	async loadComponent(componentName, targetSelector) {
		try {
			// Load CSS first if specified for this component
			const config = this.componentConfig[componentName];
			if (config && config.css) {
				await this.loadCSS(config.css);
			}

			const response = await fetch(`./components/${componentName}.html`);
			if (!response.ok) {
				throw new Error(`Failed to load ${componentName}: ${response.status}`);
			}

			const html = await response.text();
			const targetElement = document.querySelector(targetSelector);

			if (targetElement) {
				targetElement.innerHTML = html;
				this.loadedComponents.add(componentName);

				// Dispatch custom event for component loaded
				document.dispatchEvent(
					new CustomEvent(`${componentName}Loaded`, {
						detail: { componentName, targetElement },
					})
				);

				return true;
			} else {
				console.warn(`Target element ${targetSelector} not found for ${componentName}`);
				return false;
			}
		} catch (error) {
			console.error(`Error loading ${componentName}:`, error);
			return false;
		}
	}

	async loadNavbar(targetSelector = "#navbar-placeholder") {
		const success = await this.loadComponent("navbar", targetSelector);
		if (success) {
			// Initialize navbar functionality after loading
			this.initializeNavbar();
		}
		return success;
	}

	async loadFooter(targetSelector = "#footer-placeholder") {
		return await this.loadComponent("footer", targetSelector);
	}

	async loadAll() {
		const promises = [this.loadNavbar(), this.loadFooter()];

		const results = await Promise.all(promises);
		const allLoaded = results.every((result) => result === true);

		if (allLoaded) {
			document.dispatchEvent(new CustomEvent("allComponentsLoaded"));
		}

		return allLoaded;
	}

	initializeNavbar() {
		// Re-initialize navbar functionality after component is loaded
		const navbar = document.getElementById("navbar");
		const firstSection = document.querySelector("section");
		const menuToggle = document.getElementById("menu-toggle");
		const mobileMenu = document.getElementById("mobile-menu");

		if (!navbar || !menuToggle || !mobileMenu) {
			console.warn("Navbar elements not found, skipping initialization");
			return;
		}

		// Navbar scroll effect
		let ticking = false;

		function updateNavbar() {
			if (!firstSection) return;

			const scrollY = window.scrollY;
			const sectionHeight = firstSection.offsetHeight;
			const navbarHeight = navbar.offsetHeight;

			const scrollProgress = Math.min(scrollY / (sectionHeight - navbarHeight), 1);
			const minOpacity = 0;
			const maxOpacity = 0.8;
			const backgroundOpacity = minOpacity + scrollProgress * (maxOpacity - minOpacity);

			navbar.style.setProperty("--navbar-bg-opacity", backgroundOpacity);

			if (scrollProgress > 0.1) {
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

		// Mobile menu functionality
		menuToggle.addEventListener("click", () => {
			const isMenuOpen = mobileMenu.classList.contains("show");

			if (isMenuOpen) {
				mobileMenu.classList.remove("show");
				menuToggle.classList.remove("active");
				document.body.style.overflow = "";
			} else {
				mobileMenu.classList.add("show");
				menuToggle.classList.add("active");
				document.body.style.overflow = "hidden";
			}
		});

		// Close mobile menu when clicking outside
		mobileMenu.addEventListener("click", (e) => {
			if (e.target === mobileMenu) {
				mobileMenu.classList.remove("show");
				menuToggle.classList.remove("active");
				document.body.style.overflow = "";
			}
		});

		// Handle window resize
		window.addEventListener("resize", () => {
			if (window.innerWidth >= 768) {
				mobileMenu.classList.remove("show");
				menuToggle.classList.remove("active");
				document.body.style.overflow = "";
			}
		});

		// Smooth scrolling for navigation links
		this.initializeSmoothScrolling();
	}

	initializeSmoothScrolling() {
		function smoothScrollToSection(targetId) {
			const targetSection = document.querySelector(targetId);
			if (targetSection) {
				const navbar = document.getElementById("navbar");
				const navbarHeight = navbar ? navbar.offsetHeight : 0;
				const targetPosition = targetSection.offsetTop - navbarHeight;

				window.scrollTo({
					top: targetPosition,
					behavior: "smooth",
				});
			}
		}

		function shouldUseSmootScroll(href) {
			return href.startsWith("#") && href.length > 1;
		}

		// Desktop navigation links
		const desktopNavLinks = document.querySelectorAll(".navbar-navigation-item");
		desktopNavLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				const href = link.getAttribute("href");

				if (shouldUseSmootScroll(href)) {
					e.preventDefault();
					smoothScrollToSection(href);
				}
			});
		});

		// Mobile navigation links
		const mobileNavLinks = document.querySelectorAll(".mobile-menu-item");
		const mobileMenu = document.getElementById("mobile-menu");
		const menuToggle = document.getElementById("menu-toggle");

		mobileNavLinks.forEach((link) => {
			link.addEventListener("click", (e) => {
				const href = link.getAttribute("href");

				// Always close mobile menu first
				if (mobileMenu && menuToggle) {
					mobileMenu.classList.remove("show");
					menuToggle.classList.remove("active");
					document.body.style.overflow = "";
				}

				if (shouldUseSmootScroll(href)) {
					e.preventDefault();
					smoothScrollToSection(href);
				}
			});
		});

		// Navbar title link
		const navbarTitle = document.querySelector(".navbar-title a");
		if (navbarTitle) {
			navbarTitle.addEventListener("click", (e) => {
				const href = navbarTitle.getAttribute("href");

				if (shouldUseSmootScroll(href)) {
					e.preventDefault();
					smoothScrollToSection(href);
				}
			});
		}
	}

	// Method to update active navigation item
	setActiveNavItem(href) {
		// Remove active class from all nav items
		document.querySelectorAll(".navbar-navigation-item, .mobile-menu-item").forEach((item) => {
			item.classList.remove("active");
		});

		// Add active class to matching items
		document
			.querySelectorAll(`.navbar-navigation-item[href="${href}"], .mobile-menu-item[href="${href}"]`)
			.forEach((item) => {
				item.classList.add("active");
			});
	}
}

// Initialize component loader when DOM is ready
document.addEventListener("DOMContentLoaded", async () => {
	const componentLoader = new ComponentLoader();

	// Load all components
	await componentLoader.loadAll();

	// Set active navigation item based on current page
	const currentPage = window.location.pathname;
	if (currentPage.includes("resume.html")) {
		componentLoader.setActiveNavItem("./resume.html");
	} else if (currentPage.includes("index.html") || currentPage === "/") {
		componentLoader.setActiveNavItem("./index.html");
	}
});

// Export for use in other scripts if needed
window.ComponentLoader = ComponentLoader;
