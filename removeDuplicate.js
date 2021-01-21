let names = ['John', 'Paul', 'George', 'Ringo', 'John', 'George'];
let uniqueNames = [];

for (let i = 0; i < names.length; i++) {
    const element = names[i];
    let index = uniqueNames.indexOf(element);

    if (index == -1) {
        uniqueNames.push(element);
    }
}

console.log(uniqueNames);

/*
    function add(a, b){

    return a + b;

}

console.log(add("adam" + "eve"));
*/