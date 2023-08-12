"use strict";
function sayHi2(name) {
    if (!name) {
        return `Hello TypeScript`;
    }
    if (typeof name == "string") {
        return `Hello ${name}`;
    }
    throw new Error("uncorrect Data");
}
function totally(a, b) {
    if (typeof a == "number" && typeof b == "number") {
        return a + b;
    }
    if (typeof a == "string" && typeof b == "string") {
        return parseInt(a) + parseInt(b);
    }
    throw new Error("uncorrect Data");
}
console.log(totally(100, 200));
console.log(totally("100", "200"));
