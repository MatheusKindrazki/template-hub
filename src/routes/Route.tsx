import React from 'react';

import {
  RouteProps as ReactRouteProps,
  Route as ReactRoute,
  Redirect,
} from 'react-router-dom';

import Logged from '~/layouts/Logged';

interface RouteProps extends ReactRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Route: React.FC<RouteProps> = ({
  isPrivate = false,
  component,
  ...rest
}) => {
  const signed = true;

  const RenderLayout = Logged;

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <RenderLayout>
      <ReactRoute component={component} {...rest} />
    </RenderLayout>
  );
};

export default Route;
