import { ApolloClient, InMemoryCache } from '@apollo/client';
import { SUBGRAPH_HTTP_URL } from './constants';

export default function makeClient() {
  return new ApolloClient({
    uri: SUBGRAPH_HTTP_URL,
    cache: new InMemoryCache(),
  });
}
