import AppHeader from '@/components/AppHeader/AppHeader';
import { FC } from 'react';
import styled from 'styled-components';

const BaseLayout: FC = ({ children }) => {
  return (
    <div>
      <AppHeader />
      <ContentStyled>
        <MainStyled>{children}</MainStyled>
        {/* Place footer here */}
      </ContentStyled>
    </div>
  );
};

const ContentStyled = styled.div`
  min-height: calc(100vh - var(--global-app-header-height));
  display: grid;
  grid-template-rows: 1fr auto;
`;

const MainStyled = styled.main`
  padding: var(--global-standard-vertical-offset) 0;
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
`;

export default BaseLayout;
