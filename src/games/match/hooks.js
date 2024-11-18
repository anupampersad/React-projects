import { useEffect, useState } from "react";

export const useMatchingGame = ({ gridSize }) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    const tempBoard = [
      ...Array(gridSize).keys(),
      ...Array(gridSize).keys(),
    ].sort(() => {
      return 0.5 - Math.random();
    });
  }, [gridSize]);

  return {
    board,
  };
};
