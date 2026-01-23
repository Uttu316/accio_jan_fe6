import { useState } from "react";

const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <h2>Accordian</h2>
      <div>
        {[1, 2, 3].map((item, index) => (
          <div key={index}>
            <h3>{item}</h3>
            {activeIndex === index && (
              <p>This is the content for item {item}.</p>
            )}
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
            >
              {activeIndex === index ? "Collapse" : "Expand"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Accordian;
