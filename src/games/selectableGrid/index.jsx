import React from "react";
import { Wrapper, GridContainer, Tab } from "./styles";
import { useSelectableGrid } from "./hooks/useSelectableGrid";

function SelectableGrid() {
  const {
    grid,
    setEnterTab,
    setExitTab,
    selectedTabs,
    setSelectedTabs,
    isMouseDown,
    setIsMouseDown,
  } = useSelectableGrid({ gridSize: 3 });
  return (
    <Wrapper>
      <GridContainer>
        {grid.map((t) => {
          return (
            <Tab
              onMouseDown={() => {
                setIsMouseDown(true);
                setEnterTab(t);
              }}
              onMouseUp={() => {
                setIsMouseDown(false);
                setSelectedTabs([])
                setEnterTab()
                setExitTab()
              }}
              onMouseEnter={() => {
                if (isMouseDown) {
                  setExitTab(t);
                }
              }}
              isSelected={selectedTabs?.includes(t)}
            >
              {t}
            </Tab>
          );
        })}
      </GridContainer>
    </Wrapper>
  );
}

export default SelectableGrid;
