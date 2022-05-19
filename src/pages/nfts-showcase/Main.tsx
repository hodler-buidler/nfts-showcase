import NFTsGrid from '@/components/nfts-showcase/NFTsGrid/NFTsGrid';
import BaseLayout from '@/layouts/BaseLayout/BaseLayout';
import ConnectWalletLayout from '@/layouts/ConnectWalletLayout/ConnectWalletLayout';
import { FC } from 'react';
import styled from 'styled-components';

const Page: FC = () => {
  return (
    <BaseLayout>
      <ConnectWalletLayout>
        <HeaderStyled>
          <span className="heading-1 text-color-primary">NFTs showcase</span>
        </HeaderStyled>
        <NFTsShowcaseStyled>
          <NFTsGrid />
        </NFTsShowcaseStyled>
      </ConnectWalletLayout>
    </BaseLayout>
  );
};

const HeaderStyled = styled.div`
  text-align: center;
`;

const NFTsShowcaseStyled = styled.div`
  max-width: 1200px;
  margin: auto;
  border-top: 1px solid var(--gray-color-dark-1);
  margin-top: 48px;
  padding-top: 48px;
`;

export default Page;
