import { UiAlert } from '@/components/ui';
import { getInstallableWallets } from '@/utils/web3';
import { FC } from 'react';

const NoSupportedWalletsAlert: FC = () => {
  return (
    <UiAlert theme="danger">
      You dont have supported wallets installed. Please check out these: &nbsp;
      {getInstallableWallets().map((wallet, index) => (
        <span key={index}>
          {index !== 0 && <span>, &nbsp;</span>}

          <a href={wallet.installLink} target="_blank" rel="noreferrer">
            {wallet.name}
          </a>
        </span>
      ))}
    </UiAlert>
  );
};

export default NoSupportedWalletsAlert;
