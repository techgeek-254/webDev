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
    console.log(`You are NOT a Students !!!!`)
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

document.getElementById("mySubmit").onclick = function () {
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

//IF STATEMENTS e.g 1
let ageS = 5;
let hasLicense = false;

if(ageS >=18){
    console.log(`You are old enough to Drive`);

    if(hasLicense){
        console.log(`You have your license`);
    }
    else{
        console.log(`But you DONT have a license`);
    }
}
else {
    console.log(`You must be 18+ to have a license`);
}