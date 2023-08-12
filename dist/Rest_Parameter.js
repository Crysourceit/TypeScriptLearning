"use strict";
// 1 Normal
function summary(a, b) {
    return a + b;
}
// console.log(summary(110, 202));
// 2 Rest_param
const summath = (...numbers) => {
    return numbers.reduce((result, value) => {
        return result + value;
    }, 0);
};
console.log(summath(100, 200));
console.log(summath(100, 200, 300));
console.log(summath(100, 200, 300, 400));
