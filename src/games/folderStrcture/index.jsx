import React, { useState } from "react";
import Input from "./input";

const FolderStructure = ({ config, level }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [showInput, setShowInput] = useState(false);

  const addFolderFile = ({ config, name, type }) => {
    config.content.push({
      name,
      type: type,
      ...(type === "folder" && { content: [] })
    });
    setShowInput(false);
  };

  return (
    <div
      style={{
        marginLeft: `40px`,
        color: config?.type === "folder" ? "blue" : "green",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "8px",
          marginBottom: "8px",
        }}
      >
        <span>{config?.type === "folder" ? "🗂️ " : "📂 "}</span>
        <span>{config?.name}</span>
        {config?.type === "folder" && (
          <span
            style={{ display: "inline" }}
            onClick={() => {
              setCollapsed(!collapsed);
            }}
          >
            {collapsed ? " v" : " ^"}
          </span>
        )}

        {config?.type === "folder" && (
          <div
            onClick={() => {
              setShowInput(!showInput);
            }}
          >
            {showInput ? "➖" : "➕"}
          </div>
        )}
      </div>

      {showInput && (
        <Input
          onAdd={({ type, folderName }) => {
            addFolderFile({
              config,
              type,
              name: folderName,
            });
          }}
        />
      )}

      <div style={{ height: collapsed ? "0px" : "100%" }}>
        {config?.type === "folder" &&
          config?.content.map((c) => {
            return <FolderStructure config={c} level={level + 1} />;
          })}
      </div>
    </div>
  );
};
export default FolderStructure;
