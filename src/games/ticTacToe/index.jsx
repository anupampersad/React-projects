import React, { useState } from "react";
import { Wrapper } from "./styles";
import Board from "./components/board";

const TicTacToe = () => {
  const gridSize = 4;

  return (
    <Wrapper>
      <Board gridSize={gridSize} />
    </Wrapper>
  );
};

export default TicTacToe;
