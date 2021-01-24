// function isPrime(n) {
//     for (let i = 2; i < n; i++) {
//         console.log(i, n % i);
//         if (n % i == 0) {
//             return " Not a Prime Number!";
            
//         }
        
//     }
//     return "Your Number is Prime ";
// }

// const result = isPrime(61);
// console.log(result);


//Exam result
var number = 99;
var examResult;
if( 0 <= number || number <= 32){
    examResult = "You are fail!!";
} else if ( 33 <= number || number <= 39 ){
    examResult = "You got D";
} else if ( 40 <= number || number <= 49 ){
    examResult = "You got C";
} else if ( 50 <= number || number <= 59 ){
    examResult = "You got B";
} else if ( 60 <= number || number <= 69 ){
    examResult = "You got A-";
} else if ( 70 <= number || number <= 79 ){
    examResult = "You got A";
} else if ( 80 <= number || number <= 100 ){
    examResult = "You got A+";
} else{
    examResult ="Invalid Number!!";
}
console.log(examResult);