import { ETHEREUM_MAINNET_CHAIN } from '@/logic/chains';
import METAMASK_WALLET from '@/logic/wallets/metamask';
import { Chain, Wallet } from '@/typings/web3';

export const SUPPORTED_WALLETS: readonly Wallet[] = Object.freeze([METAMASK_WALLET]);

export const SUPPORTED_CHAINS: readonly Chain[] = Object.freeze([ETHEREUM_MAINNET_CHAIN]);

export const DEFAULT_CHAIN = SUPPORTED_CHAINS[0];

export const MAINNET_CHAINS: readonly Chain[] = Object.freeze([ETHEREUM_MAINNET_CHAIN]);

export const METAMASK_REJECTED_TRANSACTION_CODE = 4001;
