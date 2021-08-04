import cssContent from "http://localhost:9990/index.css?query#fragment";
import { value, value2 } from "http://localhost:9990/resolve.js";
import { fallback } from "http://localhost:9990/fallback.js";
import redirect1 from "http://localhost:9990/redirect";
import redirect2 from "http://localhost:9990/redirect.js";
import codeOfConduct1 from "https://raw.githubusercontent.com//webpack//webpack//main/CODE_OF_CONDUCT.md";
import codeOfConduct2 from "https://raw.githubusercontent.com/webpack/webpack/main/CODE_OF_CONDUCT.md";

it("http url request should be supported", () => {
	expect(cssContent).toBe("a {}.webpack{}");
	expect(value).toBe(42);
	expect(value2).toBe(42);
	expect(fallback).toBe(42);
	expect(redirect1).toEqual({ ok: true });
	expect(redirect2).toEqual({ ok: true });
	expect(redirect2).not.toBe(redirect1);
});

it("https url request should be supported", () => {
	expect(codeOfConduct1.includes("CODE_OF_CONDUCT")).toBeTruthy();
	expect(codeOfConduct2.includes("CODE_OF_CONDUCT")).toBeTruthy();
});
