import React, { useState } from "react";
import throttle from "../polyfills/throttle";

const ApplyThrottle = () => {
  const [count, setCount] = useState(0);

  const throttledSetCount = throttle(setCount, 1000);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <button
        onClick={() => {
          throttledSetCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          throttledSetCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ApplyThrottle;
