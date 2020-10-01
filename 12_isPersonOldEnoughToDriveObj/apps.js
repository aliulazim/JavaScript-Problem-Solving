/* 

Write a function called “isPersonOldEnoughToDriveObj”.

*/


// One Person

// function isPersonOldEnoughToDriveObj(name, age) {
//   let person = {
//     name: "Abdullah",
//     age: 24
//   };

//   if (person.age >= 18) {
//     return person.name + " is old enough to drive.";
//   }else{
//     return person.name + " is not old enough to drive.";
//   }
// }
// console.log(isPersonOldEnoughToDriveObj());



// Two person 

let person1 = {
  name: "Abdullah",
  age: 24
};

let person2 = {
  name: "Talha Bin Jubair",
  age: 15
};


function isPersonOldEnoughToDriveObj(person) {
  if (person.age >= 18) {
    return person.name + " is old enough to drive.";
  }
  else{
    return person.name + " is not old enough to drive.";
  }
}
console.log(isPersonOldEnoughToDriveObj(person1));
console.log(isPersonOldEnoughToDriveObj(person2));


