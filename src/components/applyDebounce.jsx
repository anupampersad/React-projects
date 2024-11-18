import React, { useState } from "react";
import debounce from "../polyfills/debounce";

const ApplyDebounce = () => {
  const [count, setCount] = useState(0);

  const debouncedSetCount = debounce(setCount, 1000);

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
          debouncedSetCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        onClick={() => {
          debouncedSetCount(count + 1);
        }}
      >
        +
      </button>
    </div>
  );
};

export default ApplyDebounce;
