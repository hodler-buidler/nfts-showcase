import {
  faCheckCircle,
  faExclamationTriangle,
  faInfoCircle,
  faTimesCircle,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, ReactNode } from 'react';
import styled from 'styled-components';

type AlertTheme = 'info' | 'warning' | 'danger' | 'success';

export interface UiAlertProps {
  children: ReactNode;
  theme?: AlertTheme;
}

export const UiAlert: FC<UiAlertProps> = ({ theme = 'info', ...props }) => {
  const alertIconsMap = {
    info: faInfoCircle,
    success: faCheckCircle,
    warning: faExclamationTriangle,
    danger: faTimesCircle,
  };

  return (
    <AlertWrapperStyled theme={theme}>
      <FontAwesomeIcon className="alert-icon" icon={alertIconsMap[theme]} />

      <div>{props.children}</div>
    </AlertWrapperStyled>
  );
};

const AlertWrapperStyled = styled.div<{
  theme: AlertTheme;
}>`
  --alert-theme-color: var(--gray-color-dark-1);
  border-radius: 20px;
  background: var(--dark-color-2);
  padding: 12px 20px;
  border: 1px solid var(--alert-theme-color);
  color: var(--white-color);
  display: flex;
  align-items: center;

  & .alert-icon {
    font-size: 24px;
    margin-right: 16px;
    color: var(--alert-theme-color);
  }

  ${({ theme }) =>
    theme === 'info'
      ? `
    --alert-theme-color: var(--global-info-color);
  `
      : ''}

  ${({ theme }) =>
    theme === 'success'
      ? `
    --alert-theme-color: var(--global-success-color);
  `
      : ''}

  ${({ theme }) =>
    theme === 'danger'
      ? `
    --alert-theme-color: var(--global-danger-color);
  `
      : ''}

  ${({ theme }) =>
    theme === 'warning'
      ? `
    --alert-theme-color: var(--global-warning-color);
  `
      : ''}
`;
