import "./Toggle.scss";

export interface ToggleProps {
	className?: string;
	onLabel: string;
	offLabel: string;
	onClick: () => void;
}

export default function Toggle({ className, onLabel, offLabel, onClick }: ToggleProps) {
	return (
		<label className={`toggle ${className}`}>
			<input type="checkbox" onClick={onClick} />
			<span className="slider"></span>
			<span className="labels" data-on={onLabel} data-off={offLabel}></span>
		</label>
	);
}
