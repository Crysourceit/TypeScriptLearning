// variable normal
const user1: string = "kkong";
const user2: string = "ggge";

//array
const users2: string[] = ["uiux", "ttgg"];

const age: number[] = [15, 55, 32];
// users2.push("yukon");
// users2.push("fofo");
users2.push("noy");

// console.log(users2);
// console.log(age);

//how to access index Array
const users3: string[] = ["juju", "gugu", "kaka"];
// users3[0] = "gogggdd";
// console.log(users3[0]);
// console.log(users3[1]);
// console.log(users3[2]);

for (let i = 0; i < users3.length; i++) {
  //   console.log(`sequence ${i} = ${users3[i]}`);
}

users3.forEach((elm) => {
  console.log(elm);
});
