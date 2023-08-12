// Example 1
function sayHi2(): string;

function sayHi2(name: string): string;

function sayHi2(name?: unknown): unknown {
  if (!name) {
    return `Hello TypeScript`;
  }
  if (typeof name == "string") {
    return `Hello ${name}`;
  }
  throw new Error("uncorrect Data");
}

// console.log(sayHi2());
// console.log(sayHi2("uuhaju"));

// Example 2
function totally(a: number, b: number): number;

function totally(a: string, b: string): string;

function totally(a: unknown, b: unknown): unknown {
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
