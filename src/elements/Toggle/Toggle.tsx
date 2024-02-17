import "./Toggle.scss";

export default function Toggle({ className, onLabel, offLabel, onClick }) {
	return (
		<label className={`toggle ${className}`}>
			<input type="checkbox" onClick={onClick} />
			<span className="slider"></span>
			<span className="labels" data-on={onLabel} data-off={offLabel}></span>
		</label>
	);
}
