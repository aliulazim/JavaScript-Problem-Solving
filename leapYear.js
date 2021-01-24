/**
    const year = 3998;
let remainder = year % 4;

if (remainder == 0) {
    console.log("This year is leapyear");
    
}
else{
    console.log("This year is not a leapyear");
}

//  Use leapyear function

function isLeapYear(year) {
    const remainder = year % 4;

    if (remainder == 0) {
        return "This year is a leapyear" + true;
        
    }
    else{
        return "This year is not a leapyear" + true;
    }
}

const leapyear = isLeapYear(2028);
console.log(leapyear);

 */

// Example 1: Check Leap Year Using if...else

function checkLeapYear(year) {

    //three conditions to find out the leap year
    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}
const leapYear = checkLeapYear(1700);



// Example 2: Check Leap Year Using newDate()


function checkLeapYear(year) {

    const leap = new Date(year, 1, 29).getDate() === 29;
    if (leap) {
        console.log(year + ' is a leap year');
    } else {
        console.log(year + ' is not a leap year');
    }
}

const dateLeapYear = checkLeapYear(1600);