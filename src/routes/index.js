import React from "react";
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { ErrorHandler } from "../context";
import Main from "../pages/main";

const Router = () => {
  return (
    <BrowserRouter>
      <ErrorHandler>
        <Switch>
          <Route component={Main} path="/" />
        </Switch>
      </ErrorHandler>
    </BrowserRouter>
  );
};

export default Router;
