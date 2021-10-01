import React, { Component, FC, ReactComponentElement, ReactNode } from 'react';
import { Route, Redirect } from 'react-router-dom';
import auth from '../authService';


interface Props {
  // any props that come into the component
  path: string;
  component: (p: any) => JSX.Element;
  render: (p: any) => JSX.Element;
}

const ProtectedRoutes: FC<Props> = ({ path, component: Component, render, ...rest }) => {
  const user = auth.getCurrentUser();
  return (
    <Route
      path={path}
      {...rest}
      render={props => {
        if (!user)
          return (
            <Redirect
              to={{
                pathname: '/login',
                state: { from: props.location }
              }}
            />
          );
        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoutes;
