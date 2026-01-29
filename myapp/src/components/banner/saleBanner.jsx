import { useEffect, useState } from "react";
let y = 0;
const SaleBanner = () => {
  const [x, setx] = useState(0);

  //useeffect with empty array will call only one time
  useEffect(() => {
    //setup function
    console.log("I am mounted");

    return () => {
      //cleanup function
      console.log("I am unmounted");
    };
  }, []); //dependecy array

  useEffect(() => {
    console.log("x variable updated", x);

    return () => {
      //cleanup of last value
    };
  }, [x]);
  useEffect(() => {
    console.log("y variable updated", y);
  }, [y]);
  return (
    <div>
      <h3>Sale Banner</h3>
      <button onClick={() => setx(x + 5)}>Sale Percent {x}%</button>
      <button onClick={() => (y = y + 2)}>Double the Y {y}</button>
    </div>
  );
};
export default SaleBanner;
