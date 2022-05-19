import brandCentralAuctionABI from '@/abis/brand-central-auction.json';
import { DEFAULT_CHAIN } from '@/constants/web3';
import { Web3Provider } from '@/typings/web3';
import { ethers } from 'ethers';
import { ContractParams } from './types';
import { getContractAddress } from './utils';

function makeContract(provider: Web3Provider, { chainId = DEFAULT_CHAIN.id }: ContractParams) {
  return new ethers.Contract(getContractAddress(chainId), brandCentralAuctionABI, provider);
}

export default makeContract;
