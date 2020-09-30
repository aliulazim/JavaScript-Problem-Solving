/* 
 Write a function called “isOdd”.
Given a number, “isOdd” returns whether the given number is odd.

*/


function isOdd(num) {
  if (num % 2 !== 0) {
    return true + " , It's a Odd Number";
  }
  else{
    return false + " , It's not a Odd Number";
  }
}
let output = isOdd(45);
console.log(output);
