import React from "react";

interface AuthCardProps {
	children: React.ReactNode;
}

const AuthCard: React.FC<AuthCardProps> = ({ children }) => {
	return (
		<div className="w-full max-w-md bg-surface border border-border rounded-lg shadow-sm p-8">
			{children}
		</div>
	);
};

export default AuthCard;
