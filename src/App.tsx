/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState, useEffect } from "react";
import { Route, RouteComponentProps, Switch } from "react-router-dom";
import { auth } from "./Config/firebase";
import logging from "./Config/logging";
import routes from "./Config/routes";
import AuthRoute from "./Components/AuthRoute";
import { deleteLocalStorage, setLocalStorage } from "./utils/helpers";
import PageNotFound from "./Pages/ErrorPages/NotFound";
export interface IApplicationProps {}

const App: React.FC<IApplicationProps> = () => {
  const [ loading, setLoading ] = useState<boolean>(true);

  useEffect(() => {
    auth.onAuthStateChanged((user: any) => {
      if (user) {
        setLocalStorage(JSON.stringify(user), "firebaseData");
        logging.info("User detected.");
      } else {
        deleteLocalStorage("firebaseData");
        logging.info("No user detected");
      }

      setLoading(false);
    });
  }, []);

  if (loading) return null;

  return (
    <div className="App">
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={(routeProps: RouteComponentProps) => {
              if (route.protected)
                return (
                  <AuthRoute>
                    <route.component {...routeProps} />
                  </AuthRoute>
                );
              return <route.component {...routeProps} />;
            }}
          />
        ))}
        <Route path="*" render={() => <PageNotFound />} />
      </Switch>
    </div>
  );
};

export default App;
