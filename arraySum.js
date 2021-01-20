

function getArraySum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        
    }
    return sum;
}
let numbers = [65,55, 35, 99, 87, 25, 99, 23];
const result = getArraySum(numbers);
console.log("Total of the Number = ", result);

const total = getArraySum([65,55, 35, 25, 99, 23]);
console.log("Total of the Number = ", total);
