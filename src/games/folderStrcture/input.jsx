import React, { useState } from "react";

const Input = ({ onAdd }) => {
  const [folderName, setFolderName] = useState("");
  const [type, setType] = useState("");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start"
      }}
    >
      <input
        placeholder="Enter folder name"
        onChange={e => {
          setFolderName(e?.target?.value);
        }}
      />
      <div>
        <input
          type="radio"
          name="folder"
          id="folder"
          onClick={() => {
            setType("folder");
          }}
        />
        <label>Folder</label>
        <input
          type="radio"
          placeholder="File"
          onClick={() => {
            setType("file");
          }}
        />
        <label>File</label>
      </div>
      <button
        onClick={() => {
          onAdd({
            type,
            folderName
          });
        }}
      >
        Add
      </button>
    </div>
  );
};

export default Input;
