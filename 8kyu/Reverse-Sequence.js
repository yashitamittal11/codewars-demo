/**
 * Build a function that returns an array of integers from n to 1 where n>0.
 * Example : n=5 --> [5,4,3,2,1]
 */

//My solution

let array = [];
const reverseSeq = n => {
    while( n > 0 ) {
       array.push( n-- );      
    }
  return array;
};
