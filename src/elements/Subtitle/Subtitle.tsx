import { ReactNode } from "react";

import "./Subtitle.scss";

export interface TitleProps {
	children: ReactNode;
}

export default function SectionSubitle({ children }: TitleProps) {
	return <h3 className="section-subtitle satoshi">{children}</h3>;
}
