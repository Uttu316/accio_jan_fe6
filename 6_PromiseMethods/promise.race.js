const api = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject("Oops");
    }, 5000);
  });
}; //1s Data

const timer = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, 2000);
  });
}; // 2s 0

const p = Promise.race([api(), timer()]);

console.log("race");
p.then((v) => {
  if (v === 0) {
    console.log("Internet slow");
  } else {
    console.log(v);
  }
}).catch((e) => {
  console.log("Error", e);
});
