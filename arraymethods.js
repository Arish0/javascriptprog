//Adding new elemrnts to the array
let numbers = [1,2,3,4,5,6,7,8,]
numbers.push(9);
console.log(numbers);

//Deleting an element in an array
numbers.pop(8)
console.log("The poped element",numbers);

//Removes first element of an array
numbers.shift();
console.log(numbers);

//Cuts the value defined in index and displays the remaining
let sequence = [9,8,7,6,5,4,3,2,1]
sequence.splice(1,6);
console.log(sequence);

//sliced value based on index was displayed as output
let marks = [40,50,30,20,60,90,80]
console.log(marks.slice(1,4));

