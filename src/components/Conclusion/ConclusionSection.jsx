import "./ConclusionSection.css";

export function ConclusionSection({ children }) {
	return (
		<section id="conclusion" class="section text-section section-topbar">
			<div class="conclusion-title section-title"> Conclusion&nbsp;&amp; Takeaways</div>
			<div class="conclusion-content section-content section-multi-content">{children}</div>
		</section>
	);
}
