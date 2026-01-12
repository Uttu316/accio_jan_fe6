function print(x) {
  console.log("Output: ", x);
}

function sum(a, b, callback) {
  let s = a + b;
  callback(s);
}
function mul(a, b, printOutput) {
  let m = a * b;
  printOutput(m);
}

sum(1, 2, print);
mul(3, 4, print);

// callback: funtion passed as an argument to another function.
//HOF: function that takes other functions as arguments or returns them.
