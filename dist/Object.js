"use strict";
// no Type
const person1 = {
    name: "kakha",
    age: 20,
};
// Type
const person2 = { name: "jaja", age: 33 };
const position = { lat: 30, long: 50 };
console.log(position.lat);
// Function Object
function showDetail(data) {
    console.log(`Fname = ${data.name} , age = ${data.age}`);
}
// showDetail(person2);
// or ArrowFunction Object Return
const randomPosition = () => {
    return {
        lat: Math.random(),
        long: Math.random(),
    };
};
console.log(randomPosition());
