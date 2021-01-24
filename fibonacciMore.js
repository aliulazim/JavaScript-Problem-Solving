function fibonacciItarative(num) {
    fibo = [1, 1];
    for (let i = 2; i <= num; i++) {
        let  nextFebo = fibo[i - 1] + fibo[i - 2];
        fibo.push(nextFebo);
        
    }
    return fibo;

}

const result = fibonacciItarative(10);
console.log(result);




function fibonacciRecursive(num) {
    // Stoping condition
    if (num == 0) {
        return [1];
    }
    else if (num == 1) {
        return [1, 1];
    }
    // recursive call
    let fibo = fibonacciRecursive(num - 1);
    let nextFibo = fibo[num - 1] + fibo[num - 2];
    fibo.push(nextFibo);
    return fibo;
}

const result1 = fibonacciRecursive(11);
console.log(result1);
