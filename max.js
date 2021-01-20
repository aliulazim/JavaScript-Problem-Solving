let business = 958;
let minister = 650;
let sochib = 705;

let max = Math.max(business, minister, sochib);
console.log(max);

/*
if (business > minister) {
    if (business > sochib) {
        console.log(" Business Man is Beger");
    }
    else{
        console.log(" Sochib is Beger");
    }
}
else{
    if (minister > sochib) {
        console.log(" Minister is Beger");
    }
    else{
        console.log(" Sochib is Beger");
    }
}

 */


 // program to find the largest among three numbers


const num1 = 452;
const num2 = 250;
const num3 = 102;
let largest;


if(num1 >= num2 && num1 >= num3) {
    largest = num1;
}
else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
}
else {
    largest = num3;
}


console.log("The largest number is " + largest);