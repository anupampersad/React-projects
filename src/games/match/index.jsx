import React from "react";
import { useMatchingGame } from "./hooks";

const Match = () => {
  const { board } = useMatchingGame({ gridSize: 5 });
  return <div>Match</div>;
};

export default Match;
