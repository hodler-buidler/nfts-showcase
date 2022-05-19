import { SUPPORTED_CHAINS } from '@/constants/web3';
import { ChainId } from '@/typings/web3';

export function isChainIdSupported(chainId: unknown): boolean {
  return !!SUPPORTED_CHAINS.find((chain) => chain.id === (chainId as ChainId));
}
