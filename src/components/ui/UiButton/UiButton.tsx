import { APP_PRIMARY_COLOR, APP_WHITE_COLOR } from '@/assets/styles/design';
import ButtonUnstyled, {
  buttonUnstyledClasses,
  ButtonUnstyledProps,
} from '@mui/base/ButtonUnstyled';
import { FC } from 'react';
import styled from 'styled-components';
import { UiSpinner } from '../UiSpinner/UiSpinner';

export interface UiButtonProps extends ButtonUnstyledProps {
  theme?: UiButtonTheme;
  loading?: boolean;
  minWidth?: string;
}

export type UiButtonTheme = 'primary' | 'light';

export const UiButton: FC<UiButtonProps> = ({
  children,
  loading = false,
  disabled,
  theme = 'primary',
  minWidth = 'auto',
  ...restProps
}) => {
  return (
    <ButtonStyled
      theme={theme}
      disabled={disabled || loading}
      style={{ minWidth, ...restProps.style }}
      {...restProps}
    >
      {loading ? <UiSpinner customColor="#000" /> : children}
    </ButtonStyled>
  );
};

const THEMES_MAP: Record<UiButtonTheme, string[]> = {
  primary: [
    APP_PRIMARY_COLOR.string(),
    APP_PRIMARY_COLOR.lighten(0.1).string(),
    APP_PRIMARY_COLOR.lighten(0.2).string(),
  ],
  light: [
    APP_WHITE_COLOR.fade(0.5).string(),
    APP_WHITE_COLOR.fade(0.25).string(),
    APP_WHITE_COLOR.fade(0.05).string(),
  ],
};

type ButtonStyledProps = {
  theme: UiButtonTheme;
};

const ButtonStyled = styled(ButtonUnstyled)<ButtonStyledProps>`
  ${({ theme }: ButtonStyledProps) => `
    font-weight: bold;
    background-color: ${THEMES_MAP[theme][0]};
    padding: 12px 24px;
    border-radius: 4px;
    color: #333;
    user-select: none;
    transition: all 150ms ease;
    cursor: pointer;
    border: none;
    position: relative;

    &:hover {
      background-color: ${THEMES_MAP[theme][1]};
    }

    &.${buttonUnstyledClasses.active} {
      background-color: ${THEMES_MAP[theme][2]};
    }

    &.${buttonUnstyledClasses.focusVisible} {
      box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
      outline: none;
    }

    &.${buttonUnstyledClasses.disabled} {
      opacity: 0.5;
      cursor: not-allowed;
    }
  `}
`;
