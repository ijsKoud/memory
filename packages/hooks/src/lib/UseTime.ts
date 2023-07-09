import { useEffect, useState } from "react";

const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export function UseTime() {
	const [dayParty, setDayParty] = useState("day");
	const [date, setDate] = useState(new Date());

	const [seconds, setSeconds] = useState(0);
	const [day, setDay] = useState(days[date.getDay()]);
	const [month, setMonth] = useState(months[date.getMonth()]);

	const updateTime = () => {
		const updatedDate = new Date();
		setDate(updatedDate);

		updateDayParty(updatedDate);
		setDay(days[updatedDate.getDay()]);
		setMonth(months[updatedDate.getMonth()]);
	};

	const updateDayParty = (time = date) => {
		const hour = time.getHours();
		const minute = time.getMinutes();

		const timeString = hour * 100 + minute;
		const isMorning = timeString >= 0 && timeString < 12_00;
		const isAfternoon = timeString >= 12_00 && timeString <= 17_00;

		setSeconds(time.getSeconds());
		setDayParty(isMorning ? "morning" : isAfternoon ? "afternoon" : "evening");
	};

	useEffect(() => {
		updateDayParty();
		const interval = setInterval(updateTime, 1e3);
		return () => clearInterval(interval);
	}, []);

	return { dayParty, date, month, day, seconds };
}
