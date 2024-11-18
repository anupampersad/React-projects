import styled from "styled-components";

export const Wrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: colunn;
  background: aliceblue;
  justify-content: center;
  align-items: center;
`;

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`;

export const Tab = styled.div`
  height: 100px;
  width: 100px;
  border: 1px solid black;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.isSelected ? "green" : "white"}
`;
