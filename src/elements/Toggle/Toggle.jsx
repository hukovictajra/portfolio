import React from "react";

import "./Toggle.scss";

export default function Toggle({ onLabel, offLabel, onClick }) {
	return (
		<label className="toggle">
			<input type="checkbox" onClick={onClick} />
			<span className="slider"></span>
			<span className="labels" data-on={onLabel} data-off={offLabel}></span>
		</label>
	);
}
