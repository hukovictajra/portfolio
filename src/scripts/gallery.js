// Gallery configuration
const GALLERY_CONFIG = {
	AUTO_SCROLL_INTERVAL: 3000, // 4 seconds
	TRANSITION_DURATION: 1000, // 0.5 seconds
	PAUSE_ON_HOVER: true,
};

// Gallery data - all available images
const GALLERY_IMAGES = [
	{
		src: "images/gallery/lukomir.png",
		title: "Lukomir Village",
		alt: "Lukomir Village",
	},
	{
		src: "images/gallery/bled.png",
		title: "Lake Bled",
		alt: "Lake Bled",
	},
	{
		src: "images/gallery/vienna.png",
		title: "Vienna",
		alt: "Vienna",
	},
];

let currentSlide = 0;
let autoScrollInterval;
let isScrolling = false;
let totalSlides = 0;
let currentModalIndex = 0;

// Create gallery slides dynamically from GALLERY_IMAGES array
function createGallerySlides(slider) {
	// Clear any existing slides
	slider.innerHTML = "";

	// Create slides from GALLERY_IMAGES array
	GALLERY_IMAGES.forEach((image, index) => {
		const slide = document.createElement("div");
		slide.className = "slide";

		const galleryItem = document.createElement("div");
		galleryItem.className = "gallery-item";
		galleryItem.setAttribute("data-src", image.src);
		galleryItem.setAttribute("data-title", image.title);

		const img = document.createElement("img");
		img.src = image.src;
		img.alt = image.alt;

		galleryItem.appendChild(img);
		slide.appendChild(galleryItem);
		slider.appendChild(slide);
	});
}

// Initialize gallery functionality
function initializeGallery() {
	const slider = document.getElementById("slider");

	if (!slider) return;

	// Create slides dynamically from GALLERY_IMAGES
	createGallerySlides(slider);

	const originalSlides = document.querySelectorAll(".slide");
	totalSlides = originalSlides.length;
	const slideWidth = 100 / 3; // 3 slides visible at once
	const visibleSlides = 3; // Number of slides visible at once

	// Only enable infinite scroll if there are more slides than visible
	const shouldInfiniteScroll = totalSlides > visibleSlides;

	if (shouldInfiniteScroll) {
		// Clone slides for infinite scroll effect
		originalSlides.forEach((slide) => {
			const clone = slide.cloneNode(true);
			slider.appendChild(clone);
		});

		// Update slider width for infinite scroll
		slider.style.width = "200%"; // Double width for seamless looping

		// Update slide widths for infinite scroll (6 total slides: 3 original + 3 cloned)
		const allSlides = document.querySelectorAll(".slide");
		allSlides.forEach((slide) => {
			slide.style.width = `calc(100% / 6)`;
		});
	} else {
		// No infinite scroll needed, set width to fit exactly
		slider.style.width = "100%";

		// Update slide widths for non-infinite scroll
		originalSlides.forEach((slide) => {
			slide.style.width = `calc(100% / ${totalSlides})`;
		});
	}

	// Set initial transition
	slider.style.transition = `transform ${GALLERY_CONFIG.TRANSITION_DURATION}ms ease-in-out`;

	// Auto-scroll functionality - only if there are more slides than visible
	function startAutoScroll() {
		if (!shouldInfiniteScroll) return; // Don't auto-scroll if all images are visible

		if (autoScrollInterval) {
			clearInterval(autoScrollInterval);
		}
		autoScrollInterval = setInterval(() => {
			if (!isScrolling) {
				nextSlide();
			}
		}, GALLERY_CONFIG.AUTO_SCROLL_INTERVAL);
	}

	function stopAutoScroll() {
		if (autoScrollInterval) {
			clearInterval(autoScrollInterval);
			autoScrollInterval = null;
		}
	}

	function nextSlide() {
		if (isScrolling) return;

		isScrolling = true;

		if (shouldInfiniteScroll) {
			// Infinite scroll behavior
			currentSlide++;
			const translateX = -(currentSlide * slideWidth);
			slider.style.transform = `translateX(${translateX}%)`;

			if (currentSlide >= totalSlides) {
				setTimeout(() => {
					slider.style.transition = "none";
					currentSlide = 0;
					slider.style.transform = "translateX(0%)";

					requestAnimationFrame(() => {
						requestAnimationFrame(() => {
							slider.style.transition = `transform ${GALLERY_CONFIG.TRANSITION_DURATION}ms ease-in-out`;
							isScrolling = false;
						});
					});
				}, GALLERY_CONFIG.TRANSITION_DURATION);
			} else {
				setTimeout(() => {
					isScrolling = false;
				}, GALLERY_CONFIG.TRANSITION_DURATION);
			}
		} else {
			// Non-infinite scroll: cycle through slides without cloning
			currentSlide = (currentSlide + 1) % totalSlides;
			const translateX = -(currentSlide * slideWidth);
			slider.style.transform = `translateX(${translateX}%)`;

			setTimeout(() => {
				isScrolling = false;
			}, GALLERY_CONFIG.TRANSITION_DURATION);
		}
	}

	// Pause auto-scroll on hover - only if auto-scroll is enabled
	if (GALLERY_CONFIG.PAUSE_ON_HOVER && shouldInfiniteScroll) {
		const sliderSection = document.querySelector(".slider-section");

		sliderSection.addEventListener("mouseenter", stopAutoScroll);
		sliderSection.addEventListener("mouseleave", startAutoScroll);
	}

	// Pause when tab is inactive - only if auto-scroll is enabled
	if (shouldInfiniteScroll) {
		document.addEventListener("visibilitychange", () => {
			if (document.hidden) {
				stopAutoScroll();
			} else if (!autoScrollInterval) {
				startAutoScroll();
			}
		});
	}

	// Initialize modal functionality
	initializeModal(shouldInfiniteScroll);

	// Only start auto-scroll if infinite scroll is enabled
	if (shouldInfiniteScroll) {
		startAutoScroll();
		window.addEventListener("beforeunload", stopAutoScroll);
	}
}

