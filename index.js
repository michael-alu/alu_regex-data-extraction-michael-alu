#!/usr/bin/env node

/**
 * @typedef {Object} Pattern
 * @property {RegExp} hashtag The regular expression to match hashtags.
 * @property {RegExp} creditCard The regular expression to match credit card numbers.
 * @property {RegExp} currency The regular expression to match numbers with currency symbols.
 * @property {RegExp} URL The regular expression to match URLs.
 * @property {RegExp} phone The regular expression to match phone numbers.
 * @property {RegExp} htmlTag The regular expression to match HTML tags.
 * @property {RegExp} email The regular expression to match email addresses.
 * @property {RegExp} time The regular expression to match times.
 */

/**
 * @type {Pattern}
 */
const patterns = {
  hashtag: new RegExp("#\\w+", "g"),
  creditCard: new RegExp(
    "\\b\\d{4}[-\\s]?\\d{4}[-\\s]?\\d{4}[-\\s]?\\d{4}\\b",
    "g"
  ),
  currency: new RegExp("\\$\\d{1,3}(,\\d{3})*(\\.\\d{2})?", "g"),
  url: new RegExp(
    "https?:\\/\\/(www\\.)?[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}(\\/\\S*)?",
    "g"
  ),
  phone: new RegExp("\\(?\\d{3}\\)?[-\\s]?\\d{3}[-\\s]?\\d{4}", "g"),
  htmlTag: new RegExp(
    "<([a-z]+)(\\s+[^<>]*)?(?:>(.*?)<\\/\\1>|\\s*\\/?>)",
    "gi"
  ),
  email: new RegExp("[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}", "g"),
  time: new RegExp(
    "\\b(0?[1-9]|1[0-2]):[0-5][0-9]\\s?(AM|PM)\\b|\\b([01]?[0-9]|2[0-3]):[0-5][0-9]\\b",
    "g"
  ),
};

/**
 * This function intends to capitalize the Pattern keys when logging them out using the Regular Expressions, it also properly formats camel case words.
 * @param input The text input that should be capitalized.
 * @returns {string} a formatted text, it also separates the text if it is camel case.
 */
const capitalize = (input = "") => {
  if (!input) {
    return "";
  }

  if (input === "url") {
    return "URL";
  }

  return input
    .replace(/([A-Z])/g, " $1")
    .trim()
    .replace(/\band\b/gi, "&")
    .replace(/\b\w/g, char => char.toUpperCase());
};

/**
 * @typedef {Object} PatternResult
 * @property {string[]} hashtag The regular expression to match hashtags.
 * @property {string[]} creditCard The regular expression to match credit card numbers.
 * @property {string[]} currency The regular expression to match numbers with currency symbols.
 * @property {string[]} URL The regular expression to match URLs.
 * @property {string[]} phone The regular expression to match phone numbers.
 * @property {string[]} htmlTag The regular expression to match HTML tags.
 * @property {string[]} email The regular expression to match email addresses.
 * @property {string[]} time The regular expression to match times.
 */

/**
 * This functions extracts patterns in textual data, it does this by going through each pattern in our `patterns` object and does a regex match on the whole text to get all possible matches that exist in the textual data.
 * @param text The textual data to be extracted.
 * @returns {PatternResult} a result object where each key is the pattern type (e.g hashTag, phone, e.t.c) and the value is an array of matched results
 */
const extract = (text = "") => {
  try {
    if ([false, null, undefined, 0].includes(text)) {
      text = "";
    }

    return Object.entries(patterns).reduce((result, [type, pattern]) => {
      result[type] = text.match(pattern) || [];

      return result;
    }, {});
  } catch (error) {
    console.error("Error extracting Data", error);
  }
};

/* 
==================================
Example usage
================================== 
*/

const text = `
Email addresses:
user@example.com
firstname.lastname@company.co.uk
URLs:
https://www.example.comLinks to an external site.
http://subdomain.example.org/pageLinks to an external site.
Phone numbers (various formats):
(123) 456-7890
123-456-7890
123.456.7890
Credit card numbers:
1234 5678 9012 3456
1234-5678-9012-3456
Time:
14:30 (24-hour format)
2:30 PM (12-hour format)
HTML tags:
<p>
<div class="example">
<img src="image.jpg" alt="description">
Hashtags:
#example
#ThisIsAHashtag
Currency amounts:
$19.99
$1,234.56
`;

console.log("\nExtracting data from unstructured text...");

const extraction = extract(text);

console.log("\n\x1b[33mSimulating little delay...\x1b[0m");

setTimeout(() => {
  if (extraction) {
    console.log(
      "\n\x1b[32mSuccessfully extracted data from unstructured text! 🚀\x1b[0m"
    );

    console.log(
      "\nHere are our top findings from the patterns we've developed - "
    );

    Object.entries(extraction).map(([key, results]) => {
      console.log(`\n${capitalize(key)} - ${(results || []).join(", ")}`);
    });
  } else {
    console.log(
      "\n\x1b[31mFailed to extract data from unstructured text\x1b[0m"
    );
  }
}, 1000);
