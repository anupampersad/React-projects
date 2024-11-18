import React, { useState } from "react";
import { phoneNumberRegex } from "../misc";

const CheckRegex = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <input
      value={phoneNumber}
      onChange={(e) => {
        const match = phoneNumberRegex.test(parseInt(e.target.value));
        if (match) {
          setPhoneNumber(e.target.value);
        }
      }}
      type="number"
    />
  );
};

export default CheckRegex;
