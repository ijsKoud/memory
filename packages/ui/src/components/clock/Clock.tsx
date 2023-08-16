import { NunitoFont, NunitoSansFont } from "@memory/constants";
import { UseTime } from "@memory/hooks";
import React from "react";
import { Container } from "../../blocks";
import { getDateSuffix } from "@memory/utils";

export interface ClockProps {
	/** Whether the clock is 12 hours or 24 hours */
	fullDay?: boolean;
}

const TimeDivider: React.FC = () => (
	<p className="text-zinc-600 text-8 mb-1" style={NunitoFont.style}>
		:
	</p>
);

/**
 * A clock component which shows the time and date
 * @param props The required props
 * @returns
 */
export const Clock: React.FC<ClockProps> = ({ fullDay }) => {
	const { date, dayName, seconds, hours: _hours, timePartHours, timePart, monthName } = UseTime();
	const dateSuffix = getDateSuffix(date.getDate());
	const hours = fullDay ? _hours : timePartHours;

	return (
		<Container>
			<p className="capitalize -mb-3 text-4 w-fit" style={NunitoFont.style}>
				{monthName} the {date.getDate()}
				{dateSuffix}
			</p>
			<h1 className="capitalize text-10 font-bold flex items-center gap-2" style={NunitoSansFont.style}>
				{[
					dayName.slice(0, 3).toUpperCase(),
					hours.toString().padStart(2, "0"),
					date.getMinutes().toString().padStart(2, "0"),
					seconds.toString().padStart(2, "0")
				]
					.map<React.ReactNode>((time, key) => <p key={key}>{time}</p>)
					.reduce((prev, curr, idx) => [prev, <TimeDivider key={idx * 10} />, curr])}

				{!fullDay && (
					<>
						<TimeDivider />
						<p className="text-indigo-400">{timePart.toUpperCase()}</p>
					</>
				)}
			</h1>
		</Container>
	);
};
