import { Block, CollectionConfig } from "payload/types";

const HeroBlock: Block = {
  slug: "Hero",
  fields: [
    {
      name: "heroSlider",
      type: "array",
      fields: [
        {
          name: "title",
          type: "text",
        },
        {
          name: "description",
          type: "richText",
        },
        {
          name: "backgroundImage",
          type: "upload",
          relationTo: "media",
        },
      ],
    },
  ],
};

const PageBuilder: CollectionConfig = {
  slug: "pageBuilder",
  labels: { singular: "Page Builder", plural: "Page Builder" },
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "layouts",
      type: "blocks",
      blocks: [HeroBlock],
    },
  ],
};

export default PageBuilder;
