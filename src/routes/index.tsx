import React from 'react';

import { Switch } from 'react-router-dom';

import { ConnectedRouter } from 'connected-react-router';

import Home from '~/pages/Home';
import history from '~/services/history';

import Route from './Route';

const Routes: React.FC = () => {
  return (
    <ConnectedRouter history={history}>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />

          <Route path="/dashboard" component={Home} isPrivate />
        </Switch>
      </div>
    </ConnectedRouter>
  );
};

export default Routes;
