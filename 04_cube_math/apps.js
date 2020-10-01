/* 
Write a function called "cube". 

Given a number, "cube" returns the cube of that number.  

var output = cube(3);
console.log(output); // --> 27

*/


// 1St way

function cube(num) {
    return Math.pow(num, 3);  // Here 3 is Power
}
let output = cube(3);  //  3 cubed = 3 = 3 × 3 × 3 = 27
console.log(output);


// 2nd way

/*
function cube(num) {
    return num * num * num;
}

let output = cube(3);
console.log(output);

*/



// 3rd way

/*
    function cube() {
    return 3 3 3;
    }
    
    console.log(cube());
*/


// 4th way

/*

function cube(n) {
    return  n ** 3;
}
let output = cube(3);
console.log(output);

*/