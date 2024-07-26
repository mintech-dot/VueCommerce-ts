
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://readonlydemo.vendure.io/shop-api",
  documents: "./**/*.{gql,graphql}",
  generates: {
    "./gql/": {
      preset: "client",
      plugins: []
    }
  }
};

export default config;
