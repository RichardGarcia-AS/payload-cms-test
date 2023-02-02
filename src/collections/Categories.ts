import { CollectionConfig } from "payload/types";

const Categories: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
    disableDuplicate: true,
    preview: (doc, options) => {
      if (doc?.slug) {
        return `https://bigbird.com/preview/posts/${doc.slug}?locale=${options.locale}`;
      }

      return null;
    },
  },
  labels: {
    singular: "category",
    plural: "categories",
  },
  access: {
    read: () => true,
    create: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
      defaultValue: ({ user, location }) => {
        return `Titulo de ${JSON.stringify(user.email)}`;
      },
    },
    {
      name: "showDescription",
      type: "checkbox",
      defaultValue: true,
    },
    {
      name: "description",
      type: "richText",
      required: true,
      admin: {
        placeholder: "Test placeholder",
        condition: (data, subligData): boolean => {
          console.log(data.showDescription);
          if (data.showDescription) return true;
          return false;
        },
      },
    },
  ],
};

export default Categories;
