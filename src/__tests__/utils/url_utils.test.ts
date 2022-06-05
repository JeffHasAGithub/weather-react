import * as UrlUtils from "../../components/weather/utils/url_utils"
import { Query } from "../../components/weather/utils/url_utils"

describe("UrlUtils", () => {
	describe("escapeSpaces", () => {
		const table = [
			["Tokyo", "Tokyo"],
			["Fort Worth", "Fort+Worth"],
			["Antigua and Barbuda", "Antigua+and+Barbuda"],
			["Democratic Republic of the Congo", "Democratic+Republic+of+the+Congo"],	
		];

		test.each(table)("When passed valid input, returns string with spaces replaced by '+'", (inp, outp) => {
			expect(UrlUtils.escapeSpaces(inp)).toEqual(outp);
		});

		test("When passed an empty string, returns an empty string", () => {
			expect(UrlUtils.escapeSpaces("")).toEqual("");
		});
	});

	describe("buildQuery", () => {
		test("If query.key || query.val === '', return ''", () => {
			const q1 = { key: "", val: "val" };
			const q2 = { key: "key", val: "" };
			const q3 = { key: "", val: "" };

			expect(UrlUtils.buildQuery(q1)).toEqual("");
			expect(UrlUtils.buildQuery(q2)).toEqual("");
			expect(UrlUtils.buildQuery(q3)).toEqual("");
		});

		test("If query.key && query.val are valid, return formatted query", () => {
			expect(UrlUtils.buildQuery({ key: "key", val: "val" })).toEqual("key=val");
		});
	});

	describe("buildParams", () => {
		const table = [
			{
				input: [
					{ key: "x", val: "first" }
				],
				output: "?x=first"
			},
			{
				input: [
					{ key: "x", val: "first" },
					{ key: "y", val: "second" },
					{ key: "z", val: "third"}
				],
				output: "?x=first&y=second&z=third"
			}
		];
		
		test.each(table)("When passed list of valid queries, return formatted query string", ({ input, output }) => {
			expect(UrlUtils.buildParams(...input)).toEqual(output);
		})
		test("When queries.length === 0, return empty string", () => {
			const queries: Query[] = [];
			expect(UrlUtils.buildParams(...queries)).toEqual("");
		});	
	});

	describe("buildURL", () => {
		const table = [
			{
				scheme: "https",
				host: "localhost",
				port: "3000",
				path: ["hello", "my", "friend"],
				result: "https://localhost:3000/hello/my/friend"
			},
			{
				scheme: "http",
				host: "127.0.0.1",
				port: "7000",
				path: [],
				result: "http://127.0.0.1:7000"
			}
		];

		test.each(table)("When passed valid args, returns formatted url", (entry) => {
			expect(UrlUtils.buildURL(entry.scheme, entry.host, entry.port, ...entry.path))
				.toEqual(entry.result);
		});

	});
});
