import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
} from "@apollo/client";
const url =
  process.env.STAGE === "development"
    ? "https://hashtune.co/graphql"
    : "http://localhost:5000/graphql";
const apolloHttpLink = createHttpLink({
  uri: url,
  credentials: "include",
});

const client = new ApolloClient({
  link: ApolloLink.from([apolloHttpLink]),
  cache: new InMemoryCache(),
});

export default client;
