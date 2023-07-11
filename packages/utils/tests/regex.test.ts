import { describe, test, expect } from "vitest";
import { mergeClassNames } from "../src/lib/Props";

describe("mergeClassNames function", () => {
	test("HTTPLESS_URL should be a function", () => {
		expect(mergeClassNames).toBeTypeOf("function");
	});

	test("Default class name run", () => {
		expect(mergeClassNames("test")).toBe("test");
		expect(mergeClassNames("test", null)).toBe("test");
		expect(mergeClassNames("test", null)).not.toBe("test null");
	});

	test("Full class name run", () => {
		expect(mergeClassNames("test", "aaa")).toBe("test aaa");
		expect(mergeClassNames("test", "aaa")).not.toBe("testaaa");
	});
});
