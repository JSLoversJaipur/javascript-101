// Operators and Conditionals Problem: Calculate the Discounted Price
// Write a JavaScript program to calculate and display the discounted price of a product based on its original price and a discount percentage. If the original price is greater than $100 and the discount percentage is at least 10%, apply the discount; otherwise, display the original price without any discount.

// Example:
// Question: Calculate the discounted price for a product with an original price of $120 and a discount percentage of 20%.
// Explanation: We check if the original price is greater than $100 and the discount percentage is at least 10%. If the conditions are met, we calculate and display the discounted price; otherwise, we display the original price as is.
const originalPrice = 120;
const discountPercentage = 20;
let discountedPrice;

if (originalPrice > 100 && discountPercentage >= 10) {
  const discountAmount = (originalPrice * discountPercentage) / 100;
  discountedPrice = originalPrice - discountAmount;
} else {
  discountedPrice = originalPrice;
}

console.log("The discounted price is:", discountedPrice);

// In this problem, we used operators and conditionals to determine the discounted price of a product. Here are the key steps:

// 1. We check if the original price is greater than $100 and the discount percentage is at least 10% using the logical AND (&&) operator.
// 2. If the conditions are met, we calculate the discount amount by multiplying the original price by the discount percentage and dividing by 100.
// 3. We subtract the discount amount from the original price to obtain the discounted price.
// 4. If the conditions are not met, we assign the original price to the discounted price without applying any discount.
// 5. We display the discounted price to the console.

// This problem helps us understand how to use operators (comparison and logical) and conditionals (if-else) to make decisions based on certain conditions.

// -------------------------------------------------------------------------------
