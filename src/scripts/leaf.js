// Leaf animation configuration - easily adjustable
const LEAF_CONFIG = {
	// Number of leaves
	MAX_LEAVES: 15,
	MAX_LEAVES_SLOW: 12,

	// Speed settings (pixels per second)
	FALL_SPEED_FAST: 50, // Fast leaves fall speed
	FALL_SPEED_SLOW: 30, // Slow leaves fall speed
	SPEED_VARIANCE: 20, // Random variance in speed

	// Spawning settings
	SPAWN_RATE: 1000, // Time between spawning new leaves (ms)
	SPAWN_RATE_VARIANCE: 1500, // Random variance in spawn rate

	// Opacity settings
	FAST_LEAF_OPACITY: 0.4,
	SLOW_LEAF_OPACITY: 0.2,

	// Size settings
	LEAF_SIZE_MIN: 15,
	LEAF_SIZE_MAX: 25,
};

let activeLeaves = [];
let heroHeight = 0;
let pageHeight = 0;
let leafSpawner = null;

// Calculate page dimensions
function updatePageDimensions() {
	const heroSection = document.getElementById("hero");
	heroHeight = heroSection ? heroSection.offsetHeight : window.innerHeight;
	pageHeight = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight);
}

// Create a single leaf
function createLeaf(isSlow = false) {
	const leaf = document.createElement("div");
	leaf.className = isSlow ? "leaf-slow" : "leaf";

	// Random size
	const leafSize = LEAF_CONFIG.LEAF_SIZE_MIN + Math.random() * (LEAF_CONFIG.LEAF_SIZE_MAX - LEAF_CONFIG.LEAF_SIZE_MIN);
	leaf.style.width = `${leafSize}px`;
	leaf.style.height = `${leafSize}px`;

	// Random horizontal position
	const maxLeft = Math.max(0, window.innerWidth - leafSize);
	const startX = Math.random() * maxLeft;
	leaf.style.left = `${startX}px`;

	// Start position just below hero section
	leaf.style.top = `${heroHeight - 50}px`;

	// Set opacity
	const opacity = isSlow ? LEAF_CONFIG.SLOW_LEAF_OPACITY : LEAF_CONFIG.FAST_LEAF_OPACITY;
	leaf.style.opacity = opacity;

	// Calculate fall duration based on distance and speed
	const baseSpeed = isSlow ? LEAF_CONFIG.FALL_SPEED_SLOW : LEAF_CONFIG.FALL_SPEED_FAST;
	const speedVariance = (Math.random() - 0.5) * LEAF_CONFIG.SPEED_VARIANCE;
	const actualSpeed = baseSpeed + speedVariance;
	const fallDistance = pageHeight - heroHeight + 100; // Extra 100px to ensure leaves disappear
	const duration = (fallDistance / actualSpeed) * 1000; // Convert to milliseconds

	// Set animation duration and fall distance as CSS custom properties
	leaf.style.animationDuration = `${duration}ms`;
	leaf.style.setProperty("--fall-distance", `${fallDistance}px`);

	// Add to body
	document.body.appendChild(leaf);
	activeLeaves.push(leaf);

	// Remove leaf after animation completes
	setTimeout(() => {
		if (leaf.parentNode) {
			leaf.parentNode.removeChild(leaf);
		}
		const index = activeLeaves.indexOf(leaf);
		if (index > -1) {
			activeLeaves.splice(index, 1);
		}
	}, duration + 1000);

	return leaf;
}

// Spawn leaves continuously
function spawnLeaf() {
	// Only spawn if we haven't reached the maximum
	const fastLeaves = activeLeaves.filter((leaf) => leaf.className === "leaf").length;
	const slowLeaves = activeLeaves.filter((leaf) => leaf.className === "leaf-slow").length;

	if (fastLeaves < LEAF_CONFIG.MAX_LEAVES && Math.random() > 0.3) {
		createLeaf(false);
	}

	if (slowLeaves < LEAF_CONFIG.MAX_LEAVES_SLOW && Math.random() > 0.5) {
		createLeaf(true);
	}

	// Schedule next spawn
	const nextSpawn = LEAF_CONFIG.SPAWN_RATE + (Math.random() - 0.5) * LEAF_CONFIG.SPAWN_RATE_VARIANCE;
	leafSpawner = setTimeout(spawnLeaf, Math.max(500, nextSpawn));
}

// Initialize the leaf system
function initializeLeaves() {
	updatePageDimensions();

	// Create initial leaves
	for (let i = 0; i < Math.floor(LEAF_CONFIG.MAX_LEAVES / 2); i++) {
		setTimeout(() => createLeaf(false), Math.random() * 3000);
	}
	for (let i = 0; i < Math.floor(LEAF_CONFIG.MAX_LEAVES_SLOW / 2); i++) {
		setTimeout(() => createLeaf(true), Math.random() * 4000);
	}

	// Start continuous spawning
	setTimeout(spawnLeaf, 2000);
}

// Handle window resize
function handleResize() {
	updatePageDimensions();
}

// Clean up on page unload
function cleanup() {
	if (leafSpawner) {
		clearTimeout(leafSpawner);
	}
	activeLeaves.forEach((leaf) => {
		if (leaf.parentNode) {
			leaf.parentNode.removeChild(leaf);
		}
	});
	activeLeaves = [];
}

// Event listeners
// window.addEventListener("load", initializeLeaves);
// window.addEventListener("resize", handleResize);
// window.addEventListener("beforeunload", cleanup);
