import LOGO_IMG from '@/assets/images/logo.svg';
import { UiButton } from '@/components/ui';
import { useAppDispatch, useAppSelector } from '@/state';
import { connectAccount } from '@/state/web3';
import { shortenStr } from '@/utils/filters';
import { FC } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const AppHeader: FC = () => {
  const dispatch = useAppDispatch();

  const { connectedAddress, isWalletConnecting, isSupportedChainEnabled, isAnyWalletSupported } =
    useAppSelector((state) => state.web3);
  const isWalletConnected = !!connectedAddress;

  const isWalletConnectionPossible = isAnyWalletSupported && isSupportedChainEnabled;

  const buttonContent = (() => {
    if (!isWalletConnectionPossible) return 'Not Supported';
    if (!isWalletConnected) return 'Unlock Wallet';
    return shortenStr(connectedAddress, 6, 4);
  })();

  return (
    <WrapperStyled>
      <Link to="/">
        <img className="logo" src={LOGO_IMG} alt="" />
      </Link>

      <UiButton
        theme="light"
        minWidth="180px"
        loading={isWalletConnecting}
        disabled={isWalletConnected || !isWalletConnectionPossible}
        onClick={() => dispatch(connectAccount())}
      >
        {buttonContent}
      </UiButton>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.header`
  width: 100%;
  height: var(--global-app-header-height);
  max-height: var(--global-app-header-height);
  background: var(--global-alternative-color);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0 180px;

  .logo {
    height: 80px;
    user-select: none;
    transition: 0.2s all;

    &:hover {
      opacity: 0.85;
    }
  }
`;

export default AppHeader;
