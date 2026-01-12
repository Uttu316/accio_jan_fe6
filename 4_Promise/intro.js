console.log("A");
const p = new Promise((resolve, reject) => {
  //sync : Executor
  console.log("B");
  setTimeout(() => {
    console.log("C");
    if (2 < 4) {
      resolve("Hello"); // async
    } else {
      reject("Bye");
    }
    console.log("D");
  }, 3000);
  console.log("E");
});

console.log("F");
p.then((value) => {
  console.log(value);
}).catch((err) => {
  console.log();
});
console.log("G");

//output: A, B, E, F, G , C , D, Hello
