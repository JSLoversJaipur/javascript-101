// Example:3 (skip)
// Question: Are the strings "listen" and "silent" anagrams?
// Explanation: We can remove spaces and punctuation from both strings, sort their characters, and compare if they are equal.
const string1 = "listen";
const string2 = "silent";
const sortedString1 = string1.replace(/[\W_]/g, "").toLowerCase().split("").sort().join("");
const sortedString2 = string2.replace(/[\W_]/g, "").toLowerCase().split("").sort().join("");
const areAnagrams = sortedString1 === sortedString2;

console.log("The strings are", areAnagrams ? "anagrams." : "not anagrams.");

// Count the Occurrences of a Substring
// Given a string and a substring, count the number of occurrences of the substring in the string.
