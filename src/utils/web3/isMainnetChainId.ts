import { MAINNET_CHAINS } from '@/constants/web3';

export function isMainnetChainId(chainId: unknown): boolean {
  return !!MAINNET_CHAINS.find((chain) => chain.id === chainId);
}
