const p1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("A");
  }, 3000);
});

const p2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("B");
  }, 2000);
});

const p3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("C");
  }, 1500);
});

console.log("Start");
const p = Promise.all([p1, p2, p3]);

p.then((output) => {
  console.log(output);
}).catch((err) => {
  console.log("Error", err);
});
