// Example:4 (SKIP)
// Question: How many times does the substring "code" occur in the string "codesandboxcodecode"?
// Explanation: We can use the match() method with a regular expression to find all occurrences of the substring and count them.
const mainString = "codesandboxcodecode";
const substring = "code";
const occurrences = mainString.match(new RegExp(substring, "g")).length;

console.log("The substring occurs", occurrences, "times in the string.");

// These examples demonstrate how to solve easy and medium-level string problems in JavaScript.
// By using string methods, regular expressions, and appropriate algorithms, you can solve problems like counting characters, converting cases, checking anagrams, or counting substring occurrences.
