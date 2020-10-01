/* 
 preImmersive-buildingBlocksMastery-033-isPersonOldEnoughToDrinkAndDrive
Write a function called “isPersonOldEnoughToDrinkAndDrive”.

Given a “person” object, that contains an “age” property, “isPersonOldEnoughToDrinkAndDrive” returns whether the given person is old enough to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.

var obj = {
  age: 45
};
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); --> false


input: object (with age property)
output: boolean (returns whether the given person is old enough to legally drink and drive in the US)

*/


// function isPersonOldEnoughToDrinkAndDrive(person) {
//   if (person) {
//     return false;
//   }
//   let Abdullah = {
//     age: 28
//   }
//   let Rahim = {
//     age: 18
//   }
// }
// let output = isPersonOldEnoughToDrinkAndDrive("Rahim");
// console.log(output);



let obj = {
  age: 44
};  

function isPersonOldEnoughToDrinkAndDrive(person) {
  
  if (person.age >= 21 && person.age >= 16 && false) { // always illegal to drink and drive
    return true + ", illegal to drink and drive."
  } else{
    return false + ", illegal to drink and drive."
  }
  
}

var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false