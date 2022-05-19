import { ChainId } from '@/typings/web3';

export const CONTRACT_ADDRESSES_MAP: { [key in ChainId]?: string } = Object.freeze({
  [ChainId.EthereumMain]: '0x4EA67AeBb61f7Ff6E15E237C8b79D29C41F750fd',
});

export const DEFAULT_TESTNET_CONTRACT_ADDRESS = '';
export const DEFAULT_MAINNET_CONTRACT_ADDRESS = CONTRACT_ADDRESSES_MAP[
  ChainId.EthereumMain
] as string;
