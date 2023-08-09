// void func
function sayHi() {
  console.log("void func");
}

// sayHi();

// Parameter func
function sayYo(name: string): void {
  console.log(`Hello ${name}`);
}

// sayYo("godTree");
// sayYo("gegege");

// Return func
function getDiscount(): number {
  return 500;
}

// console.log(getDiscount());

// Func Param and Return
function checkNumvber(num: number): string {
  if (num % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
}

function total(a: number, b: number): number {
  return a + b;
}

// console.log(checkNumvber(3));
// console.log(total(100, 200));

// Arrow Function
const checkNumvber2 = (num2: number): string => {
  if (num2 % 2 === 0) {
    return "even number";
  } else {
    return "odd number";
  }
};

function total2(a: number, b: number): number {
  return a + b;
}

// console.log(checkNumvber2(4));
// console.log(total2(700, 500));

// Default Parameter
function showEmployee(name: string, age: number, address: string = "bkk") {
  console.log(`Fname = ${name} , age = ${age} , address = ${address}`);
}

showEmployee("kong", 20, "bkk");
showEmployee("hoho", 33, "nakhon");
showEmployee("nut", 25, "bkk");
showEmployee("back", 35, "bkk");
showEmployee("nam", 21);
