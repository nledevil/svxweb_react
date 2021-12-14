import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";


export const apolloClient = new ApolloClient({
  uri: 'http://10.211.55.15:4000/graphql',
  cache: new InMemoryCache()
});
