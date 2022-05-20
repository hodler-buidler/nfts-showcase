import NFTCard from '@/components/nfts-showcase/NFTCard/NFTCard';
import { useNFTsShowcase } from '@/hooks/nfts-showcase';
import { numberToArray } from '@/utils/common';
import { FC, useEffect } from 'react';
import styled from 'styled-components';

const MIN_LOADING_CARDS_DISPLAY = 8;

const NFTsGrid: FC = () => {
  const { loadExistingNFTsIds, loadNFTMetaData, isNFTsIdsLoading, NFTsIds } = useNFTsShowcase();

  const isNFTsEmpty = !NFTsIds.length && !isNFTsIdsLoading;

  useEffect(() => {
    loadExistingNFTsIds();
  }, []);

  return (
    <div>
      {isNFTsEmpty ? (
        <EmptyMessageStyled>{'There aren\'t any NFTs to display'}</EmptyMessageStyled>
      ) : (
        <GridStyled>
          {isNFTsIdsLoading ? (
            <>
              {numberToArray(MIN_LOADING_CARDS_DISPLAY).map((_, index) => (
                <NFTCard key={index} loading className="nft-grid-item" />
              ))}
            </>
          ) : (
            <>
              {NFTsIds.map((entity) => (
                <NFTCard
                  key={entity.id}
                  tickerId={entity.id}
                  fetchMetaData={loadNFTMetaData}
                  className="nft-grid-item"
                />
              ))}
            </>
          )}
        </GridStyled>
      )}
    </div>
  );
};

const GridStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 24px;

  .nft-grid-item {
    min-height: 260px;
  }

  @media screen and (max-width: 1280px) {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media screen and (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 500px) {
    grid-gap: 16px;
  }

  @media screen and (max-width: 441px) {
    grid-template-columns: 1fr;
  }
`;

const EmptyMessageStyled = styled.div`
  font-size: 20px;
  text-align: center;
`;

export default NFTsGrid;
