import { useEffect } from "preact/hooks";

export function CustomCursor() {
	useEffect(() => {
		// Check if user is on mobile device
		const isMobile =
			/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
			"ontouchstart" in window ||
			navigator.maxTouchPoints > 0 ||
			window.innerWidth <= 768;

		// Don't initialize custom cursor on mobile
		if (isMobile) {
			return;
		}

		const cursorDot = document.createElement("div");
		const cursorOutline = document.createElement("div");

		cursorDot.className = "cursor-dot";
		cursorOutline.className = "cursor-dot-outline";

		cursorDot.id = "cursor-dot";
		cursorOutline.id = "cursor-dot-outline";

		document.body.appendChild(cursorDot);
		document.body.appendChild(cursorOutline);

		let breakpoints = [...document.querySelectorAll(".cursor-breakpoint")];

		// Function to reload breakpoints and attach listeners
		const reloadBreakpoints = () => {
			// Clear existing breakpoints
			breakpoints.length = 0;
			// Get fresh breakpoints from DOM
			breakpoints.push(...document.querySelectorAll(".cursor-breakpoint"));
			// Attach listeners to all breakpoints
			breakpoints.forEach(attachCursorListeners);
		};

		const slider = document.getElementById("slider");
		let observer;

		if (slider) {
			observer = new MutationObserver((mutations) => {
				mutations.forEach((mutation) => {
					mutation.addedNodes.forEach((node) => {
						if (node.nodeType === 1) {
							if (node.classList.contains("slide")) {
								breakpoints.push(node);
								attachCursorListeners(node);
							}
						}
					});
				});
			});

			observer.observe(slider, { childList: true, subtree: true });
		}

		// Listen for route changes to reload breakpoints
		const handleRouteChange = () => {
			// Reset cursor to normal state on route change
			cursorDot.classList.remove("expanded");
			cursorDot.removeAttribute("data-text");
			cursorDot.classList.remove("opacity-0");
			cursorOutline.classList.remove("hidden");
			cursorDot.classList.remove("animate-pulse", "animate-swipe-left", "animate-swipe-right", "animate-zoom-in");

			// Use setTimeout to ensure DOM has updated after route change
			setTimeout(() => {
				reloadBreakpoints();
			}, 100);
		};

		// Listen for popstate (browser back/forward) and custom route events
		window.addEventListener("popstate", handleRouteChange);

		// Listen for custom route change events from preact-router
		const routeChangeListener = (e) => {
			handleRouteChange();
		};

		// Add event listener for route changes
		document.addEventListener("route-change", routeChangeListener);

		let mouseX = 0;
		let mouseY = 0;

		const handleMouseMove = (e) => {
			mouseX = e.clientX;
			mouseY = e.clientY;

			document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
			document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);
		};

		const animateOutline = () => {
			requestAnimationFrame(animateOutline);
		};

		function attachCursorListeners(bp) {
			bp.addEventListener("mouseenter", () => {
				// Skip cursor effects on mobile
				if (isMobile) return;

				let label = bp.getAttribute("data-label") || "";

				cursorDot.setAttribute("data-text", label || "Click Me");
				cursorDot.classList.add("expanded");
				cursorOutline.classList.add("hidden");

				// switch (label) {
				// 	case "Click Me":
				// 		cursorDot.classList.add("animate-pulse");
				// 		break;
				// 	case "Swipe Left":
				// 		cursorDot.classList.add("animate-swipe-left");
				// 		break;
				// 	case "Swipe Right":
				// 		cursorDot.classList.add("animate-swipe-right");
				// 		break;
				// 	case "Zoom In":
				// 		cursorDot.classList.add("animate-zoom-in");
				// 		break;
				// }
			});

			bp.addEventListener("mouseleave", () => {
				// Skip cursor effects on mobile
				if (isMobile) return;

				cursorDot.classList.remove("expanded");
				cursorDot.removeAttribute("data-text");
				cursorDot.classList.remove("opacity-0");
				cursorOutline.classList.remove("hidden");

				cursorDot.classList.remove("animate-pulse", "animate-swipe-left", "animate-swipe-right", "animate-zoom-in");

				cursorDot.style.transform = `translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translate(-50%, -50%)`;
			});
		}

		// Initial attachment of listeners
		breakpoints.forEach(attachCursorListeners);

		document.addEventListener("mousemove", handleMouseMove);

		requestAnimationFrame(animateOutline);

		// Initial reload to catch any breakpoints that might have been added
		setTimeout(reloadBreakpoints, 100);

		return () => {
			document.removeEventListener("mousemove", handleMouseMove);
			window.removeEventListener("popstate", handleRouteChange);
			document.removeEventListener("route-change", routeChangeListener);

			if (observer) {
				observer.disconnect();
			}

			if (cursorDot.parentNode) cursorDot.parentNode.removeChild(cursorDot);
			if (cursorOutline.parentNode) cursorOutline.parentNode.removeChild(cursorOutline);

			breakpoints.forEach((bp) => {
				if (bp) {
					const newBp = bp.cloneNode(true);
					if (bp.parentNode) {
						bp.parentNode.replaceChild(newBp, bp);
					}
				}
			});
		};
	}, []);

	return null;
}
