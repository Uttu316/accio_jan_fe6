Array.prototype.forEach = null; //assumption

if (!Array.prototype.forEach) {
  Array.prototype.forEach = function (callback) {
    let arr = this;

    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  };
}

const arr = [1, 2, 3, 4, 5, 6, 7];

arr.forEach((item, index, array) => {
  console.log(item);
});
