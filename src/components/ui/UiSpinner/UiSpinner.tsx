import { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export interface UiSpinnerProps {
  theme?: 'alternative' | 'primary' | 'success' | 'danger' | 'warning' | 'info';
  customColor?: string;
  size?: string;
  speed?: string;
  className?: string;
}

export const UiSpinner: FC<UiSpinnerProps> = ({
  theme = 'primary',
  customColor = '',
  size = '16px',
  speed = '1.2s',
  className = '',
}) => {
  return (
    <SpinnerStyled
      theme={theme}
      customColor={customColor}
      size={size}
      speed={speed}
      className={className}
    />
  );
};

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const SpinnerStyled = styled.div<{
  theme?: 'alternative' | 'info' | 'success' | 'warning' | 'danger';
  customColor?: string;
  size?: string;
  speed?: string;
}>`
  display: inline-block;

  ${({ size }) => `
    width: ${size}; 
    height: ${size};  
  `}

  &:after {
    content: ' ';
    display: block;

    ${({ size }) => `
      width: ${size};
      height: ${size};  
    `}

    border-radius: 50%;
    ${({ theme, customColor }) => `
      border: 2px solid ${customColor || `var(--global-${theme}-color)`};
      border-color: ${customColor || `var(--global-${theme}-color)`} transparent ${
  customColor || `var(--global-${theme}-color)`
} transparent;
    `}
    animation: ${spin} ${({ speed }) => speed} linear infinite;
  }
`;
