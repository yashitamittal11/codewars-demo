/*
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
*/

// My solution

// Sum Numbers
function sum (numbers) {
    "use strict";
    
  if ( numbers.length === 0 ) return 0;
  
  const initialValue = 0;
  const sum = numbers.reduce(
    (previousValue, currentValue) =>  previousValue + currentValue, 
    initialValue
  );
  return sum;
};

/*
SAMPLE TESTS

describe("Tests", () => {
  it("test", () => {
Test.assertEquals(sum([]), 0);
Test.assertEquals(sum([1, 5.2, 4, 0, -1]), 9.2);
  });
});

*/