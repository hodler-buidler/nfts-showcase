import { ChainId } from '@/typings/web3';

export function getCurrentChainId(): ChainId | null {
  return (window?.ethereum?.chainId as ChainId) || null;
}
