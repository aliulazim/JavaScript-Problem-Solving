function reverseString(str) {
    reverse = "";
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        reverse = char + reverse;

        
    }
    return reverse;
}

let statement = "Hello Alen bhai brother";
const forAlean = reverseString(statement);
console.log(forAlean);
