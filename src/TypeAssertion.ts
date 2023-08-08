let username: unknown;
username = "mahachagi";
// use as
// console.log((username as string).toUpperCase());
// use <>
console.log((<string>username).toUpperCase());
