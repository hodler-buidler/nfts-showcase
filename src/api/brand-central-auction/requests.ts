import { NFTMetaData } from '@/typings/nftsShowcase';
import { Web3Provider } from '@/typings/web3';
import axios from 'axios';
import { ContractParams, lowerTickerToTokenIdQuery, tokenURIQuery } from './contract';

export async function fetchNFTMetaDataByTickerId({
  tickerId,
  provider,
  contractParams,
}: {
  tickerId: string;
  provider: Web3Provider;
  contractParams: ContractParams;
}): Promise<NFTMetaData> {
  const tokenId = await lowerTickerToTokenIdQuery({ provider, tickerId }, contractParams);
  const tokenURI = await tokenURIQuery({ provider, tokenId }, contractParams);
  const { data } = await axios.get<NFTMetaData>(tokenURI);
  return data;
}
