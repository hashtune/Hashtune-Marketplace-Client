import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";

const apolloHttpLink = createHttpLink({
  uri: "http://localhost:5000/graphql",
  credentials: "include",
});

const client = new ApolloClient({
  link: ApolloLink.from([apolloHttpLink]),
  cache: new InMemoryCache(),
});

export default client;
