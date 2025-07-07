/**
 * Converts a given string to camelCase format.
 *
 * This function takes an input string and transforms it into camelCase,
 * where the first word is in lowercase and subsequent words are capitalized,
 * with all separators (underscores, hyphens, spaces) removed.
 *
 * @param {string} input - The string to be converted to camelCase.
 * @returns {string} The camelCase formatted string.
 * @throws {Error} Throws an error if the input is not a string.
 *
 * @example
 * toCamelCase("user_id"); // returns "userId"
 * toCamelCase("SCREEN_NAME"); // returns "screenName"
 * toCamelCase("first-name"); // returns "firstName"
 * toCamelCase("  some value  "); // returns "someValue"
 */
function toCamelCase(input) {
    if (typeof input !== 'string' || input == null) {
        throw new Error('Invalid input: expected a string');
    }

    return input
        .trim()
        .toLowerCase()
        .replace(/[_\-\s]+(.)?/g, (_, chr) => chr ? chr.toUpperCase() : '')
        .replace(/^[A-Z]/, chr => chr.toLowerCase());
}

// Example usage:
// console.log(toCamelCase("user_id")); // "userId"
// console.log(toCamelCase("SCREEN_NAME")); // "screenName"
// toCamelCase(123); // throws Error
// Create a function that converts strings to dot.case format
    


