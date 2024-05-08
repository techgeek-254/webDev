//console.log(`Hello John`);
let course = "Programming";
let language = "JavaScript";

/*console.log(typeof age);
console.log(typeof name);
console.log(`Welcome ${name}, we see you are ${age} years old !`); */

//DOM
document.getElementById("myH1").innerHTML = `${course} in ${language} `;
document.getElementById("myP").textContent = "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum";

//boolean expression (True or False)
let isStudent = false;
console.log(`This is a student: ${isStudent}`);

// Accepting User Input //

let username;
username = prompt("Whats your username ?");
console.log(username);
document.getElementById("input").textContent = `Welcome, ${username}`;

