import NoSupportedWalletsAlert from '@/components/NoSupportedWalletsAlert/NoSupportedWalletsAlert';
import { UiButton } from '@/components/ui';
import UnsupportedChainAlert from '@/components/UnsupportedChainAlert/UnsupportedChainAlert';
import { useAppDispatch, useAppSelector } from '@/state';
import { connectAccount } from '@/state/web3';
import { FC } from 'react';
import styled from 'styled-components';

const ConnectWalletLayout: FC = ({ children }) => {
  const dispatch = useAppDispatch();

  const { connectedAddress, isWalletConnecting, isSupportedChainEnabled, isAnyWalletSupported } =
    useAppSelector((state) => state.web3);
  const isWalletConnected = !!connectedAddress;

  return (
    <>
      {isWalletConnected ? (
        children
      ) : (
        <WrapperStyled>
          {!isAnyWalletSupported && <NoSupportedWalletsAlert />}
          {isAnyWalletSupported && !isSupportedChainEnabled && <UnsupportedChainAlert />}
          {isAnyWalletSupported && isSupportedChainEnabled && (
            <UiButton
              minWidth="200px"
              loading={isWalletConnecting}
              onClick={() => dispatch(connectAccount())}
            >
              <span role="img" aria-label="lock">
                🔓
              </span>
              Unlock Wallet
            </UiButton>
          )}
        </WrapperStyled>
      )}
    </>
  );
};

const WrapperStyled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
`;

export default ConnectWalletLayout;
