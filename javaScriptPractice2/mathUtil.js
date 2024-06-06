// ES6 modules ----> imprting and exporting in JS

export const pie = 3.14;

export  function getCircumference(radius) {
    return 2 * pie * radius;
}

export  function getArea(radius) {
    return pie * radius * radius;
}

export function getVolume(radius) {
    return 4 * pie * radius * radius;
}