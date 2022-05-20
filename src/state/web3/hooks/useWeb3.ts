import { makeWalletProvider } from '@/logic/ethereum';
import { useAppDispatch, useAppSelector } from '@/state';
import { getCurrentChainId, isAnyWalletSupported, isChainIdSupported } from '@/utils/web3';
import { useEffect } from 'react';
import {
  setConnectedAddress,
  setIsAnyWalletSupported,
  setIsEthereumProviderConnected,
  setIsSupportedChainEnabled,
  setIsWalletConnecting,
  setWalletProvider,
} from '../actions';

export function useWeb3() {
  const dispatch = useAppDispatch();
  const { connectedAddress } = useAppSelector((state) => state.web3);
  const ethereum = window?.ethereum;

  useEffect(() => {
    dispatch(setIsAnyWalletSupported(isAnyWalletSupported()));
    dispatch(setIsEthereumProviderConnected(!!ethereum?.isConnected()));

    // It seems like window.ethereum object takes time on page load to produce values
    setTimeout(() => {
      dispatch(setConnectedAddress(ethereum?.selectedAddress || ''));
      dispatch(setIsWalletConnecting(false));
    }, 1000);
  }, []);

  useEffect(() => {
    const provider = connectedAddress ? makeWalletProvider() : null;
    dispatch(setWalletProvider(provider));
  }, [connectedAddress]);

  useEffect(() => {
    ethereum?.on('connect', handleConnect);
    ethereum?.on('disconnect', handleDisconnect);
    ethereum?.on('accountsChanged', handleAccountsChanged);
    ethereum?.on('chainChanged', handleChainChanged);

    return () => {
      ethereum?.removeListener('connect', handleConnect);
      ethereum?.removeListener('disconnect', handleDisconnect);
      ethereum?.removeListener('accountsChanged', handleAccountsChanged);
      ethereum?.removeListener('chainChanged', handleChainChanged);
    };
  }, []);

  function handleConnect() {
    dispatch(setIsSupportedChainEnabled(isChainIdSupported(getCurrentChainId())));
    dispatch(setIsEthereumProviderConnected(!!ethereum?.isConnected()));
  }

  function handleDisconnect() {
    dispatch(setIsEthereumProviderConnected(false));
  }

  function handleAccountsChanged(accounts: string[]) {
    dispatch(setConnectedAddress(accounts[0] || ''));
  }

  function handleChainChanged(chainId: string) {
    dispatch(setIsSupportedChainEnabled(isChainIdSupported(chainId)));
  }
}
