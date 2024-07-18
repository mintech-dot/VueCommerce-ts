interface CustomImportMeta extends ImportMeta {
  env: {
    VITE_GRAPHQL_ENDPOINT: string;
  };
}
import type { CodegenConfig } from '@graphql-codegen/cli';

const customImportMeta = import.meta as CustomImportMeta;

const config: CodegenConfig = {
  overwrite: true,
  schema: customImportMeta.env.VITE_GRAPHQL_ENDPOINT,
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