import "./WorkWithMe.scss";

export interface WorkWithMeProps {
	className?: string;
}

export function WorkWithMe({ className }: WorkWithMeProps) {
	return (
		<a
			className={`work-with-me-button ${className}`}
			aria-label="Get in touch"
			href="mailto:hukovic.tajra@gmail.com"
		>
			Work with me
		</a>
	);
}
