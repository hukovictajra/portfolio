import { useEffect } from "preact/hooks";

import "./Resume.css";

export function Resume() {
	useEffect(() => {
		const iframe = document.getElementById("resume-iframe");
		const loading = document.getElementById("resume-loading");
		let loadTimeout;

		if (iframe && loading) {
			// Set a timeout to hide loading spinner after 5 seconds regardless
			loadTimeout = setTimeout(() => {
				if (loading.style.display !== "none") {
					loading.style.display = "none";
					iframe.style.display = "block";
					console.log("PDF load timeout - showing iframe anyway");
				}
			}, 5000);

			// Handle successful load
			iframe.onload = () => {
				clearTimeout(loadTimeout);
				loading.style.display = "none";
				iframe.style.display = "block";
				console.log("PDF loaded successfully");
			};

			// Handle load errors
			iframe.onerror = () => {
				clearTimeout(loadTimeout);
				loading.innerHTML = `
					<div class="resume-error">
						<p>Unable to load PDF. <a href="/portfolio/resume/resume.pdf" target="_blank" class="text-pink-300 underline">Click here to view in new tab</a></p>
					</div>
				`;
				console.error("PDF failed to load");
			};

			// Force show iframe after a short delay as fallback
			setTimeout(() => {
				if (iframe.style.display === "none") {
					loading.style.display = "none";
					iframe.style.display = "block";
				}
			}, 2000);
		}

		const fullscreenBtn = document.getElementById("fullscreen-btn");
		if (fullscreenBtn) {
			fullscreenBtn.addEventListener("click", () => {
				if (iframe) {
					if (iframe.requestFullscreen) {
						iframe.requestFullscreen();
					} else if (iframe.webkitRequestFullscreen) {
						iframe.webkitRequestFullscreen();
					} else if (iframe.msRequestFullscreen) {
						iframe.msRequestFullscreen();
					}
				}
			});
		}

		return () => {
			if (loadTimeout) {
				clearTimeout(loadTimeout);
			}
			if (fullscreenBtn) {
				fullscreenBtn.replaceWith(fullscreenBtn.cloneNode(true));
			}
		};
	}, []);

	return (
		<main className="resume-main">
			<div className="resume-container">
				<div className="resume-header">
					<h1 className="resume-title">Resume</h1>
					<div className="resume-actions">
						<a href="/portfolio/resume/resume.pdf" download className="resume-download-btn">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
								<polyline points="7,10 12,15 17,10"></polyline>
								<line x1="12" y1="15" x2="12" y2="3"></line>
							</svg>
							Download
						</a>
						<button id="fullscreen-btn" className="resume-fullscreen-btn">
							<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
								<path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"></path>
							</svg>
							Fullscreen
						</button>
					</div>
				</div>

				<div
					className="resume-viewer-container"
					style={{ height: "85vh", minHeight: "600px", maxWidth: "calc(85vh / 1.414)" }}
				>
					<div className="resume-loading" id="resume-loading">
						<div className="resume-spinner"></div>
						<p>Loading resume...</p>
					</div>

					<iframe
						id="resume-iframe"
						src="/portfolio/resume/resume.pdf"
						className="resume-iframe"
						title="Tajra Huković Resume"
						loading="lazy"
						style={{ display: "none" }}
					/>
				</div>

				<div className="resume-mobile-notice">
					<p>For the best viewing experience on mobile, consider downloading the PDF or viewing in landscape mode.</p>
				</div>
			</div>
		</main>
	);
}
