import styled from "styled-components";

export const Wrapper = styled.div`
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(${props => props.gridSize}, 1fr);
  grid-gap: 1rem;
`

export const Tab = styled.div`
  box-sizing: border-box;
  border: 1px solid black;
  height: 100px;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${props => props.isSelected ? "#d6ccc2" : "#f5ebe0" };
  cursor: pointer;
`