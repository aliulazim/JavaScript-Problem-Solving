let speech = "I am aliul azim. I am a muslim. I love Allah and Rashul shalelahu walahe sallam.";

let count = 0;

for (let i = 0; i < speech.length; i++) {
    const char = speech[i];

    if (char == " " && speech[i - 1] != " ") {
        count++;
    }
    
}
count++;
console.log(count);