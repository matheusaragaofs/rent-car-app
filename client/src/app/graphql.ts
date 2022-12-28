import { ApolloClient } from "@apollo/client";
import { InMemoryCache } from "@apollo/client/cache";

export const apolloClient = new ApolloClient({
  uri: process.env.REACT_APP_API_URL || "http:localhost:9000/graphql",
  cache: new InMemoryCache()
});
