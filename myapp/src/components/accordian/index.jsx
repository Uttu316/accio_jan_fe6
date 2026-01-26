import { useState } from "react";
import styles from "./accordian.module.css";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const items = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "Why use React?", content: "React makes it painless to create interactive UIs and efficiently update components." },
    { title: "How does it work?", content: "React uses a virtual DOM to optimize rendering and provide a declarative way to build components." }
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Accordian</h2>
      <div className={styles.accordionWrapper}>
        {items.map((item, index) => (
          <div key={index} className={styles.item}>
            <button
              className={styles.itemHeader}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              <h3 className={styles.title}>{item.title}</h3>
              <span className={styles.button}>
                {activeIndex === index ? "Collapse" : "Expand"}
              </span>
            </button>
            {activeIndex === index && (
              <div className={styles.content}>
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordian;
