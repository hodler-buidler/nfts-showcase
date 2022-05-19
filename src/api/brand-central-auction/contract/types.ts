import { ChainId, Web3Provider } from '@/typings/web3';

export interface ContractParams {
  chainId?: ChainId;
}

export interface LowerTickerToTokenIdQueryParams {
  provider: Web3Provider;
  tickerId: string;
}

export interface TokenURIQueryParams {
  provider: Web3Provider;
  tokenId: number;
}
