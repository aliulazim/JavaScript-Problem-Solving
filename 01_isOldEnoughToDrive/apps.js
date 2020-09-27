/* 
Write a function called "isOldEnoughToDrive". 

Given a number, in this case an age, "isOldEnoughToDrive" returns whether a person of this given age is old enough to legally drive in the Bangladesh. Notes:* 

The legal driving age in the Bangladesh is 18.  

var output = isOldEnoughToDrive(22);

console.log(output); // --> true

*/


function isOldEnoughToDrive(age) {
    // write code here
    if(age >= 18)
    {
        return true;
    }
    else
    {
        return false;
    }
    
}

let output = isOldEnoughToDrive(22);
console.log(output);