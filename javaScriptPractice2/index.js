//console.log(`Hello John`);
let course = "";
let language = "JavaScript";

/*console.log(typeof age);
console.log(typeof name);
console.log(`Welcome ${name}, we see you are ${age} years old !`); */

//DOM
document.getElementById("myH1").innerHTML = `${course} ${language} `;
document.getElementById("myP").textContent = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum";

//boolean expression (True or False)
let isStudent = false;

if (isStudent) {
    console.log(`This is a student: ${isStudent}`)
}
else {
    console.log(`You are NOT a Student !!!!`)
}

/******************************************************************************************** */
/* Accepting User Input 

let username;
username = prompt("Whats your username ?");
console.log(username);
document.getElementById("input").textContent = `Welcome, ${username}`;*/

//Accepting User Input using a Function
let username;
document.getElementById("mySubmit").onclick = function () {
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent = `Hello, ${username}`
}
/***************************************************************************************************** */

//Circumference of a Circle
const PI = 3.14159;
let radius;
let circumference;
//circumference = Math.floor(circumference);
let mySubmit = document.getElementById("mySubmit");

mySubmit.onclick = function () {
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference is ${circumference} cm`;
}
/***************************************************************************************** */
//USING THE MATH FUNCTION

let a = 5;
let b = 90;
let c = 15;

let max = Math.max(a, b, c);
let min = Math.min(a, b, c);

console.log(`The highest value is ${max}`);
console.log(`The lowest value is ${min}`);
/****************************************************************************************** */

//RANDOM NUMBER GENERATOR

let randomNum = Math.floor(Math.random() * 50);
console.log(`Random Number: ${randomNum}`);

/******************************************************************************************* */
//IF STATEMENTS e.g 1

let age = 35;

if (age < 18) {
    console.log("You are NOT allowed to VOTE !")
}
else {
    console.log("You are ALLOWED to Vote !")
}
/*******************************************************************************************/
//IF STATEMENTS e.g 1 with DOM

const myText = document.getElementById("myText");
const mySubmit1 = document.getElementById("mySubmit1");
const myResult = document.getElementById("myResult");
let ageS;

mySubmit1.onclick = function () {
    ageS = myText.value;
    //ageS = Number(ageS);

    if (ageS >= 18) {
        myResult.textContent = `Access Granted`;

    }

    else if (ageS <= 0) {
        myResult.textContent = `Enter a Number !`;
    }
    else if (ageS <= 4) {
        myResult.textContent = `Access Denied !`;
    }
    else if (ageS <= 18) {
        myResult.textContent = `You must be 18+ to enter this site !`;
    }
}
/*******************************************************************************************/

// CHECKED ELEMENTS in JS

const myChecked = document.getElementById("myChecked");
const subscribe = document.getElementById("subscribe");
const myOption1 = document.getElementById("myOption1");
const myOption2 = document.getElementById("myOption2");
const myOption3 = document.getElementById("myOption3");
const checkedBtn = document.getElementById("checkedBtn");
const myCheckedResult = document.getElementById("myCheckedResult");
const myOptionResult = document.getElementById("myOptionResult");
const myReset = document.getElementById("myReset").disabled = true;

checkedBtn.onclick = function () {

    if (myChecked.checked) {
        document.getElementById("myReset").disabled = false;
        myCheckedResult.textContent = `You have SUBSCRIBED`;

    }
    else {
        myCheckedResult.textContent = `You are NOT SUBSCRIBED`;

    }
    if (myOption1.checked) {
        myOptionResult.textContent = `You have Selected PayPal`;
    }
    else if (myOption2.checked) {
        myOptionResult.textContent = `You have Selected M-Pesa`;
    }
    else if (myOption3.checked) {
        myOptionResult.textContent = `You have Selected MasterCard`;
    }

}
/*******************************************************************************************/
// Ternary Operator ---Shortcut for If else statements

let myAge = 35;
let message = myAge >= 18 ? "You are an ADULT" : "You are a MINOR";
console.log(message);
/* example 2*/
let isEmployee = true;
let theMessage = isEmployee ? "You are an Employee" : "You are NOT an Employee !";
console.log(theMessage);

/*******************************************************************************************/
// SWITCH STATEMENTS

let days = 7;

switch (days) {
    case 1:
        console.log("It is Monday");
        break;

    case 2:
        console.log("It is Tuesday");
        break;

    case 3:
        console.log("It is Wednesday");
        break;

    case 4:
        console.log("It is Thursday");
        break;

    case 5:
        console.log("It is Friday");
        break;

    case 6:
        console.log("It is Saturday");
        break;

    case 7:
        console.log("It is Sunday");
        break;

    default:
        console.log(`${days} is not a day of the week`);
}

/*******************************************************************************************/
//STRING METHODS

let userNames = "   John  Mutua";
userNames = userNames.trim(); //removes white spaces before and after a string
userNames = userNames.toLowerCase(); //converts string to lowercase
userNames = userNames.toUpperCase(); //converts string to uppercase
console.log(userNames);

let phoneNumbers = "0700-258-0025";
phoneNumbers = phoneNumbers.replaceAll("-", ""); //removes characters and replaces them
console.log(phoneNumbers);
/*******************************************************************************************/

// WHILE LOOPS e.g.1

//let yourName = "";
//while (yourName === "" || yourName===null) {
//yourName = window.prompt(`Enter your Name`);
//}
//console.log(`Hello ${yourName}`);

// DO WHILE LOOP

// let loggedIn = false;
// let user_Name;
// let passWord;

// while(!loggedIn){
//     user_Name = window.prompt(`Enter your User Name`);
//     passWord = window.prompt(`Enter your Password`);

//     if(user_Name === "jmutua" && passWord ==="pwad9"){
//         loggedIn=true;
//         console.log("You are logged in");
//     }
//     else {
//         console.log("Invalid Credentials, try again");
//     }
// }
/****************** */
// FOR LOOP

for (let i = 0; i <= 10; i++) {
    console.log(i);
}
console.log("Go !!")

//FOR LOOP WITH IF STATEMENT e.g skip numbers using the CONTINUE
for (let q = 1; q <= 10; q++) {
    if (q == 5 || q == 9) {
        continue;
    }
    else {
        console.log(q);
    }
}

//FOR LOOP WITH IF STATEMENT e.g BREAK out of the Loop uisng break
for (m = 0; m <= 10; m++) {
    if (m == 8) {
        break;
    }
    else {
        console.log(`${m}`);
    }
}
/****************** */
// FUNCTIONS

function sumNum() {
    let numA = 10.5;
    let numB = 105.556;
    let sumNums = numA + numB;
    console.log(`The Sum of ${numA} & ${numB} is ${sumNums}`);
}
sumNum();

// Function example 2
function addNum(y, z) {
    return y + z;
}
console.log(addNum(3, 5));

// Check for EVEN numbers function
function isEven(my_Num) {
    return my_Num % 2 === 0 ? true : false;
}
console.log(isEven(63));

// Check for EVEN numbers function example 2
function isEvenNum(num_even) {
    if (num_even % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEvenNum(16));
/************************************************* */
//function to multiply two numbers
function summation() {
    let fig1;
    let fig2;
    let prod = 5.7 * 5;
    prod = Number(prod);
    console.log(`The product is ${prod}`);
}
summation();
/**************************************************** */
// ARRAYS
let matunda = ["mango", "Orange", "apple"];
matunda.push("coconut", "tomatoe"); //add items into the array
matunda.pop(); //removes the last item in the array
matunda.sort().reverse();
console.log(matunda);

/**************************************************** */

// SPREAD OPERATOR  ...
let theNumbers = [0.3, 1, 2, 3, 4, 5, 6, 7, 8, 10];
let maximum = Math.max(...theNumbers);
let minimum = Math.min(...theNumbers);
console.log(`Maximum No. in the array is ${maximum}`);
console.log(`Minimum no. in the array is ${minimum}`);

/*************************************** */
// FUNCTION EXPRESSION
const hello = function () {
    console.log("Hello")
}
hello();

//  SET TIMEOUT for HELLO TO DISPLAY AFTER A SET TIME DURATION

const helloWorld = function () {
    console.log("Hello World 1")
}
setTimeout(helloWorld, 100);

//  SET TIMEOUT for HELLOworld TO DISPLAY AFTER A SET TIME DURATION eg 2
setTimeout(function () {
    console.log("Hello Worlds 2");
}, 200);

/*********************************************** */
//ARROW FUNCTIONS eg. 1

const hello_World = () => console.log("This is an Arrow Function =>");
hello_World();

/*********************************************** */

//ARROW FUNCTIONS eg. 2 with one parameter

const yourName = (yourName) => {
    console.log(`Hello ${yourName}`)
    console.log(`You are welcome`)
};
yourName("John Mutua");
/*********************************************** */

//ARROW FUNCTIONS eg. 3 with two parameters

const yourNames = (fstName, yrAge) => {
    console.log(`Hello ${fstName}`)
    console.log(`You are ${yrAge} years old`)
};
yourNames("John M", 35);

/*********************************************** */
//ARROW FUNCTIONS with set timeout
setTimeout(() => console.log("Arrow function setTimeouts - 5 seconds"), 5000);

/*********************************************** */
//arrow function to square,cube,sum & check for even & odd numbers in an array elements

const arrNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arrSquares = arrNumbers.map((element) => Math.pow(element, 2));
const arrCubes = arrNumbers.map((element) => Math.pow(element, 3));
const arrEvenNum = arrNumbers.filter((element) => element % 2 === 0);
const arrOddNum = arrNumbers.filter((element) => element % 2 !== 0);
const arrTotal = arrNumbers.reduce((accumulator, element) => accumulator + element);

console.log(`The squared array is: ${arrSquares}`);
console.log(`The cubed array: ${arrCubes}`);
console.log(`Even numbers in the array are: ${arrEvenNum}`);
console.log(`Odd numbers in the Array are: ${arrOddNum}`);
console.log(`The total of the Array: ${arrNumbers} = ${arrTotal}`)

/*********************************************** */
// OBJECTS IN js
const thisPerson = {
    personFname: "George",
    personLname: "Adams",
    personAge: 35,
    isemployed: true,
}
console.log(thisPerson.personFname, thisPerson.personLname);
console.log(`${thisPerson.personFname}, ${thisPerson.personLname} is Employed? ${thisPerson.isemployed}`);

/******************************************************************** */

// Adding methods to Objects

const person1 = {
    theNames: "John Maina",
    theMobile: 254728002148,
    theTown: "Nairobi",
    saySomething: function () { console.log("Hey, am new here!") }, //this is the method
    saySomethingElse: () => console.log("Hey am new here.."), //using arrow function works the same
    eatSomething: () => console.log("I love Fish"), //additional method
}
person1.saySomething();
person1.saySomethingElse();
person1.eatSomething();
/******************************************************************** */

// THIS keyword: reference to the object where THIS is used e.g person.name = this.name
// THIS does not work with Arrow function

const person2 = {
    p2Name: "Thomas Andrews",
    p2Age: 30,
    p2Alert: function () { console.log(`Hi, I am ${this.p2Name}`) },
}
person2.p2Alert();

/*********************************************************************** */

// CONSTRUCTORS = special method for defining the properties and methods of objects

function Car(make, model, year, color) {
    this.make = make,
        this.model = model,
        this.year = year,
        this.color = color
}

const car1 = new Car("Ford", "Mustang", 2024, "Red");
const car2 = new Car("Toyota", "Axio", 2016, "White");
const car3 = new Car("Toyota", "Mark X", 2010, "Silver");

console.log(car1.make);
console.log(car1.model);
console.log(car1.year);
console.log(car1.color);
console.log(car1);

console.log(car2.make);
console.log(car2.model);
console.log(car2.year);
console.log(car2.color);
console.log(car2);

console.log(car3.make);
console.log(car3.model);
console.log(car3.year);
console.log(car3.color);
console.log(car3);

/******************************** ************** */

//  CLASSES 

class Product {
    constructor(nameS, priceS) {
        this.nameS = nameS;
        this.priceS = priceS;
    }
    displayProduct() {
        console.log(`Product: ${this.nameS}`);
        console.log(`Price: $${this.priceS.toFixed(2)}`);
    }
    calculateTotal(salesTax) {
        return this.priceS + (this.priceS * salesTax);
    }
}
const salesTax = 0.05;

const product1 = new Product("Shirt", 19.50);
const product2 = new Product("Pants", 20.50);
const product3 = new Product("Jeans", 100);

product1.displayProduct();

const totalS = product1.calculateTotal(salesTax);
console.log(`Total price (with Tax): $${totalS.toFixed(2)}`);

/*************************************************************** */

// STATIC KEYWORD = defines properties or methids belonging to a class rather than object

class User {
    static userCount = 0;

    constructor(user_Name) {
        this.user_Name = user_Name;
        User.userCount++;
    }
}

const user1 = new User("John Mutua");
const user2 = new User("Wesley Brown");
const user3 = new User("Tim Cook");
const user4 = new User("Milly Njagi");

console.log("1: " + user1.user_Name);
console.log("2: " + user2.user_Name);
console.log("3: " + user3.user_Name);
console.log("4: " + user4.user_Name);

console.log("Total Users are: " + User.userCount);

/***************************************************** */
// INHERITANCE

class Animal {
    alive = true;

    eat() {
        console.log(`This ${this.names_} is eating`);
    }

    sleep() {
        console.log(`This ${this.names_} is sleeping.`)
    }
}

class Rabbit extends Animal {
    names_ = "rabbit";
}
class Fish extends Animal {
    names_ = "fish";
}

const rabbit = new Rabbit();

console.log(rabbit.alive);

rabbit.eat();

/****************************************************/
// NESTED OBJECTS

const stud1 = {
    fullNames: "Spongebob Squarepants",
    theAge: 24,
    hobbies: ["Soccer", "baseball"],
    address: {
        street: "Nairobi",
        addresss: "10 Ruiru building",
    }
}
console.log(stud1);
console.log(stud1.fullNames);
console.log(stud1.hobbies[0]);

/****************************************************/
//ARRAY OF OBJECTS

const fruits = [{ name1: "apple", color: "red",calories:15 },
                {name1: "oranges", color:"orange", calories:95},
                {name1: "coconuts", color:"brown", calories:20}];


const orangeFruit = fruits.filter(fruit => fruit.color ==="orange");

console.log(orangeFruit);

/****************************************************/
// SORTING AN ARRAY

let maFruits = ["mango","coconut","pineapple","banana","melon"];

maFruits.sort();
console.log(maFruits);

/****************************************************/
// SORTING NUMBERS

let maNumbers = [0,1,2,5,10,8,9,6,8,7,4];
maNumbers.sort((a,b)=>a-b); //must include this to sort numbers in ascending
maNumbers.sort((a,b)=>b-a); //must include this to sort numbers in descending

console.log(maNumbers);

/****************************************************/
//SORTING AN ARRAY OF OBJECTS BASED ON GIVEN PARAMETERS/VALUES
const people = [{names1:"Mark Masai", ageA:30, gradeS:"F"},
                {names1:"Joyce Omongi", ageA:20, gradeS:"B"},
                {names1:"Reuben Mata", ageA:40, gradeS:"A"},
                {names1:"Steve Masai", ageA:38, gradeS:"D"}]    

people.sort((a,b)=>a.ageA - b.ageA); //lets sort with age
people.sort((a,b)=> a.names1.localeCompare(b.names1)); //sort by names
people.sort((a,b)=> a.gradeS.localeCompare(b.gradeS)); //sort by grades
console.log(people);

/****************************************************/
// DATE & TIME

const date = new Date();
console.log(`The Date and time now is: ${date}`);

// get the current YEAR
const year = date.getFullYear();
console.log(`The current year is: ${year}`);

//get the current month
const month = date.getMonth();
console.log(`The current month is: ${month}`); // Jan is 0, Feb is 1 .... Dec is 11

//get the current Day
const day = date.getDate();
console.log(day);

//ge the current Hour
const hour = date.getHours();
console.log(hour);

//get the minutes
const minutes = date.getMinutes();
console.log(minutes);

//get the seconds
const seconds = date.getSeconds();
console.log(seconds);

//get milliseconds
const milliseconds = date.getMilliseconds();
console.log(milliseconds);

/****************************************************/

/**Random if statetement test */
const dateOfBirth = "10-06-1989";
const uName = "John";
if(dateOfBirth === "14-06-1989"){
console.log(`Happy Birthday, ${uName}`);
}
/****************************************************/

