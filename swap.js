// Varible man swap with temp varible

let a = 5;
let b = 7;
console.log("Before swap: a =", a, "b =", b);
let temp = a;
a = b;
b = temp;
console.log("After swap: a =", a, "b =", b);


// Varible man swap with out temp varible

let x = 5;
let y = 7;
console.log("Before swap: X =", x, "Y =", y);
x = x + y;
y = x - y;
x = x - y;
console.log("After swap: X =", x, "Y =", y);


// JavaScript progaming formola use

let p = 5;
let q = 7;
console.log("Before swap: P =", p, "Q =", q);
[p, q] = [q, p];
console.log("After swap: P =", p, "Q =", q);