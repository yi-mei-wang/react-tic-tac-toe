import React from "react";
import styled from "styled-components";
import Cell from "./Cell";

const StyledBoard = styled.div`
  display: flex;
  width: 70vh;
  height: 70vh;
  flex-wrap: wrap;
  margin: 100px auto 0 auto;
`;

const Board = ({ boardState, handleClick }) => (
  <StyledBoard>
    {boardState.map((cell, index) => (
      <Cell
        marker={cell}
        key={index}
        index={index}
        handleClick={handleClick}
      ></Cell>
    ))}
  </StyledBoard>
);

export default Board;
