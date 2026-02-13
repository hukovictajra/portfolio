const dot = document.getElementById("cursor-dot");
const dotOutline = document.getElementById("cursor-dot-outline");
const breakpoints = [...document.querySelectorAll(".cursor-breakpoint")];

const slider = document.getElementById("slider");

if (slider) {
	const observer = new MutationObserver((mutations) => {
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
} else {
	console.warn("#slider element not found");
}

let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
	mouseX = e.clientX;
	mouseY = e.clientY;

	document.documentElement.style.setProperty("--mouse-x", `${mouseX}px`);
	document.documentElement.style.setProperty("--mouse-y", `${mouseY}px`);
});

const animateOutline = () => {
	requestAnimationFrame(animateOutline);
};

requestAnimationFrame(animateOutline);

function attachCursorListeners(bp) {
	bp.addEventListener("mouseenter", () => {
		let label = bp.getAttribute("data-label") || "";

		dot.setAttribute("data-text", label || "Click Me");
		dot.classList.add("expanded");
		dotOutline.classList.add("hidden");

		switch (label) {
			case "Click Me":
				dot.classList.add("animate-pulse");
				break;
			case "Swipe Left":
				dot.classList.add("animate-swipe-left");
				break;
			case "Swipe Right":
				dot.classList.add("animate-swipe-right");
				break;
			case "Zoom In":
				dot.classList.add("animate-zoom-in");
				break;
		}
	});

	bp.addEventListener("mouseleave", () => {
		dot.classList.remove("expanded");
		dot.removeAttribute("data-text");
		dot.classList.remove("opacity-0");
		dotOutline.classList.remove("hidden");

		dot.classList.remove("animate-pulse", "animate-swipe-left", "animate-swipe-right", "animate-zoom-in");

		dot.style.transform = `translate(var(--mouse-x, 0px), var(--mouse-y, 0px)) translate(-50%, -50%)`;
	});
}

breakpoints.forEach(attachCursorListeners);
