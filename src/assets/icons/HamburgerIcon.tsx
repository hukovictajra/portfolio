import * as React from "react";
import type { SVGProps } from "react";
const SvgHamburgerIcon = (props: SVGProps<SVGSVGElement>) => (
	<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
		<g fill="none" fillRule="evenodd">
			<path d="M0 0h24v24H0z" />
			<path
				stroke="currentColor"
				strokeLinecap="round"
				strokeWidth={2}
				d="M5 7h14M5 17h14M5 12h14"
			/>
		</g>
	</svg>
);
export default SvgHamburgerIcon;
