import {
  ApolloClient,
  InMemoryCache,
} from "@apollo/client";


export const apolloClient = new ApolloClient({
  uri: 'http://192.168.68.89:4000/graphql',
  cache: new InMemoryCache()
});
