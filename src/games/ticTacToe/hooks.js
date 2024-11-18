import { useEffect, useMemo, useState } from "react";

export const useGenerateBoard = (gridSize) => {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    let initialBoard = [];

    const totalTabs = gridSize * gridSize;

    for (let i = 0; i < totalTabs; i++) {
      initialBoard[i] = {
        value: "",
        index: i,
        isInteracted: false,
      };
    }

    setBoard([...initialBoard]);
  }, [gridSize]);

  const winningPattern = useMemo(() => {
    let array = [];
    for (let i = 0; i <= gridSize; i++) {
      if (i < gridSize) {
        const localArr = [];
        const localArr2 = [];
        for (let j = 0; j < gridSize; j++) {
          localArr.push(gridSize * i + j);
          localArr2.push(i + j * gridSize);
        }
        array.push(localArr);
        array.push(localArr2);
      }

      if (i === 0) {
        const localArr = [];
        for (let j = 0; j < gridSize; j++) {
          localArr.push(j * gridSize + j);
        }
        array.push(localArr);
      }

      if (i === gridSize) {
        const localArr = [];
        for (let j = 0; j < gridSize; j++) {
          localArr.push(i + j * gridSize - j - 1);
        }
        array.push(localArr);
      }
    }

    return array;
  }, [gridSize]);

  useEffect(() => {
    // const winningPattern = [
    //   [0, 1, 2],
    //   [3, 4, 5],
    //   [6, 7, 8],
    //   //
    //   [0, 3, 6],
    //   [1, 4, 7],
    //   [2, 5, 8],
    //   //
    //   [0, 4, 8],
    //   [2, 4, 6],
    // ];

    let matchFound = false;

    for (let i = 0; i < winningPattern.length; i++) {
      //   const [a, b, c] = winningPattern[i];
      //   if (
      //     board[a]?.value &&
      //     board[b]?.value &&
      //     board[c]?.value &&
      //     board[a]?.value === board[b]?.value &&
      //     board[b]?.value === board[c]?.value
      //   ) {
      //     console.log(`${board[a]?.value} wins`);
      //   }

      const currentArr = winningPattern[i];
      let isMatch = true;
      for (let j = 0; j < currentArr.length - 1; j++) {
        if (
          !board[currentArr[j]]?.value ||
          !board[currentArr[j + 1]]?.value ||
          board[currentArr[j]]?.value !== board[currentArr[j + 1]]?.value
        ) {
          isMatch = false;
        }
      }

      if (isMatch) {
        matchFound = true;
        const winningPlayer = board[winningPattern[i][0]].value;
        console.log(`${winningPlayer} wins`);
      }
    }
  }, [gridSize, board]);

  return {
    board,
    setBoard,
  };
};
