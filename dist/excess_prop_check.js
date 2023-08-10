"use strict";
function showDetail2(data) {
    console.log(`Fname = ${data.name}, age = ${data.age}`);
}
const person = {
    name: "yououo",
    age: 30,
    address: "bkk",
};
showDetail2(person);
// ex_prop_check
// showDetail2({ name: "yououo", age: 30, address: "bkk" });
