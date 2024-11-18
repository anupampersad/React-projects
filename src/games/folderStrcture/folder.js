export const folderConfig = {
  type: "folder",
  name: "Parent",
  content: [
    {
      type: "folder",
      name: "Child1",
      content: [],
    },
    {
      type: "folder",
      name: "Child2",
      content: [
        {
          type: "folder",
          name: "Child2-1",

          content: [
            {
              type: "file",
              name: "Child2-1-1",
              extension: "jpeg",
            },
          ],
        },
        {
          type: "file",
          name: "Child2-2",
          extension: "jpeg",
        },
        {
          type: "file",
          name: "Child2-2",
          extension: "txt",
        },
      ],
    },
    {
      type: "folder",
      name: "Child3",
      content: [
        {
          type: "file",
          name: "Child3-1",
          extension: "txt",
        },
      ],
    },
  ],
};
