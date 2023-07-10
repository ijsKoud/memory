import type React from "react";

interface Props {
	/** The definition of the button interaction */
	"aria-label": string;
}

export type ButtonProps = React.DetailedHTMLProps<React.HtmlHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & Props;

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
	return <button {...props}>{props.children}</button>;
};
