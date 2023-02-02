import { CollectionConfig } from "payload/types";

const Users: CollectionConfig = {
  slug: "users",
  auth: true,
  labels: {
    singular: { en: "User", es: "Usuario" },
    plural: { en: "Users", es: "Usuarios" },
  },
  admin: {
    useAsTitle: "email",
    listSearchableFields: ["id"],
  },
  access: {
    read: () => true,
  },
  fields: [
    // Email added by default
    // Add more fields as needed
    {
      name: "isActive",
      type: "checkbox",
      label: "User is active",
    },
  ],
};

export default Users;
