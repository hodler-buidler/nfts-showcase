import makeContract from './makeContract';
import { ContractParams, LowerTickerToTokenIdQueryParams, TokenURIQueryParams } from './types';

export async function lowerTickerToTokenIdQuery(
  params: LowerTickerToTokenIdQueryParams,
  contractParams: ContractParams = {},
): Promise<number> {
  const { provider, tickerId } = params;
  const contract = makeContract(provider, contractParams);
  const response = await contract.lowerTickerToTokenId(tickerId);
  return Number(response.toString());
}

export async function tokenURIQuery(
  params: TokenURIQueryParams,
  contractParams: ContractParams = {},
): Promise<string> {
  const { provider, tokenId } = params;
  const contract = makeContract(provider, contractParams);
  return contract.tokenURI(tokenId);
}
