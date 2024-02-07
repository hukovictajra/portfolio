import React from "react";
import torba from "/Users/admin/Desktop/tajra_cv/src/assets/torba.png";

import "./ImageSection.scss";

export default function ImageSection() {
	return (
		<div className="img-section">
			<div className="img-wrapper">
				<img src={torba} />
				<img src={torba} />
				<img src={torba} />
				<img src={torba} />
			</div>
		</div>
	);
}
