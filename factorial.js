// Factorial Number

// 10! = 1*2*3*4*5*6*7*8*9*10
// Use for loop
// let factorial = 1;

// for(let i =1; i <= 10; i++){
//     factorial = factorial * i;
//     console.log(i, factorial);
// }

function factorialNum(num) {
    let factorial = 1;
    for(let i = 1; i <= num; i++){
        factorial = factorial * i;
    
    }
    return factorial;
}

let result = factorialNum(6);
console.log(result);