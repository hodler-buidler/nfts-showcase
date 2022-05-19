import HomePage from '@/pages/nfts-showcase/Main';
import { FC } from 'react';
import { Redirect, Route, Switch, useRouteMatch } from 'react-router-dom';

const NFTsShowcaseRoutes: FC = () => {
  const match = useRouteMatch();

  return (
    <Switch>
      <Route path={match.path}>
        <HomePage />
      </Route>
    </Switch>
  );
};

const DevRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <NFTsShowcaseRoutes />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

const ProdRoutes: FC = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <NFTsShowcaseRoutes />
      </Route>
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
  );
};

export const Routes: FC = () => {
  if (import.meta.env.DEV) return <DevRoutes />;
  return <ProdRoutes />;
};
