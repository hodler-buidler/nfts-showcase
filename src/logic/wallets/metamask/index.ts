import METAMASK_LOGO from '@/assets/images/metamask-logo.svg';
import { Wallet, WalletType } from '@/typings/web3';

const metamaskWallet: Wallet = Object.freeze({
  type: WalletType.MetaMask,
  name: 'MetaMask',
  logo: METAMASK_LOGO,
  installable: true,
  installLink: 'https://metamask.io/download',
  isSupported() {
    return !!window && !!window?.ethereum?.isMetaMask;
  },
});

export default metamaskWallet;
