export type TimePart = "am" | "pm";
export type DateSuffix = "st" | "nd" | "rd" | "th";

export const DATE_SUFFIXES: DateSuffix[] = ["st", "nd", "rd", ...Array<DateSuffix>(31 - 3).fill("th")];
export const CALENDAR_DAYS = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"] as const;
export const CALENDAR_MONTHS = [
	"january",
	"february",
	"march",
	"april",
	"may",
	"june",
	"july",
	"august",
	"september",
	"october",
	"november",
	"december"
] as const;

/**
 * Returns the period the user is in (morning, afternoon, evening)
 * @param date The date to parse
 * @returns
 */
export function getDayPeriod(date: Date) {
	const hours = date.getHours();
	const minutes = date.getMinutes();

	const timeString = hours * 100 + minutes; // Formats time into something like 1700, 1200
	const isMorning = timeString >= 0 && timeString < 12_00;
	const isAfternoon = timeString >= 12_00 && timeString <= 17_00;

	return isMorning ? "morning" : isAfternoon ? "afternoon" : "evening";
}

/**
 * Returns the 12-hour time part the user is in
 * @param hours The time in hours
 * @returns
 */
export function getTimePart(hours: number): TimePart {
	if (hours === 24) return "am";
	return hours - 12 >= 0 ? "pm" : "am";
}

/**
 * Gets the hours in 12-hour format
 * @param hours The hours to parse
 * @param mode The 12-hour time part
 * @returns
 */
export function getAmPmHours(hours: number, mode: TimePart): number {
	if (hours === 12) return hours;
	return hours - (mode === "am" ? 0 : 12);
}

/**
 * Gets the correct suffix for the provided date (e.x.: 1st, 2nd, 3rd, 4th)
 * @param date The current date
 * @returns
 */
export function getDateSuffix(date: number): DateSuffix {
	return DATE_SUFFIXES[date - 1];
}
