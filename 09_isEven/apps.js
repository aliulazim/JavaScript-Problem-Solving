/* 
 Write a function called “isEven”.
Given a number, “isEven” returns whether it is even.

*/


function isEven(num) {
  if (num % 2 === 0) {
    return true + " , It's a Even Number";
  }
  else{
    return false + " , It's not a Even Number";
  }
}
let output = isEven(44);
console.log(output);
