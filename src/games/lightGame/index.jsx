import React from "react";
import { Wrapper, GridContainer, Tab } from "./styles";
import { useLightGameHook } from "./hooks/useLightGameHook";

const LightsGame = () => {
  const {
    grid,
    setGrid,
    setSelectionOrderSequence,
    gameStarted,
    setGameStarted,
  } = useLightGameHook({ gridSize: 3 });

  return (
    <Wrapper>
      <GridContainer>
        {grid.map((t) => {
          return (
            <Tab
              isSelected={t?.isSelected}
              onClick={() => {
                if (!gameStarted) {
                  setGameStarted(true);
                }
                if (!t?.isSelected) {
                  const tempGrid = grid.map((tempT) => {
                    if (tempT?.index === t.index) {
                      return { index: t.index, isSelected: true };
                    }
                    return tempT;
                  });
                  setSelectionOrderSequence((s) => [...s, t.index]);
                  setGrid(tempGrid);
                }
              }}
            >
              {t.index}
            </Tab>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
};

export default LightsGame;
