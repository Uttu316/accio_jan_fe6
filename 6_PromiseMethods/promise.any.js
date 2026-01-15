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
const p = Promise.any([p1, p2, p3]);

p.then((output) => {
  console.log(output);
}).catch((err) => {
  console.log("Error", err);
});

const api = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data");
    }, 3000);
  });
}; //3s Data

const timer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 2000);
  });
}; // 2s 0

const pw = Promise.any([api(), timer()]);

pw.then((v) => {
  if (v === 0) {
    console.log("Internet slow");
  } else {
    console.log(v);
  }
});
