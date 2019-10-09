import React from "react";
import styled from "styled-components";

const StyledCell = styled.div`
  border: 5px solid black;
  background-color: pink;
  color: white;
  font-weight: 600;
  width: calc(100% / 3);
  height: calc(100% / 3);
  box-sizing: border-box;
  font-size: 100px;
  text-align: center;
`;

const Cell = ({ marker, index, handleClick }) => (
  <StyledCell onClick={handleClick} data-index={index}>
    {marker}
  </StyledCell>
);

export default Cell;
