import { SUPPORTED_WALLETS } from '@/constants/web3';

export function isAnyWalletSupported(): boolean {
  const supportedWallets = SUPPORTED_WALLETS.filter((wallet) => wallet.isSupported());
  return !!supportedWallets.length;
}
