"use strict";
// if..else and we can use ternary Op
let amout = 55;
let result;
// if (amout % 2 == 0) {
//   result = "even number";
// } else {
//   result = "odd number";
// }
// ternary
result = amout % 2 == 0 ? "even number" : "odd number";
console.log(`result = ${result}`);
// Switch..Case
let service = 1;
let result2;
switch (service) {
    case 1:
        result2 = "show balance";
        break;
    case 2:
        result2 = "deposits";
        break;
    case 3:
        result2 = "withdraw";
        break;
    default:
        result2 = "Fail order";
        break;
}
console.log(`result = ${result2}`);
