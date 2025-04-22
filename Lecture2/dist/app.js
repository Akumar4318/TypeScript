"use strict";
let a = 34;
let nameo = "aman";
let firstName = "Abhishek kuamr";
let c;
// union type datatype --> multiple data type
let surname;
surname = 23;
surname = "suraj";
// function return implicitly such as void ,Number , String
//-> return void
const mult = (n, m) => {
    console.log(n * m);
};
//-> return number
const mult1 = (n, m) => {
    return (n * m);
};
//_> reutnr string
const mult2 = (n, m) => {
    console.log(n * m);
    return String(n * m);
};
// we can define at the return -->explecitly
// here we explecitly return a number
const mult3 = (n, m) => {
    console.log(n * m);
    return (n * m);
};
let a1 = "amab";
let func = (a, b) => {
    console.log(a + b);
    return a + b;
};
const sayName = (firstName, lastName) => {
    return firstName + lastName;
};
console.log(sayName("aman", " yadav"));
//SECTION - 
//SECTION -  Array in typeScript
const arr = [1, 2, 3, 5,];
const arr1 = ["aman", "kumar"];
const bool = [true, false];
const arr2 = ["aman", "kumar"];
const arr3 = [1, 2, 4];
const arr4 = [1, 2, 4, "aman"];
//NOTE - A tuple in TypeScript is a fixed-length array where each element has a specific type and position.
// So unlike a regular array (which can hold multiple values of the same type), a tuple lets you define exactly what types are allowed at each position.
let tuple = [1, "aman", 4];
const obj = {
    name: "aman",
    age: 34,
    gender: true
};
const person = {
    name: "suraj",
    age: 23,
};
// extend 
const person1 = {
    name: "abhishek",
    age: 25,
    motherToung: "hindi"
};
console.log(person);
console.log(person1);
