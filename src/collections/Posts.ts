import { CollectionConfig } from "payload/types";

const Posts: CollectionConfig = {
  slug: "posts",
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
    },
    {
      name: "isAvalible",
      type: "checkbox",
    },
  ],
  admin: {
    useAsTitle: "title",

    preview: (doc, { locale }) => {
      if (doc?.slug) {
        return `https://bigbird.com/preview/posts/${doc.slug}?locale=${locale}`;
      }

      return null;
    },
  },
};

export default Posts;
