import { MAINNET_CHAINS } from '@/constants/web3';

export function isTestnetChainId(chainId: unknown): boolean {
  return !MAINNET_CHAINS.find((chain) => chain.id === chainId);
}
