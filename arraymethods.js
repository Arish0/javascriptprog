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
numbers.unshift(1);
console.log(numbers);

//Cuts the value defined in index and displays the remaining
let sequence = [9,8,7,6,5,4,3,2,1]
sequence.splice(1,6);
console.log(sequence);
console.log(sequence.splice(2,0,'10'))
console.log(sequence);

//sliced value based on index was displayed as output
let marks = [40,50,30,20,60,90,80]
console.log(marks.slice(1,4))

//joining the array(Displaying only the array indexes)
let collections1 = ["Champer","MAXX","Dost"]
let collection2 = ["Xuv 300","Boler0","Alto"]

let joinedcollection = [collections1,collection2]
console.log(joinedcollection);

//joining and displaying the values in the array
JoinedArr = collections1.concat(collection2)
console.log(JoinedArr)

let joined =[...collections1,...collection2]
console.log(joined);

//map function
let numbers1 =[1,2,3,4,5,6,7,8]
let map1 = numbers1.map(num => num * num);
console.log(map1);


//Reduce method in array
let numbers3 =[10,20,340,40,50,60,70]
let sum = numbers3.reduce((callback,num)=> callback + num,0);
console.log(sum);

//Filter method array
let numbers4 =[23,578,89,56,45,3,54,7,8,79,8]
let filter = numbers4.filter(num => num > 50);
console.log(filter);










