console.log("A");

function getData(username, onSuccess, onFailure) {
  console.log("B");

  //closure
  setTimeout(() => {
    console.log("C");
    if (username === "ABC") {
      onSuccess({
        name: "abc",
        id: "213213",
        age: 20,
      });
    } else {
      onFailure("opps");
    }
    console.log("E");
  }, 2000);

  console.log("D");
}

getData(
  "ABC",
  (user) => {
    console.log(user);
  },
  (err) => {
    console.log(err);
  }
);
console.log("F");

//Output: A B D F C userObj E
