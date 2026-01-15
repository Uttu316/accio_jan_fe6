console.log("A");
const getData = () => {
  console.log("B");
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("C");
      resolve(2);
    }, 2000);
  });
};
getData()
  .then((v) => {
    console.log(v);
    return v * 2;
  })
  .then((v) => {
    return v + 2;
  })
  .then((v) => {
    console.log(v);
  })
  .catch((e) => {
    console.log("Errror", e);
  });
console.log("D");

//Output: A, B, D, C 2, 6
