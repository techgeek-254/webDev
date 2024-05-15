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
console.log(`This is a student: ${isStudent}`);
/******************************************************************************************** */
/* Accepting User Input 

let username;
username = prompt("Whats your username ?");
console.log(username);
document.getElementById("input").textContent = `Welcome, ${username}`;*/

//Accepting User Input using a Function
let username;
document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myInput").value;
    document.getElementById("myH1").textContent=`Hello, ${username}`
}
/***************************************************************************************************** */

//Circumference of a Circle
const PI = 3.14159;
let radius;
let circumference;

document.getElementById("mySubmit").onclick=function (){
    radius = document.getElementById("myInput").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = `The circumference is ${circumference}`;
}
