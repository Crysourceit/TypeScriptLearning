// if..else and we can use ternary Op
let amout: number = 55;
let result: string;

// if (amout % 2 == 0) {
//   result = "even number";
// } else {
//   result = "odd number";
// }

// ternary
result = amout % 2 == 0 ? "even number" : "odd number";

console.log(`result = ${result}`);

// Switch..Case
let service: number = 1;
let result2: string;

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

// Loop

for (let count: number = 1; count <= 10; count++) {
  console.log(count);
}

// Array
let users: string[] = ["kong", "boy", "big"];

for (let i = 0; i < users.length; i++) {
  console.log(users[i]);
}

users.forEach((ele) => {
  console.log(ele);
});
