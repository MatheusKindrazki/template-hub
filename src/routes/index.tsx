import React from 'react';

import { Switch, HashRouter } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';

import Home from '~/pages/Home';
import history from '~/services/history';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <HashRouter basename="/" hashType="slash">
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/dashboard" component={Home} isPrivate />
        </Switch>
      </HashRouter>
    </ConnectedRouter>
  );
};

export default Routes;
