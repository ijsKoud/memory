import { NunitoFont, NunitoSansFont } from "@memory/constants";
import { UseTime } from "@memory/hooks";
import { Container } from "../../blocks";

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
export const FullScreenClock: React.FC<ClockProps> = ({ fullDay }) => {
	const { date, day, seconds, month } = UseTime();
	const timezone = date.getHours() - 12 >= 0 ? "pm" : "am";
	const dateSuffix = ["st", "nd", "rd", ...Array(31 - 3).fill("th")][date.getDate()];
	const hours = fullDay ? date.getHours() : date.getHours() - (timezone === "am" ? 0 : 12);

	return (
		<Container className="bg-component-background p-8 rounded-xl">
			<p className="capitalize -mb-3 text-6 w-fit text-red-500" style={NunitoFont.style}>
				{month} the {date.getDate()}
				{dateSuffix}
			</p>
			<h1 className="capitalize text-12 font-semibold flex items-center gap-2" style={NunitoSansFont.style}>
				{[
					day.slice(0, 3).toUpperCase(),
					hours.toString().padStart(2, "0"),
					date.getMinutes().toString().padStart(2, "0"),
					seconds.toString().padStart(2, "0")
				]
					.map<React.ReactNode>((time, key) => <p key={key}>{time}</p>)
					.reduce((prev, curr, idx) => [prev, <TimeDivider key={idx * 10} />, curr])}

				{!fullDay && (
					<>
						<TimeDivider />
						<p className="text-indigo-400">{timezone.toUpperCase()}</p>
					</>
				)}
			</h1>
		</Container>
	);
};
