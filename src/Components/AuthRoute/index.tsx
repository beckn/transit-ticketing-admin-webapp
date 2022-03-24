import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../Config/firebase";
import logging from "../../Config/logging";

export interface IAuthRouteProps { };

const AuthRoute: React.FC<{
  children: React.ReactNode
}> = ({ children }): React.ReactElement => {
    
    if (!auth.currentUser){
      logging.warn("No user detected, redirecting");
      return <Redirect to="/login" />;
    }

    return (
      <div> { children } </div>
    );
}

export default AuthRoute;