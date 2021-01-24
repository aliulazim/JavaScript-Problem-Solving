// Recursive  factarial 

// 0! = 1
// 6! = 1*2*3*4*5*6
// 6! = 5!*6
// 6! = (6-1)*6
// n! = (n-1)*n

function factarialrecursive(n) {
    if (n == 0) {
        return 1;
    }
    else{
        return n * factarialrecursive(n-1);
    }
}
let result = factarialrecursive(10);
console.log(result);