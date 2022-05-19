import { SUPPORTED_CHAINS } from '@/constants/web3';
import { ChainId } from '@/typings/web3';

function isChainIdSupported(chainId: unknown): boolean {
  return !!SUPPORTED_CHAINS.find((chain) => chain.id === (chainId as ChainId));
}

export default isChainIdSupported;
