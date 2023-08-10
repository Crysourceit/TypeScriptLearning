type Employee = {
  readonly id: number; // Readonly Modifier
  name: string;
  readonly salary: number; // Readonly Modifier
  phone?: string; // Optional Properties use => ?
};

let emp1: Employee = { id: 1, name: "jung", salary: 50000, phone: "065-xxx-xxxx" };
// let emp2: Employee = { id: 2, name: "jojo", salary: 80000, phone: "082-xxx-xxxx" };
// let emp3: Employee = { id: 3, name: "nuut", salary: 60000 };

console.log(emp1);
// console.log(emp2);
// console.log(emp3);
