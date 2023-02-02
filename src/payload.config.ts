import { buildConfig } from "payload/config";
import path from "path";
// import Examples from './collections/Examples';
import Users from "./collections/Users";
import Categories from "./collections/Categories";
import Posts from "./collections/Posts";
import Products from "./collections/Products";
import Media from "./collections/Media";
import PageBuilder from "./collections/PageBuilder";

export default buildConfig({
  serverURL: "http://localhost:3000",
  admin: {
    user: Users.slug,
  },
  collections: [
    Users,
    Categories,
    Posts,
    Products,
    Media,
    PageBuilder,
    // Add Collections here
    // Examples,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, "payload-types.ts"),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, "generated-schema.graphql"),
  },
  i18n: {
    fallbackLng: "en",
    lng: "en",
  },
  express: {
    json: {
      limit: 100,
    },
  },
});
