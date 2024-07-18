import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://readonlydemo.vendure.io/shop-api",
  documents: ["src/**/*.{gql,graphql}"],
  generates: {
    "src/gql/schema.ts/": {
      preset: 'client',
      config: {
        useTypeImports: true
      }
    }
  }
};

export default config;