import { fetchNFTMetaDataByTickerId, queryExistingNFTsIds } from '@/api/brand-central-auction';
import { DEFAULT_CHAIN } from '@/constants/web3';
import { useAppDispatch, useAppSelector } from '@/state';
import { showMessage } from '@/state/app';
import { NFTMetaData } from '@/typings/nftsShowcase';
import { Web3Provider } from '@/typings/web3';
import { getCurrentChainId } from '@/utils/web3';
import { useState } from 'react';

export function useNFTsShowcase() {
  const dispatch = useAppDispatch();
  const { walletProvider } = useAppSelector((state) => state.web3);

  const [NFTsIds, setNFTsIds] = useState<Array<{ id: string }>>([]);
  const [isNFTsIdsLoading, setIsNFTsIdsLoading] = useState(true);

  async function loadExistingNFTsIds(): Promise<void> {
    try {
      setIsNFTsIdsLoading(true);
      const ids = await queryExistingNFTsIds();
      setNFTsIds(ids);
    } catch (e) {
      dispatch(
        showMessage({
          type: 'error',
          content: 'Failed to load NFTs data',
        }),
      );
    } finally {
      setIsNFTsIdsLoading(false);
    }
  }

  function loadNFTMetaData(tickerId: string): Promise<NFTMetaData> {
    return fetchNFTMetaDataByTickerId({
      tickerId,
      provider: walletProvider as Web3Provider,
      contractParams: {
        chainId: getCurrentChainId() || DEFAULT_CHAIN.id,
      },
    });
  }

  return {
    NFTsIds,
    isNFTsIdsLoading,
    loadExistingNFTsIds,
    loadNFTMetaData,
  };
}
