import { Web3Provider } from '@/typings/web3';
import { ethers } from 'ethers';

export function makeWalletProvider(): Web3Provider {
  return new ethers.providers.Web3Provider(window.ethereum!, 'any');
}
