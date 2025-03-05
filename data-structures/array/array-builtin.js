/* JavaScript Built-In Array */

// Array Literal Syntax - Default and recommended
let literalArray = [1, 2, 3, 4]
console.log(literalArray);

// Array Constructor - Explicitly create arrays of a certain length
let constructorArray = new Array(1, 2, 3, 4);
console.log(constructorArray);

// Accessing Array Elements
let firstNum = literalArray[0];
let lastNum = literalArray[3];
console.log("First number:" + firstNum);
console.log("Last number:" + lastNum);

// Modifying Arrays
literalArray[2] = 5;
console.log(literalArray);

// Common Array Methods

// push() - Add one or more to the end
literalArray.push(5, 6, 7);
console.log(literalArray);

// pop() - Remove the last element
literalArray.pop;
console.log(literalArray);

// shift() - Removes the first element then returns the removed element
literalArray.shift();
console.log(literalArray);

// unshift() - Adds one or more elements to the beginning then returns the new element(s)
literalArray.unshift(0);
console.log(literalArray);

// slice(start, end) - Return a shallow copy of a portion of the array into a new array object
let firstThree = literalArray.slice(0, 3);
console.log(firstThree);

// splice(start, deleteCount, item1, item2) - Changes the contents of array by removing or replacing existing and/or adding new elements in place

// Removing with splice
console.log('Before removing splice = ' + literalArray);
literalArray.splice(1, 2);
console.log('After removing splice = ' + literalArray);

// Adding with splice
console.log('Before adding splice = ' + literalArray);
literalArray.splice(1, 0, 'A');
console.log('After adding splice = ' + literalArray);

// Replacing with splice
console.log('Before replacement splice = ' + literalArray);
literalArray.splice(2, 1, "B");
console.log('After replacement splice = ' + literalArray);

// Reset array
literalArray.splice(0, literalArray.length);
literalArray.splice(1, 0, 1, 2, 3, 4);
console.log(literalArray);

// Map(callback(element[, index[, array]])[, thisArg]) - Creates a new array populated with results of calling a provided function on every element in the calling array
let numbers = [1, 2, 3, 4];

// Use map to double
let doubledNumbers = numbers.map(function (element) {
    return element * 2;
});

console.log("Before map: " + numbers);
console.log("After map: " + doubledNumbers);

// Using map to transform objects

let people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 }
];

console.log(people);
let names = people.map(person => person.name.toUpperCase());
console.log("After: " + names);

// filter() - Creates a new array with all elements that pass the test implemented by the provided function
let fruits = ["banana", "apple", "kiwi", "orange"]
console.log(fruits);
let shortFruits = fruits.filter(fruit => fruit.length < 5);
console.log(shortFruits);

// Looping over array

// forEach
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});

for (let fruit of fruits) {
    console.log(fruit);
};