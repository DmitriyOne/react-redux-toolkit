import {
	ButtonHTMLAttributes,
	DetailedHTMLProps,
	FunctionComponent
} from "react";

interface IProps extends
	DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement> {
	className?: string
}

export const Button: FunctionComponent<IProps> = ({
	children,
	className,
	...props
}) => (
	<button
		className={className}
		{...props}
	>
		{children}
	</button>
);
