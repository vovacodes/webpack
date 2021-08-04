it("error when lockfile is outdated/invalid", () => {
	expect(() => {
		require("http://localhost:9990/index.css?query#fragment");
	}).toThrowError();
	expect(() => {
		require("http://localhost:9990/resolve.js");
	}).toThrowError();
	expect(() => {
		require("http://localhost:9990/fallback.js");
	}).toThrowError();
	expect(() => {
		require("http://localhost:9990/redirect");
	}).toThrowError();
});
