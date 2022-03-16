/* eslint-env mocha */

"use strict";

import proclaim from "proclaim";
import axios from "../helpers.js";

describe("https://github.com/Financial-Times/polyfill-service/issues/1910", function() {
	describe("GET /v2/polyfill.js?features=Promise&unknown=polyfill&flags=always,gated", function() {
		it("responds with same javascript when flags parameter is url encoded", async function() {
			const nonUrlEncodedFlag = (await axios.get("/v2/polyfill.js?features=Promise&unknown=polyfill&flags=always,gated")).data;
			const urlEncodedFlag = (await axios.get("/v2/polyfill.js?features=Promise&unknown=polyfill&flags=always%2Cgated")).data;
			proclaim.strictEqual(nonUrlEncodedFlag, urlEncodedFlag);
		});
	});

	describe("GET /v3/polyfill.js?features=Promise&unknown=polyfill&flags=always,gated", function() {
		it("responds with same javascript when flags parameter is url encoded", async function() {
			const nonUrlEncodedFlag = (await axios.get("/v3/polyfill.js?features=Promise&unknown=polyfill&flags=always,gated")).data;
			const urlEncodedFlag = (await axios.get("/v3/polyfill.js?features=Promise&unknown=polyfill&flags=always%2Cgated")).data;
			proclaim.strictEqual(nonUrlEncodedFlag, urlEncodedFlag);
		});
	});
});
