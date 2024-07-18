import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
  } from "@apollo/client/core";
  import { DefaultApolloClient } from "@vue/apollo-composable";
  
  const httpLink = createHttpLink({
    uri: import.meta.env.VITE_GRAPHQL_ENDPOINT,
  });
  
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  
  export { apolloClient, DefaultApolloClient };