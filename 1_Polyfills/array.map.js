Array.prototype.Map = function (callback) {
  let result = [];

  for (let i = 0; i < this.length; i++) {
    result.push(callback(this[i], i, this));
  }

  return result;
};

const arr = [1, 2, 3, 4, 5, 6];

console.log(arr.Map((num) => num * 2));
