"use strict";
// any $ unknown
// function formatNumber(num: any) {
//   return num.toFixed(2);
// }
// let money: any = "50.1234";
// money = 50.1234;
// console.log(formatNumber(money));
function formatNumber(num) {
    return num.toFixed(2);
}
let money = "50.12345";
money = 50.1234;
if (typeof money === "number") {
    console.log(formatNumber(money));
}
