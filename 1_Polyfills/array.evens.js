if (!Array.prototype.evens) {
  Array.prototype.evens = function () {
    let result = [];
    for (let i = 0; i < this.length; i++) {
      if (this[i] % 2 === 0) {
        result.push(this[i]);
      }
    }
    return result;
  };
}

let arr = [2, 3, 5, 4, 6, 8, 12, 86, 0, -2];

const evens = arr.evens();

console.log(evens);
