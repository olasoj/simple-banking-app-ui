import React, { FC } from 'react';
import { Route, Redirect, RouteComponentProps } from 'react-router-dom';
import auth from '../authService';


interface Props {
  path: string;
  component?: React.ComponentType<any> | React.ComponentType<RouteComponentProps<any, any, unknown>>;
  render: (p: any) => {}
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
