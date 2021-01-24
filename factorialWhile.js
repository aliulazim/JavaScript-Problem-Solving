// Find factorial number  use while loop

// Just use whilw loop
let i = 1;
let factorial = 1;
while (i <= 10) {
    factorial = factorial * i;
    // console.log(i, factorial);
    i++;
}
console.log(factorial);

// Use Function

function factorialWhile(n) {
    let i = 1;
    let factorial = 1;
    while (i <= n) {
        factorial = factorial *i;
        i++
    }
    return factorial;
}
const result = factorialWhile(10);
console.log(result);