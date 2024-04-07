//javascript code to display user details
let firstName;
let lastName;
let age;

function userDetails() {
    firstName = "Steve";
    lastName = "Adams";
    age = 35;
    console.log('My name is ' + firstName + ' ' + lastName + ' and am ' + age + ' years old.')
}
userDetails();

//function to Sum up two numbers

function sumNum() {
    let num1 = 15;
    let num2 = 20;
    let sum;
    sum = num1 + num2;
    console.log('The sum of Num1 & Num is ' + sum);
}
sumNum();

//function to calculate area of a rectangle (length x width)

function areaRec() {
    let length = 5;
    let width = 6;
    let area = length * width;
    console.log('The Area of the Rect. is ' + area);
};
areaRec();

// function to convert from Meters to Kilometers

function convertUnits() {
    const num = 1000;
    let unitNum = 10000;
    let conversion = unitNum / num;
    console.log('The result is ' + conversion + ' Kilometers');
};
convertUnits();

//multiplication function

function multiply(){
    let numA, numB, product;
    numA=5;
    numB=6;
    product=numA*numB;
    console.log('The product of ' + numA + ' & ' + numB + ' is ' + product);
}
multiply();

//array function
function myFruits(){
    let fruits = ['Mango', 'Orange', 'Tomato'];
    console.log(fruits);
}
myFruits();

//objects with function in it

    let studentDetails = {
        name: 'John',
        age: 34,
        skills: ['BSC.IT','ITIL','webDev'],
        greet(){
            console.log('Hello ' + studentDetails.name)
        }
    };
    studentDetails.greet();
    console.log(studentDetails);

//length of characters
let name = 'John Mutua';
console.log('The name ' + name + ' has ' + name.length + ' characters in lenghth ');

//capitalize strings
let nameS = 'Jon Doe Adams';
console.log(nameS.toUpperCase());
console.log(nameS.normalize());

console.log(document);
