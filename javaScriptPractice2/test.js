import { pie, getArea, getCircumference, getVolume } from './mathUtil.js';

console.log(`The PI is ${pie}`);

const circumferencE = getCircumference(1);
console.log(`Circumference is ${circumferencE.toFixed(3)}`); //toFixed rounds to 3 decimal places

const getTheArea = getArea(3);
console.log(`${getTheArea.toFixed(2)}`);//to 2 decimal places

const volume = getVolume(1.56);
console.log(`${volume.toFixed(2)}`);