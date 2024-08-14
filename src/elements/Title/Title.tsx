import { ReactNode } from "react";

import "./Title.scss";

export interface TitleProps {
	children: ReactNode;
}

export default function Title({ children }: TitleProps) {
	return <h1 className="blog-title satoshi">{children}</h1>;
}
