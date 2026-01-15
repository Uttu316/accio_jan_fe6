const api = (timer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Hello" + timer);
    }, timer);
  });
};

async function getData(timer) {
  console.log("Fetching Data");

  const res = await api(timer);
  console.log(res);
}

getData(5000);
getData(3000);
console.log("Wait");
