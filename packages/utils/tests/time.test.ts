import { describe, test, expect } from "vitest";
import { getDayPeriod, getAmPmHours, getTimePart, getDateSuffix } from "../src/lib/Time";

describe("getDayPeriod function", () => {
	test("getDayPeriod should be a function", () => {
		expect(getDayPeriod).toBeTypeOf("function");
	});

	test("time is 12:00", () => {
		const date = new Date("Wed Aug 16 2023 12:00:00");
		expect(getDayPeriod(date)).toBe("afternoon");
	});

	test("time is 17:00", () => {
		const date = new Date("Wed Aug 16 2023 17:00:00");
		expect(getDayPeriod(date)).toBe("afternoon");
	});

	test("time is 17:01", () => {
		const date = new Date("Wed Aug 16 2023 17:01:00");
		expect(getDayPeriod(date)).toBe("evening");
	});

	test("time is 11:59", () => {
		const date = new Date("Wed Aug 16 2023 11:59:00");
		expect(getDayPeriod(date)).toBe("morning");
	});
});

describe("getAmPmHours function", () => {
	test("getAmPmHours should be a function", () => {
		expect(getAmPmHours).toBeTypeOf("function");
	});

	test("12 hour test", () => {
		expect(getAmPmHours(12, "am")).toBe(12);
		expect(getAmPmHours(12, "pm")).toBe(12);
	});

	test("10 hour test", () => {
		expect(getAmPmHours(10, "am")).toBe(10);
		expect(getAmPmHours(10, "pm")).not.toBe(10);
	});

	test("14 hour test", () => {
		expect(getAmPmHours(14, "pm")).toBe(2);
		expect(getAmPmHours(14, "am")).not.toBe(2);
	});

	test("24 hour test", () => {
		expect(getAmPmHours(24, "pm")).toBe(12);
		expect(getAmPmHours(24, "am")).not.toBe(12);
	});
});

describe("getTimePart function", () => {
	test("getTimePart should be a function", () => {
		expect(getTimePart).toBeTypeOf("function");
	});

	test("12 hour test", () => {
		expect(getTimePart(12)).toBe("pm");
		expect(getTimePart(24)).toBe("am");
	});

	test("10 hour test", () => {
		expect(getTimePart(10)).toBe("am");
	});

	test("14 hour test", () => {
		expect(getTimePart(14)).toBe("pm");
	});
});

describe("getDateSuffix function", () => {
	test("getDateSuffix should be a function", () => {
		expect(getDateSuffix).toBeTypeOf("function");
	});

	test("1st date", () => {
		expect(getDateSuffix(1)).toBe("st");
	});

	test("2nd date", () => {
		expect(getDateSuffix(2)).toBe("nd");
	});

	test("3rd date", () => {
		expect(getDateSuffix(3)).toBe("rd");
	});

	test("4th date", () => {
		expect(getDateSuffix(4)).toBe("th");
	});
});
