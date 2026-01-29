import { useState } from "react";
import SaleBanner from "./saleBanner";

const Banner = () => {
  const [currentBanner, setCurrentBanner] = useState("");

  return (
    <div>
      <h2>Banners</h2>
      <div>
        <button
          onClick={() =>
            setCurrentBanner(currentBanner === "SALE" ? "" : "SALE")
          }
        >
          {(currentBanner === "SALE" ? "Hide" : "Show") + "Sale Banner"}
        </button>
      </div>
      {currentBanner === "SALE" && <SaleBanner />}
    </div>
  );
};

export default Banner;
