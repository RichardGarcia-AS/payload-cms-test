import { CollectionConfig } from "payload/types";

const Products: CollectionConfig = {
  slug: "products",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
    },
    {
      name: "location",
      type: "point",
      label: "Location",
    },
    {
      name: "otherPosts",
      type: "relationship",
      relationTo: "posts",
      hasMany: true,
      filterOptions: (options) => {
        console.log(options);
        return { isAvalible: { exists: true } };
      },
    },
    {
      type: "row", // required
      fields: [
        // required
        {
          name: "label",
          type: "text",
          required: true,
          admin: {
            width: "50%",
          },
        },
        {
          name: "value",
          type: "text",
          required: true,
          admin: {
            width: "50%",
          },
        },
      ],
    },
    {
      name: "customerJSON", // required
      type: "json", // required
    },
    {
      name: "time",
      type: "date",
      validate: (validate, otherProps) => {
        console.log(validate, otherProps);
        return "";
      },
      defaultValue: new Date().toString(),
      admin: {
        date: {
          pickerAppearance: "dayOnly",
          displayFormat: "MMM d, yyy",
        },
      },
    },
    {
      name: "pageMeta", // required
      type: "group", // required
      fields: [
        // required
        {
          name: "title",
          type: "text",
          required: true,
          minLength: 20,
          maxLength: 100,
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          minLength: 40,
          maxLength: 160,
        },
      ],
    },
    {
      label: "collapsible",
      type: "collapsible", // required
      fields: [
        // required
        {
          name: "title",
          type: "text",
          required: true,
        },
        {
          name: "someTextField",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "images",
      label: "Image Slider",
      type: "array",
      minRows: 1,
      fields: [
        { name: "title", type: "text" },
        { name: "description", type: "text" },
        { name: "mainImage", type: "upload", relationTo: "media" },
      ],
    },
    {
      name: "selectedFeatures", // required
      type: "select", // required
      hasMany: true,
      admin: {
        isClearable: true,
      },
      options: [
        {
          label: "Metallic Paint",
          value: "metallic_paint",
        },
        {
          label: "Alloy Wheels",
          value: "alloy_wheels",
        },
        {
          label: "Carbon Fiber Dashboard",
          value: "carbon_fiber_dashboard",
        },
      ],
    },
  ],
};

export default Products;
