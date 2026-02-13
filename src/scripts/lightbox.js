class SimpleLightbox {
	constructor() {
		this.currentImage = null;
		this.init();
	}

	init() {
		this.createLightboxHTML();
		this.bindEvents();
		this.attachToImages();
	}

	createLightboxHTML() {
		const lightboxHTML = `
      <div id="simple-lightbox" class="simple-lightbox">
        <div class="simple-lightbox-overlay"></div>
        <div class="simple-lightbox-container">
          <img class="simple-lightbox-image" src="" alt="">
          <button class="simple-lightbox-close cursor-breakpoint" data-label="Close" aria-label="Close lightbox">&times;</button>
          <button class="simple-lightbox-zoom-in" aria-label="Zoom in">+</button>
          <button class="simple-lightbox-zoom-out" aria-label="Zoom out">-</button>
          <button class="simple-lightbox-reset" aria-label="Reset zoom">⌂</button>
        </div>
      </div>
    `;
		document.body.insertAdjacentHTML("beforeend", lightboxHTML);

		this.lightbox = document.getElementById("simple-lightbox");
		this.lightboxImage = this.lightbox.querySelector(".simple-lightbox-image");
		this.closeBtn = this.lightbox.querySelector(".simple-lightbox-close");
		this.zoomInBtn = this.lightbox.querySelector(".simple-lightbox-zoom-in");
		this.zoomOutBtn = this.lightbox.querySelector(".simple-lightbox-zoom-out");
		this.resetBtn = this.lightbox.querySelector(".simple-lightbox-reset");
		this.overlay = this.lightbox.querySelector(".simple-lightbox-overlay");

		this.scale = 1;
		this.translateX = 0;
		this.translateY = 0;
	}

	bindEvents() {
		this.closeBtn.addEventListener("click", () => this.close());
		this.overlay.addEventListener("click", () => this.close());
		this.zoomInBtn.addEventListener("click", () => this.zoomIn());
		this.zoomOutBtn.addEventListener("click", () => this.zoomOut());
		this.resetBtn.addEventListener("click", () => this.reset());

		// Keyboard events
		document.addEventListener("keydown", (e) => {
			if (!this.lightbox.classList.contains("active")) return;

			switch (e.key) {
				case "Escape":
					this.close();
					break;
				case "+":
				case "=":
					this.zoomIn();
					break;
				case "-":
					this.zoomOut();
					break;
				case "0":
					this.reset();
					break;
			}
		});

		// Mouse wheel zoom - fixed direction and sensitivity
		this.lightboxImage.addEventListener("wheel", (e) => {
			e.preventDefault();
			const zoomFactor = 1.05; // Further reduced sensitivity for smoother control

			if (e.deltaY < 0) {
				// Scroll up = zoom in (natural direction)
				this.scale = Math.min(this.scale * zoomFactor, 5);
			} else {
				// Scroll down = zoom out (natural direction)
				this.scale = Math.max(this.scale / zoomFactor, 0.5);
			}

			this.updateTransform();
		});

		// Drag functionality
		let isDragging = false;
		let startX, startY, initialTranslateX, initialTranslateY;

		this.lightboxImage.addEventListener("mousedown", (e) => {
			if (this.scale <= 1) return;
			isDragging = true;
			startX = e.clientX;
			startY = e.clientY;
			initialTranslateX = this.translateX;
			initialTranslateY = this.translateY;
		});

		document.addEventListener("mousemove", (e) => {
			if (!isDragging) return;
			e.preventDefault();

			const deltaX = e.clientX - startX;
			const deltaY = e.clientY - startY;

			this.translateX = initialTranslateX + deltaX;
			this.translateY = initialTranslateY + deltaY;

			this.updateTransform();
		});

		document.addEventListener("mouseup", () => {
			isDragging = false;
		});
	}

	attachToImages() {
		// Attach to all images in the document
		const images = document.querySelectorAll("img");
		images.forEach((img) => {
			// Skip very small images (likely icons)
			if (img.naturalWidth < 100 || img.naturalHeight < 100) return;

			img.addEventListener("click", (e) => {
				e.preventDefault();
				this.open(img.src, img.alt);
			});
		});
	}

	open(src, alt = "") {
		this.lightboxImage.src = src;
		this.lightboxImage.alt = alt;
		this.lightbox.classList.add("active");
		document.body.style.overflow = "hidden";
		this.reset();
	}

	close() {
		this.lightbox.classList.remove("active");
		document.body.style.overflow = "";
		this.reset();
	}

	zoomIn() {
		this.scale = Math.min(this.scale * 1.2, 5);
		this.updateTransform();
	}

	zoomOut() {
		this.scale = Math.max(this.scale / 1.2, 0.5);
		this.updateTransform();
	}

	reset() {
		this.scale = 1;
		this.translateX = 0;
		this.translateY = 0;
		this.updateTransform();
	}

	updateTransform() {
		this.lightboxImage.style.transform = `translate(${this.translateX}px, ${this.translateY}px) scale(${this.scale})`;
	}
}

// Initialize lightbox when DOM is loaded
document.addEventListener("DOMContentLoaded", () => {
	new SimpleLightbox();
});
