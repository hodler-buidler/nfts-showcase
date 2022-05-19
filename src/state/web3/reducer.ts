import { Web3Provider } from '@/typings/web3';
import { createReducer } from '@reduxjs/toolkit';
import {
  setConnectedAddress,
  setIsAnyWalletSupported,
  setIsSupportedChainEnabled,
  setIsWalletConnecting,
  setWalletProvider,
} from './actions';

export interface WalletsState {
  isAnyWalletSupported: boolean;
  connectedAddress: string;
  isEthereumProviderConnected: boolean;
  isWalletConnecting: boolean;
  isSupportedChainEnabled: boolean;
  walletProvider: Web3Provider | null;
}

export const initialState: WalletsState = {
  isAnyWalletSupported: true,
  isEthereumProviderConnected: false,
  connectedAddress: '',
  isWalletConnecting: true,
  isSupportedChainEnabled: true,
  walletProvider: null,
};

export default createReducer(initialState, (builder) =>
  builder
    .addCase(setIsWalletConnecting, (state, { payload }) => {
      state.isWalletConnecting = payload;
    })
    .addCase(setIsAnyWalletSupported, (state, { payload }) => {
      state.isAnyWalletSupported = payload;
    })
    .addCase(setIsSupportedChainEnabled, (state, { payload }) => {
      state.isSupportedChainEnabled = payload;
    })
    .addCase(setConnectedAddress, (state, { payload }) => {
      state.connectedAddress = payload;
    })
    .addCase(setWalletProvider, (state, { payload }) => {
      state.walletProvider = payload;
    }),
);
