import { ChainId } from '@/typings/web3';
import { isTestnetChainId } from '@/utils/web3';
import {
  CONTRACT_ADDRESSES_MAP,
  DEFAULT_MAINNET_CONTRACT_ADDRESS,
  DEFAULT_TESTNET_CONTRACT_ADDRESS,
} from './config';

export function getContractAddress(chainId: ChainId): string {
  if (CONTRACT_ADDRESSES_MAP[chainId]) {
    return CONTRACT_ADDRESSES_MAP[chainId] as string;
  }

  if (isTestnetChainId(chainId)) return DEFAULT_TESTNET_CONTRACT_ADDRESS;
  return DEFAULT_MAINNET_CONTRACT_ADDRESS;
}
