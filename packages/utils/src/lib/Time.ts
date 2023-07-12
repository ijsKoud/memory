export type TimePart = "am" | "pm";
export type DateSuffix = "st" | "nd" | "rd" | "th";

export const DATE_SUFFIXES: DateSuffix[] = ["st", "nd", "rd", ...Array<DateSuffix>(31 - 3).fill("th")];

export function getTimePart(hours: number): TimePart {
	if (hours === 24) return "am";
	return hours - 12 >= 0 ? "pm" : "am";
}

export function getAmPmHours(hours: number, mode: TimePart): number {
	if (hours === 12) return hours;
	return hours - (mode === "am" ? 0 : 12);
}

export function getDateSuffix(date: number): DateSuffix {
	return DATE_SUFFIXES[date - 1];
}
