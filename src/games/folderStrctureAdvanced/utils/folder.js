import { v1 as uuidv1 } from "uuid";

export const folderConfig = {
  type: "folder",
  name: "Parent",
  id: uuidv1(),
  content: [
    {
      type: "folder",
      name: "Child1",
      content: [],
      id: uuidv1(),
    },
    {
      type: "folder",
      name: "Child2",
      content: [
        {
          type: "folder",
          name: "Child2-1",
          id: uuidv1(),
          content: [
            {
              type: "file",
              name: "Child2-1-1",
              extension: "jpeg",
              id: uuidv1(),
            },
          ],
        },
        {
          type: "file",
          name: "Child2-2",
          extension: "jpeg",
          id: uuidv1(),
        },
        {
          type: "file",
          name: "Child2-2",
          extension: "txt",
          id: uuidv1(),
        },
      ],
    },
    {
      type: "folder",
      name: "Child3",
      id: uuidv1(),
      content: [
        {
          type: "file",
          name: "Child3-1",
          extension: "txt",
          id: uuidv1(),
        },
      ],
    },
  ],
};
