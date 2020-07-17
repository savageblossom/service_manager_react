import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthStoreContext} from '../index';

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
    const store = useContext(AuthStoreContext);
    return (
        <Route {...rest} render={props => {
                if (store.auth == "true") {
                    return <Component {...props} />;
                } else {
                    return (
                        <Redirect
                        to={{
                            pathname: "/",
                            state: {
                            from: props.location
                            }
                        }}
                        />
                    );
                }
            }}
        />
    );
};