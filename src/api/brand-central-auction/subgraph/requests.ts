import { gql } from '@apollo/client';
import makeClient from './makeClient';

export async function queryExistingNFTsIds(): Promise<Array<{ id: string }>> {
  const client = makeClient();

  const query = `
    query {
      tickers {
        id
      }
    }
  `;

  const { data } = await client.query({ query: gql(query) });

  return data.tickers;
}
