import React from "react";
import { useGetFolderStructure } from "./hooks/useGetFolderStructure";
import FolderStructure from "./componnets/folder";
import { v1 as uuidv1 } from "uuid";

const RenderFolderStructure = () => {
  const { explorerData, setExplorerData } = useGetFolderStructure();

  const addFolderFile = ({ name, id, type }) => {
    const tempExplorerData = {...explorerData}
    if(tempExplorerData.id === id){
      tempExplorerData.content.unshift({
        id: uuidv1(),
        name,
        type,
        ...(type === 'folder' && {
          content:[]
        })
      })
      setExplorerData(tempExplorerData)
      return 
    }else{
      if(tempExplorerData?.type === 'folder' && tempExplorerData?.content?.length > 0){
        for (let i = 0; i < tempExplorerData?.content?.length; i++) {
          addFolderFile({
            name,
            id,
            type
          })
        }
      }
    }
  };

  return (
    <FolderStructure config={explorerData} addFolderFile={addFolderFile} />
  );
};

export default RenderFolderStructure;
