type Employee2 = {
  name: string;
  salary: number;
  department?: string;
};

const employees: Employee2[] = [];
employees.push({ name: "kkih", salary: 50000, department: "programer" });
employees.push({ name: "hoho", salary: 80000 });
employees.push({ name: "ciw", salary: 100000, department: "sale" });

// employees.forEach((e) => {
//   console.log(e);
// });

for (let person of employees) {
  console.log(person);
}
