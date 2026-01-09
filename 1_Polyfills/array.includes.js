if (!Array.prototype.includes) {
  Array.prototype.includes = function (valueToSearch) {
    let array = this; // refer to current object from function is being called
    for (let i = 0; i < array.length; i++) {
      if (array[i] === valueToSearch) {
        return "yes";
      }
    }
    return "no";
  };
}

const arr = ["A", "B", "C", "D"];

const isPresent = arr.includes("C");

console.log(isPresent);
