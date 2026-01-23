import { useState } from "react";

const Counter = () => {
  const [x, setX] = useState(0);

  const onAdd = () => {
    setX(x + 1); // pass the value to be updated; asynchronous

    console.log("Add", x);
    // const counterText = document.getElementById("counter_text");
    // counterText.innerText = x;
  };
  const onMinus = () => {
    setX((currX) => currX - 1); // pass the callback function and retun the updated value

    console.log("Minus", x);
    // const counterText = document.getElementById("counter_text");
    // counterText.innerText = x;
  };
  return (
    <div>
      <h2>Counter</h2>
      <h3 id="counter_text">{x} </h3>
      <button onClick={onAdd}>Add</button>
      <button onClick={onMinus}>Minus</button>
    </div>
  );
};
export default Counter;
