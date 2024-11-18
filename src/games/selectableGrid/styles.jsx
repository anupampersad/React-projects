import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

export const Tab = styled.div`
  width: 50px;
  height: 50px;
  box-sizing: border-box;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${props => props.isSelected ? "azure": "white"};
  user-select: none;
`;
