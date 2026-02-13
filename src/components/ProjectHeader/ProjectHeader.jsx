import "./ProjectHeader.css";

export function ProjectHeader({ title, subtitle, chips }) {
	return (
		<section id="project-header" className="section">
			<div className="project-header-text-container">
				<h1 className="project-header-title">{title}</h1>
				<p className="project-header-paragraph">{subtitle}</p>

				<div className="project-header-chips-container">
					{chips &&
						chips.map((chip, index) => {
							const renderContent = () => {
								if (typeof chip.content === "object" && chip.content.label && chip.content.href) {
									return (
										<a
											href={chip.content.href}
											target="_blank"
											rel="noopener noreferrer"
											className="project-header-chip-link cursor-breakpoint"
											data-label="Click Me"
										>
											{chip.content.label}
										</a>
									);
								}

								return <p className="project-header-chip-content">{chip.content}</p>;
							};

							return (
								<div key={index} className="project-header-chip" id="tools-chip">
									<p className="project-header-chip-title">{chip.title}</p>
									{renderContent()}
								</div>
							);
						})}
				</div>
			</div>
		</section>
	);
}
