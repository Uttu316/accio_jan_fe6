var x = 10;

console.log("A");

function abc(y, callback) {
  let z = y + x;

  console.log("B");
  let m = callback(z, y) + callback(z, x);
  console.log("C");
  return m;
}

function sum(a, b) {
  return a + b;
}

const o = abc(4, sum);
console.log("Done", o);

//output: A B C DONE:42
