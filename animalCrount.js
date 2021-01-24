function animalCalculator(depth) {
    animal = 0;

    if (depth <= 10) {
        animal = depth * 50; // First 10 mile animal 50 ta 1 mile;
    }
    else if (depth <= 20) {
        let firstPart = 10 * 50;
        let remaining = depth - 10;
        let secoundPart = remaining * 100; // scound 10 mile (11 - 20) animal 100 ta 1 mile;
        animal = firstPart + secoundPart;

    }
    else{
        let firstPart = 10 * 50;
        let secoundPart = 10 * 100;
        let remaining = depth - 20;
        let thirdPart = remaining * 300;
        animal = firstPart + secoundPart + thirdPart;
    }
    return animal;
}
const count = animalCalculator(33);
console.log(count);