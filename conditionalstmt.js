// // if statement
// let Tom = "Cat"
// let Jerry = "Mouse"
// if (Tom === "Cat" && Jerry === "Mouse"){
//     console.log(`Yes, you are Oviously right! Tom is a ${Tom} and jerry is a ${Jerry}`);
// }

//if else ladder
//Getting input from the user
// const readline = require("readline");

// const read = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// const totalmarks =[];

// read.question("Enter your name: ", function(tamil) {
//     console.log("Hello, " + name + "!",totalmarks.push(tamil));
    
//     rl.close();
// });



// read.question("Enter your mark in english:",function(english){
//     totalmarks.push(english);
//     read.close();

// });
// read.question("Enter your marks in Maths:",function(maths){

//     totalmarks.push(maths);
//     read.close();
// });
// read.question("Enter yout marks in science:",function(science){
//     totalmarks.push(science);
//     read.close();

// });
// read.question("Enter your marks in social:",function(social){
//     totalmarks.push(social);
//     console.log("Array values",totalmarks);
//     read.close();

// });

// console.log("Total marks obtained", totalmarks.reduce);


const readline = require("readline");

const read = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const totalmarks = []; // Empty array to store marks

// Recursive function to collect inputs in order
function askQuestion(question, callback) {
    read.question(question, (answer) => {
        totalmarks.push(parseInt(answer)); // Convert string input to number
        callback();
    });
}

// Start the input process
read.question("Enter your name: ", (name) => {
    console.log("Hello, " + name + "!");

    askQuestion("Enter your mark in English: ", () => {
        askQuestion("Enter your marks in Maths: ", () => {
            askQuestion("Enter your marks in Science: ", () => {
                askQuestion("Enter your marks in Social: ", () => {
                    // After collecting all marks, calculate the total
                    const sum = totalmarks.reduce((acc, val) => acc + val, 0);
                    console.log("Array values:", totalmarks);
                    console.log("Total marks obtained:", sum);
                    
                    read.close(); // Close the interface after all inputs
                });
            });
        });
    });
});

