// no Type
const person1 = {
  name: "kakha",
  age: 20,
};

// Type
const person2: { name: string; age: number } = { name: "jaja", age: 33 };
const position: { lat: number; long: number } = { lat: 30, long: 50 };

console.log(position.lat);

// Function Object
function showDetail(data: { name: string; age: number }) {
  console.log(`Fname = ${data.name} , age = ${data.age}`);
}

// showDetail(person2);

// or ArrowFunction Object Return
const randomPosition = (): { lat: number; long: number } => {
  return {
    lat: Math.random(),
    long: Math.random(),
  };
};

console.log(randomPosition());
