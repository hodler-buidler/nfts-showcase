import * as CSS from 'csstype';
import { FC } from 'react';
import Skeleton, { SkeletonProps, SkeletonTheme } from 'react-loading-skeleton';

type Theme = 'default';
type ThemesMap = {
  [key in Theme]: {
    baseColor: CSS.Property.Color;
    highlightColor: CSS.Property.Color;
  };
};

export interface UiSkeletonProps extends SkeletonProps {
  theme?: Theme;
}

export const UiSkeleton: FC<UiSkeletonProps> = ({ theme = 'default', ...restProps }) => {
  const themesMap: ThemesMap = {
    default: {
      baseColor: 'rgba(55,58,71,1)',
      highlightColor: 'rgba(146,147,166,1)',
    },
  };

  const baseColor = restProps.baseColor || themesMap[theme].baseColor;
  const highlightColor = restProps.highlightColor || themesMap[theme].highlightColor;

  return (
    <SkeletonTheme baseColor={baseColor} highlightColor={highlightColor}>
      <Skeleton {...restProps} />
    </SkeletonTheme>
  );
};
