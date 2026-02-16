import React from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	variant?: "primary" | "secondary";
	fullWidth?: boolean;
	loading?: boolean;
}

const Button: React.FC<ButtonProps> = ({
	variant = "primary",
	fullWidth = false,
	loading = false,
	className,
	children,
	...props
}) => {
	const baseStyles =
		"inline-flex items-center justify-center rounded-md font-medium transition duration-200 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed";

	const variants = {
		primary:
			"bg-primary hover:bg-primary-hover text-white",
		secondary:
			"bg-surface border border-border text-text-primary hover:bg-background",
	};

	return (
		<button
			className={clsx(
				baseStyles,
				variants[variant],
				fullWidth && "w-full",
				className
			)}
			disabled={loading || props.disabled}
			{...props}
		>
			{loading ? "Loading..." : children}
		</button>
	);
};

export default Button;
