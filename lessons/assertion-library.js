/**
 *  We have tested `sum` and `subtract` in simple.js,
 *  but this code is pretty imperative.
 *  It'd be nice to write a little abstraction to make
 *  it read a little nicer. Let's write a simple
 *  abstraction to encapsulate this assertion.
 *
 * Task:
 *  1. Create a function called `expect` going to accept an `actual`.
 *  2. Return an object that has some assertions on it. The first one
 *     here is going to be `toBe`, and that's going to take an expected
 *     value.
 *               **BONUS**
 *  Can you add more assertions like `toEqual`, `toBeGreaterThan`, and
 *  `toBeLessThan`?
 *
 * Execute: Use `node lessons/assertion-library.js` to run the test.
 */
const { sum, subtract } = require("../math");

function expect(actual) {
	return {
		toBe(expected) {
			if (actual !== expected) {
				throw new Error(`${actual} is not equal to ${expected}`);
			}
			return true;
		},
		toBeGreaterThan(expected) {
			if (actual <= expected) {
				throw new Error(`${actual} is not greater than ${expected}`);
			}
			return true;
		},
		toBeLessThan(expected) {
			if (actual >= expected) {
				throw new Error(`${actual} is not less than ${expected}`);
			}
			return true;
		},
		toEqual(expected) {
			const serializedActual = JSON.stringify(actual);
			const serializedExpected = JSON.stringify(expected);
			if (serializedActual !== serializedExpected) {
				throw new Error(
					`${serializedActual} is not equal to ${serializedExpected}`
				);
			}
			return true;
		},
	};
}

let result, expected;

result = ["3", "2", "1"];
expected = ["3", "2", "1"];
expect(result).toEqual(expected);

result = sum(3, 7);
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

/**
 * Answer: Checkout the main branch for the answer.
 */

module.exports = { expect };
