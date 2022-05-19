import { UiSkeleton } from '@/components/ui';
import { NFTMetaData } from '@/typings/nftsShowcase';
import { FC, useEffect, useState } from 'react';
import styled from 'styled-components';

export interface NFTCardProps {
  tickerId?: string;
  metaDataProp?: NFTMetaData | null;
  fetchMetaData?: (tickerId: string) => Promise<NFTMetaData>;
  className?: string;
  loading?: boolean;
}

const NFTCard: FC<NFTCardProps> = ({
  tickerId = '',
  metaDataProp = null,
  fetchMetaData,
  className = '',
  loading = false,
}) => {
  const [metaData, setMetaData] = useState(metaDataProp ? { ...metaDataProp } : null);
  const [, setIsMetaDataLoading] = useState(false);

  const isLoading = loading || !metaData;

  const NFTImage = metaData?.image || '';
  const NFTName = metaData?.name || '';
  const NFTDescription = metaData?.description || '';

  useEffect(() => {
    loadMetaData();
  }, []);

  async function loadMetaData(): Promise<void> {
    if (fetchMetaData && tickerId) {
      try {
        setIsMetaDataLoading(true);
        const data = await fetchMetaData(tickerId);
        console.log(data);
        setMetaData(data);
      } catch (e) {
        console.error('Failed to load meta data');
        setMetaData({
          name: tickerId,
          description: 'The brightest example of NFTs world',
          image: 'https://i.imgur.com/4ZI56v7.png',
        });
      } finally {
        setIsMetaDataLoading(false);
      }
    }
  }

  return (
    <WrapperStyled className={className}>
      <div className="nft-image">
        {isLoading ? (
          <UiSkeleton width="140px" height="140px" borderRadius="50%" />
        ) : (
          <ImageStyled image={NFTImage} />
        )}
      </div>
      <HeadingStyled>
        {isLoading ? (
          <UiSkeleton width="130px" height="24px" borderRadius="4px" />
        ) : (
          <span className="heading-3 text-color-alternative">{NFTName}</span>
        )}
      </HeadingStyled>
      <DescriptionStyled>
        {isLoading ? (
          <UiSkeleton count={4} width="160px" height="6px" borderRadius="4px" />
        ) : (
          NFTDescription
        )}
      </DescriptionStyled>
    </WrapperStyled>
  );
};

const WrapperStyled = styled.div`
  box-sizing: border-box;
  padding: 24px;
  border-radius: 8px;
  background: var(--dark-color-2);
  position: relative;

  margin-top: 70px;

  .nft-image {
    position: absolute;
    top: -70px;
    left: calc(50% - 70px);
  }
`;

const ImageStyled = styled.div<{ image: string }>`
  width: 140px;
  height: 140px;
  border-radius: 50%;
  ${({ image }) => `
    background: var(--dark-color-2) url(${image}) center center no-repeat;
    background-size: cover;
  `}
`;

const HeadingStyled = styled.div`
  margin-top: 76px;
  text-align: center;
  text-transform: uppercase;
`;

const DescriptionStyled = styled.div`
  text-align: center;
  line-height: 1.45;
  font-size: 18px;
  margin-top: 16px;
`;

export default NFTCard;