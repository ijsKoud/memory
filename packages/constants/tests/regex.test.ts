import { describe, test, expect } from "vitest";
import { HTTPLESS_URL, HTTP_URL } from "../src/regex";
import { isRegExp } from "node:util/types";

describe("HTTPLESS_URL regex", () => {
	test("HTTPLESS_URL should be a regex", () => {
		expect(isRegExp(HTTPLESS_URL)).toBe(true);
	});

	const mockdata = ["github.com/test", "a.b", "ijskoud.dev/not/working/url", "this is a test with discord.com url in it"];

	test("HTTPLESS_URL test run", () => {
		expect(mockdata.map((url) => structuredClone(HTTPLESS_URL).test(url))).toStrictEqual([true, true, true, false]);
	});
});

describe("HTTPL_URL regex", () => {
	test("HTTPL_URL should be a regex", () => {
		expect(isRegExp(HTTPLESS_URL)).toBe(true);
	});

	const mockdata = [
		"https://github.com/test",
		"https://a.b",
		"https://ijskoud.dev/not/working/url",
		"this is a test with https://discord.com url in it"
	];

	test("HTTPL_URL test run", () => {
		expect(mockdata.map((url) => structuredClone(HTTP_URL).test(url))).toStrictEqual([true, true, true, false]);
	});
});
