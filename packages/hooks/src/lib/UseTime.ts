import { CALENDAR_DAYS, CALENDAR_MONTHS, getAmPmHours, getDayPeriod, getTimePart } from "@memory/utils";
import { useEffect, useState } from "react";
/**
 * Provides the current time and date
 * @returns
 */
export function UseTime() {
	const [seconds, setSeconds] = useState(0);
	const [minutes, setMinutes] = useState(0);
	const [hours, setHours] = useState(0);

	const [day, setDay] = useState(0);
	const [month, setMonth] = useState(0);

	const [monthName, setMonthName] = useState("january");
	const [dayName, setDayName] = useState("monday");
	const [period, setPeriod] = useState("day");

	const [date, setDate] = useState(new Date(0));

	const [timePart, setTimePart] = useState("am");
	const [timePartHours, setTimePartHours] = useState(0);

	const updateTime = () => {
		const updatedDate = new Date();
		setDate(updatedDate);

		setSeconds(updatedDate.getSeconds());
		setMinutes(updatedDate.getMinutes());

		const updatedHours = updatedDate.getHours();
		setHours(updatedHours);

		setDay(updatedDate.getDate());
		setMonth(updatedDate.getMonth());

		setDayName(CALENDAR_DAYS[updatedDate.getDay()]);
		setMonthName(CALENDAR_MONTHS[updatedDate.getMonth()]);
		setPeriod(getDayPeriod(updatedDate));

		const updatedTimePart = getTimePart(updatedHours);
		setTimePart(updatedTimePart);
		setTimePartHours(getAmPmHours(updatedHours, updatedTimePart));
	};

	useEffect(() => {
		updateTime();
		const interval = setInterval(updateTime, 5e2);
		return () => clearInterval(interval);
	}, []);

	return { seconds, minutes, hours, day, month, period, monthName, dayName, timePart, timePartHours, date };
}
