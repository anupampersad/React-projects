import React, { useState } from "react";
import { useGenerateBoard } from "../../hooks";
import { Wrapper, Tab } from "./styles";

const Board = ({ gridSize }) => {
  const { board, setBoard } = useGenerateBoard(gridSize);
  const [tabsFilled, setTabsFilled] = useState(0);

  return (
    <Wrapper gridSize={gridSize}>
      {board?.map((t, i) => {
        return (
          <Tab
            isSelected={t?.isInteracted}
            onClick={() => {
              if (!t?.isInteracted) {
                const tempBoard = [...board];
                tempBoard[i] = {
                  ...t,
                  value: tabsFilled % 2 === 0 ? "X" : "O",
                  isInteracted: true,
                };
                setBoard([...tempBoard]);
                setTabsFilled(tabsFilled + 1);
              }
            }}
          >
            {t?.value}
          </Tab>
        );
      })}
    </Wrapper>
  );
};

export default Board;
