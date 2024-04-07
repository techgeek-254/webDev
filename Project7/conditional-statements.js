const myName = 'john';
if (myName === 'John' || myName === 'Mary' || myName === 'john' || myName === 'mary') {
    console.log('Hello ' + myName);
}
else {
    alert('No Such User !');
}

//if else examples
let x=15;
let y=10;
let sumTotal=x+y;
if(sumTotal<=20){
    console.log('Not Possible !')
} else if(sumTotal>20){
    console.log('Excellent !')
}

//for loop
// for (let i = 0; i < 10; i = i + 4) {
//     console.log(i);
// }

for(let x=10; x<100; x=x+50){
    console.log(x);
}


//for of works best for ARRAYS
const users = ['Mary', 'John', 'Mark'];
for (const names of users) {
    console.log(names);
}



//for in loop works best with OBJECTS
const loggedInUser = {
    name: 'John',
    age: 34,
    isAdmin: true,
};

for (const properties in loggedInUser) {
    console.log(properties);
    console.log(loggedInUser[properties]);
}

//while loop
let isFinished = false;
while(!isFinished){
    isFinished=confirm('Do you want to Quit?');
}
console.log('Done !');

