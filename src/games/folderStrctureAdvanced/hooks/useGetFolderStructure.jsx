import { useEffect, useState } from "react";
import { folderConfig } from "../utils/folder";

export const useGetFolderStructure = () => {
  const [explorerData, setExplorerData] = useState(folderConfig);

  useEffect(() => {
    setExplorerData(folderConfig);
  }, []);

  return { explorerData, setExplorerData };
};