// Initialize modal functionality
function initializeModal(shouldInfiniteScroll) {
	const modal = document.getElementById("gallery-modal");
	const modalImage = document.getElementById("gallery-modal-image");
	const modalImageContainer = document.querySelector(".gallery-modal-image-container");
	const modalTitle = document.querySelector(".gallery-modal-title");
	const modalClose = document.querySelector(".gallery-modal-close");
	const modalOverlay = document.querySelector(".gallery-modal-overlay");
	const modalPrev = document.querySelector(".gallery-modal-prev");
	const modalNext = document.querySelector(".gallery-modal-next");
	const currentCounter = document.getElementById("gallery-current");
	const totalCounter = document.getElementById("gallery-total");

	let isZoomed = false;
	let isDragging = false;
	let startX = 0;
	let startY = 0;
	let translateX = 0;
	let translateY = 0;

	// Set total counter
	totalCounter.textContent = GALLERY_IMAGES.length;

	// Add click listeners to gallery items - only to original slides
	const originalSlides = document.querySelectorAll(".slide");
	const totalOriginalSlides = shouldInfiniteScroll ? GALLERY_IMAGES.length : originalSlides.length;

	// Only attach listeners to the first set of slides (original ones)
	for (let i = 0; i < totalOriginalSlides; i++) {
		const galleryItem = originalSlides[i].querySelector(".gallery-item");
		if (galleryItem) {
			galleryItem.addEventListener("click", () => {
				openModal(i); // Use the loop index directly
			});
		}
	}

	// If infinite scroll is enabled, also attach listeners to cloned slides
	if (shouldInfiniteScroll) {
		for (let i = totalOriginalSlides; i < originalSlides.length; i++) {
			const galleryItem = originalSlides[i].querySelector(".gallery-item");
			if (galleryItem) {
				const originalIndex = i - totalOriginalSlides; // Map back to original index
				galleryItem.addEventListener("click", () => {
					openModal(originalIndex);
				});
			}
		}
	}

	// Modal controls
	modalClose.addEventListener("click", closeModal);
	modalOverlay.addEventListener("click", closeModal);
	modalPrev.addEventListener("click", showNextImage);
	modalNext.addEventListener("click", showPrevImage);

	// Zoom functionality
	modalImageContainer.addEventListener("click", toggleZoom);

	// Mouse drag functionality for zoomed images
	modalImage.addEventListener("mousedown", startDrag);
	document.addEventListener("mousemove", drag);
	document.addEventListener("mouseup", endDrag);

	// Touch drag functionality for mobile
	modalImage.addEventListener("touchstart", startTouchDrag);
	document.addEventListener("touchmove", touchDrag);
	document.addEventListener("touchend", endDrag);

	// Keyboard navigation
	document.addEventListener("keydown", (e) => {
		if (!modal.classList.contains("active")) return;

		switch (e.key) {
			case "Escape":
				closeModal();
				break;
			case "ArrowLeft":
				if (!isZoomed) showNextImage();
				break;
			case "ArrowRight":
				if (!isZoomed) showPrevImage();
				break;
		}
	});

	function openModal(index) {
		currentModalIndex = index;
		resetZoom();
		updateModalContent();
		modal.classList.add("active");
		document.body.style.overflow = "hidden"; // Prevent background scrolling
	}

	function closeModal() {
		modal.classList.remove("active");
		document.body.style.overflow = ""; // Restore scrolling
		resetZoom();
	}

	function showPrevImage() {
		if (isZoomed) return;
		currentModalIndex = (currentModalIndex - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length;
		resetZoom();
		updateModalContent();
	}

	function showNextImage() {
		if (isZoomed) return;
		currentModalIndex = (currentModalIndex + 1) % GALLERY_IMAGES.length;
		resetZoom();
		updateModalContent();
	}

	function toggleZoom(e) {
		e.stopPropagation();

		if (isZoomed) {
			resetZoom();
		} else {
			isZoomed = true;
			modalImageContainer.classList.add("zoomed");
		}
	}

	function resetZoom() {
		isZoomed = false;
		translateX = 0;
		translateY = 0;
		modalImageContainer.classList.remove("zoomed");
		modalImage.style.transform = "scale(1) translate(0, 0)";
	}

	function startDrag(e) {
		if (!isZoomed) return;
		e.preventDefault();
		isDragging = true;
		startX = e.clientX - translateX;
		startY = e.clientY - translateY;
	}

	function startTouchDrag(e) {
		if (!isZoomed) return;
		e.preventDefault();
		isDragging = true;
		const touch = e.touches[0];
		startX = touch.clientX - translateX;
		startY = touch.clientY - translateY;
	}

	function drag(e) {
		if (!isDragging || !isZoomed) return;
		e.preventDefault();

		translateX = e.clientX - startX;
		translateY = e.clientY - startY;

		updateImageTransform();
	}

	function touchDrag(e) {
		if (!isDragging || !isZoomed) return;
		e.preventDefault();

		const touch = e.touches[0];
		translateX = touch.clientX - startX;
		translateY = touch.clientY - startY;

		updateImageTransform();
	}

	function endDrag() {
		isDragging = false;
	}

	function updateImageTransform() {
		modalImage.style.transform = `scale(2) translate(${translateX / 2}px, ${translateY / 2}px)`;
	}

	function updateModalContent() {
		const image = GALLERY_IMAGES[currentModalIndex];
		modalImage.src = image.src;
		modalImage.alt = image.alt;
		modalTitle.textContent = image.title;
		currentCounter.textContent = currentModalIndex + 1;
	}
}

// Initialize when DOM is ready
document.addEventListener("DOMContentLoaded", initializeGallery);
window.addEventListener("load", initializeGallery);
