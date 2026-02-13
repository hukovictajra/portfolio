import "./ChallengesSection.css";

export function ChallengesSection({ title, children }) {
	return (
		<section id="challenge" className="section text-section section-topbar">
			<div className="challenge-title section-title">{title}</div>
			<div className="challenge-content section-content section-multi-content">{children}</div>
		</section>
	);
}
