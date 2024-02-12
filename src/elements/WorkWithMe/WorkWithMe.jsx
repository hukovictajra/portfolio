import React from "react";

import "./WorkWithMe.scss";

export default function WorkWithMe({ id, className }) {
	return (
		<a
			id={id}
			className={`work-with-me-button ${className}`}
			aria-label="Get in touch"
			href="mailto:hukovic.tajra@gmail.com"
		>
			Work with me
		</a>
	);
}
