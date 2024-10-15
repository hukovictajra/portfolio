import { cn } from "@elements/shadcn/lib/utils";
import LoaderIcon from "@assets/icons/LoaderIcon";

export interface LoadingProps {
	visible: boolean;
}

export default function Loading({ visible }: LoadingProps) {
	return (
		<div
			className={cn(
				`absolute top-0 left-0 w-screen h-screen z-30
				bg-global-background
				hidden`,
				visible && "block"
			)}
		>
			<div className="w-full h-full flex justify-center items-center">
				<LoaderIcon />
			</div>
		</div>
	);
}
