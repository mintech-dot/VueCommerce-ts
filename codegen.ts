import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://readonlydemo.vendure.io/shop-api",
  documents: ["src/api/*.{gql,graphql}"],
  generates: {
    "src/gql/": {
      preset: "client",
      plugins: [],
      config: {
        useTypeImports: true,
        scalars: {
          Money: "number",
        },
        namingConvention: {
          enumValues: "keep",
        },
      },
    },
    "./graphql.schema.json": {
      plugins: ["introspection"],
    },
  },
};
