"use strict";
// array
const colors = ["red", "green", "blue"];
// old stye
// const red: string = colors[0];
// const green: string = colors[1];
// const blue: string = colors[2];
// Destuc stye
const [red, green, blue] = colors;
console.log(red);
console.log(green);
console.log(blue);
//object
const persons = {
    fname: "long",
    ages: 33,
    address: "phuket",
};
const { fname, ages, address } = persons;
console.log(fname);
console.log(ages);
console.log(address);
