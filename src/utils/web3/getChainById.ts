import { SUPPORTED_CHAINS } from '@/constants/web3';
import { ChainId } from '@/typings/web3';

export function getChainById(chainId: unknown): Chain | null {
  return SUPPORTED_CHAINS.find((chain) => chain.id === (chainId as ChainId)) || null;
}
