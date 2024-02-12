import React from "react";
import SVG from "react-inlinesvg";

export default function Icon({ id, src, className }) {
	return src.includes(".svg") ? (
		<SVG src={src} className={className} />
	) : (
		<img id={id} src={src} className={className} />
	);
}
