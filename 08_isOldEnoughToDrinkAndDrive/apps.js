/* 
 Write a function called “isOldEnoughToDrinkAndDrive”.
Given a number, in this case an age, “isOldEnoughToDrinkAndDrive” returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.

*/



function isOldEnoughToDrinkAndDrive(age) {
   
    if (age >= 21) {
      return true;
    } else {
      return false;
    }
    
  }
  console.log (isOldEnoughToDrinkAndDrive(22))