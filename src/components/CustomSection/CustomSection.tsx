export interface CustomSectionProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

export function CustomSection({ id, title, children }: CustomSectionProps) {
  console.log("A")
	return (
		<section id={id} className="section text-section section-topbar">
			<div className={`custom-section-${id}-title section-title`}>{title}</div>
			<div className={`custom-section-${id}-content section-content flex flex-col gap-6`}>
				{children}
			</div>
		</section>
	);
}
