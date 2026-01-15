const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello");
  }, 1000);
});

const p2 = p.then((v) => {
  console.log(v); //Hello
  return v + "A";
});

const p3 = p2.then((v) => {
  console.log(v); //
  return v + "B";
});

p3.then((v) => {
  console.log(v); //
});
