import { ReactNode } from "react";

export interface MediumProps {
	children: ReactNode;
}

export default function Medium({ children }: MediumProps) {
	return <span className="font-medium">{children}</span>;
}
