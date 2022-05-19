import BaseLayout from '@/layouts/BaseLayout/BaseLayout';
import ConnectWalletLayout from '@/layouts/ConnectWalletLayout/ConnectWalletLayout';
import { FC } from 'react';

const Page: FC = () => {
  return (
    <BaseLayout>
      <ConnectWalletLayout>
        <span>NFTs showcase</span>
      </ConnectWalletLayout>
    </BaseLayout>
  );
};

export default Page;
