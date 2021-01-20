let marks = [65,55, 35, 99, 87, 25, 99.5];
let max = marks[0];

for (let i = 0; i < marks.length; i++) {
    const element = marks[i];

    if (element > max) {
        max = element;
    }
    
}
console.log("Highist value is :", max);