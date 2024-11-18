import { useEffect, useState } from "react";

export const useSelectableGrid = ({ gridSize }) => {
  const [grid, setGrid] = useState([]);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [enterTab, setEnterTab] = useState();
  const [exitTab, setExitTab] = useState();
  const [selectedTabs, setSelectedTabs] = useState([]);

  useEffect(() => {
    const gridElements = gridSize * gridSize;
    const gridArr = [...Array(gridElements).keys()];
    setGrid(gridArr);
  }, [gridSize]);

  useEffect(() => {
    const startingTab = enterTab > exitTab ? exitTab : enterTab;
    const lastTab = enterTab > exitTab ? enterTab : exitTab;

    const tempArray = [];
    for (let i = startingTab; i <= lastTab; i++) {
      tempArray.push(i);
    }
    setSelectedTabs(tempArray);
  }, [enterTab, exitTab]);

  return {
    grid,
    isMouseDown,
    setIsMouseDown,
    enterTab,
    setEnterTab,
    exitTab,
    selectedTabs,
    setSelectedTabs,
    setExitTab,
  };
};
