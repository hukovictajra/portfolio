import { ItemArrowIcon } from "@assets/icons";

import "./GoBack.scss";

export default function GoBack() {
	return (
		<div className="go-back-button" onClick={() => window.history.back()}>
			<ItemArrowIcon className="go-back-button-icon" />
			<span className="underline-effect">Go Back</span>
		</div>
	);
}
