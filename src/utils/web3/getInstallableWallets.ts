import { SUPPORTED_WALLETS } from '@/constants/web3';
import { Wallet } from '@/typings/web3';

function getInstallableWallets(): Wallet[] {
  return SUPPORTED_WALLETS.filter((wallet) => wallet.installable);
}

export default getInstallableWallets;
