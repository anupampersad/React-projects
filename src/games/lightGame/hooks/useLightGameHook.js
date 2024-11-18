import { useEffect, useState } from "react";

export const useLightGameHook = ({ gridSize }) => {
  const [grid, setGrid] = useState([]);
  const [selectionOrderSequence, setSelectionOrderSequence] = useState([]);
  const [gameStarted, setGameStarted] = useState(false);

  useEffect(() => {
    const gridElements = gridSize * gridSize;
    const gridArr = [...Array(gridElements).keys()].map((e) => {
      return { index: e, isSelected: false };
    });
    setGrid(gridArr);
  }, [gridSize]);

  useEffect(() => {
    if (gameStarted && selectionOrderSequence.length === grid?.length) {
      const selectionOrderSeq = [...selectionOrderSequence];
      let gridRef = [...grid];
      const resetGameSequentially = setInterval(() => {
        if (selectionOrderSeq.length > 0) {
          const tempGrid = gridRef.map((t) => {
            if (t?.index === selectionOrderSeq[selectionOrderSeq.length - 1]) {
              return { ...t, isSelected: false };
            }
            return t;
          });
          gridRef = tempGrid;
          selectionOrderSeq.pop();
          setGrid(tempGrid);
        } else {
          clearInterval(resetGameSequentially);
        }
      }, 500);
    }
  }, [gameStarted, selectionOrderSequence.length]);

  console.log(selectionOrderSequence);

  return {
    grid,
    setGrid,
    setSelectionOrderSequence,
    gameStarted,
    setGameStarted,
  };
};
