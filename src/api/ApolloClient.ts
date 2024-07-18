import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
  } from "@apollo/client/core";
  import { DefaultApolloClient } from "@vue/apollo-composable";
  
  const httpLink = createHttpLink({
    uri: "https://readonlydemo.vendure.io/shop-api",
  });
  
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
  });
  
  export { apolloClient, DefaultApolloClient };