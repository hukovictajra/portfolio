import { ReactNode } from "react";

export interface BoldProps {
	children: ReactNode;
}

export default function Bold({ children }: BoldProps) {
	return <span className="font-semibold">{children}</span>;
}
