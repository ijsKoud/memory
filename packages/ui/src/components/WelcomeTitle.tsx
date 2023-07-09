import { UseTime } from "@memory/hooks";
import React from "react";

export interface WelcomeTitleProps {
	/** The name of the account */
	name: string;
}

/**
 * The welcome title displaying a welcome message like: "Good Afternoon <name>"
 * Note: Automatically switches to correct time (afteroon, morning, evening)
 * @returns
 */
export const WelcomeTitle: React.FC<WelcomeTitleProps> = ({ name }) => {
	const { dayParty } = UseTime();

	return (
		<h1 className="capitalize text-10">
			Good {dayParty} <strong>{name}</strong>
		</h1>
	);
};
