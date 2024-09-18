//use strict mode 

"use strict";

//variables - demonstrating different kinds of variables

let greeting: string="Hello World!" // It is common to start a new code with hello world
let girlName: string= "Auður"; // Line number 3 and 4 are both strings, meaning they are text
let girlAge: number= 34; // this is a number
let loveCooking: boolean= false; // this is a boolean to help the code to make decisions

// here we have outputs of string concatenations

console.log(greeting+" My name is "+girlName); // here we use two strings for an output
console.log("I am "+girlAge+" years old"); // here we use a number 

//here I use a boolean to check for a truthful or flase statement

if (loveCooking) {
    console.log("And I hate cooking");
} else {
    console.log("And I love cooking");
} 

// here we have arithmetic operations

let sonAge:number= 1;
let futureSonAge:number= 20;

console.log("Soon my son will be "+sonAge+" years old. That means when he was born I was "+(girlAge-sonAge)+" years old.");
console.log("That means that when he will become "+futureSonAge+" years old I will be "+(girlAge-sonAge+futureSonAge)+" years old. That is crazy");


// here we use array to create a shopping list

let productList = ["banana", "toiletpaper", "milk", "chocolate"];
let numbers = [1,2,3,4];

//here we use the length to count how many items are on our list, and create and output both in our title and our list 

console.log("On our shopping list there are " + productList.length + " items, and here they are in a order of importance, I love "+ productList[3] +" the most");
console.log(numbers[0]+productList[3]);
console.log(numbers[1]+productList[1]);
console.log(numbers[2]+productList[0]);
console.log(numbers[3]+productList[2]);

// we are going to define our type for our object

type person ={
    name: string;
    age?: number;
    job?: string;
    city?: string;
};

// we are going to create an object,

let person = {
    name: "Guðrún",
    age: 34
}; 

// we add properties to the person
person.job = "social worker"
person.animal ="cats";


// delete a property, this creates an error

delete person.age;

// we use output specific information

console.log("My best friend is "+person.name+". She loves "+person.animal+" she has two of them! She works as a "+person.job+" and is so good at it!");
 
// I do get an 4 errors in the terminal but I still do get everything up that I want :)

// here we demonstrate a math method

function add (a, b) {
    return a + b;
  }

let result = add(3000, 1000);


function diff (a, b) {
    return a - b;
  }

let minus = diff(3000, 1000);
console.log(minus);

console.log("The cost of going out for lunch today is about " result " kr, it used to be" minus"kr");

// here we demonstrate the date and time 

const currentDate: Date = new Date();
console.log("Current date and time:", currentDate.toString());