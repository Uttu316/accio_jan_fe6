import { useState } from "react";
import styles from "./counter.module.css";

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
    <div className={styles.container}>
      <h2 className={styles.heading}>Counter</h2>
      <h3 id="counter_text" className={styles.countDisplay}>
        {x}
      </h3>
      <div className={styles.buttonGroup}>
        <button className={`${styles.button} ${styles.add}`} onClick={onAdd}>
          Add
        </button>
        <button
          className={`${styles.button} ${styles.minus}`}
          onClick={onMinus}
        >
          Minus
        </button>
      </div>
    </div>
  );
};
export default Counter;
