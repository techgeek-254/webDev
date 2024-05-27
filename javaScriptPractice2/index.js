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
//arrow function to square and cube an array elements

const arrNumbers = [1,2,3,4,5,6,7];
const arrSquares = arrNumbers.map((element) => Math.pow(element, 2));
const arrCubes = arrNumbers.map((element) => Math.pow(element, 3));
console.log(arrSquares);
console.log(arrCubes);

/*********************************************** */
