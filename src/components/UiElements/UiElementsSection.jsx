import "./UiElementsSection.css";

export function UiElementsSection({ typography, colors, children }) {
	const { fontName, fontUrl, fontClass } = typography;

	return (
		<section id="ui-elements" className="section text-section section-topbar">
			<div className="ui-elements-title section-title">UI Elements & Visual Direction</div>
			<div className="ui-elements-content section-content flex flex-col gap-6">
				<div className="ui-elements-typography ui-elements-subsection">
					<span className="ui-elements-subsection-title">Typography</span>

					<div className="ui-elements-subsection-content ui-elements-typography-fonts">
						<a
							href={fontUrl}
							className={`underline cursor-breakpoint ${fontClass}`}
							target="_blank"
							data-label="Open Link"
						>
							{fontName}
						</a>
						<span className={fontClass}>
							<span className="font-light">light</span> / <span className="font-normal">regular</span> /{" "}
							<span className="font-semibold">semi-bold</span>
						</span>
					</div>
				</div>

				<div className="ui-elements-colors ui-elements-subsection">
					<span className="ui-elements-subsection-title">Colors</span>

					<div className="ui-elements-subsection-content ui-elements-color-samples">
						{colors.map((color) => {
							return (
								<span
									className={`ui-elements-color-sample cursor-breakpoint`}
									data-label={color}
									style={{ backgroundColor: color }}
								></span>
							);
						})}
					</div>
				</div>

				{children}
			</div>
		</section>
	);
}
