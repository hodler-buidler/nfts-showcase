import { SUPPORTED_CHAINS } from '@/constants/web3';
import { Chain, ChainId } from '@/typings/web3';

function getChainById(chainId: unknown): Chain | null {
  return SUPPORTED_CHAINS.find((chain) => chain.id === (chainId as ChainId)) || null;
}

export default getChainById;
