import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "/graphql",
    cache: new InMemoryCache(),
  });

export {client, gql} ;