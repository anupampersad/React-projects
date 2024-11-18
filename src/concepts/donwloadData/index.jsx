// https://www.youtube.com/watch?v=WqBs_msUOXY

import React, { useState } from "react";

const Download = () => {
  const blob = new Blob(["This is text to download"], { type: "text/plain" });
  const url = URL.createObjectURL(blob);

  const [imageSrc,setImageSrc] = useState(null)


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <a href={url} download={"download.txt"}>
        Download data
      </a>

      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => {
          setImageSrc(URL.createObjectURL(e.target.files[0]))
        }}
      />

      {imageSrc && <img src={imageSrc}/>}


    </div>
  );
};

export default Download;
