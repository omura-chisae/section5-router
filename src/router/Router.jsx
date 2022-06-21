import { Route, Switch } from "react-router-dom";
import { Home } from "../Home";
import { Page1 } from "../Page1";
import { Page1A } from "../Page1A";
import { Page1B } from "../Page1B";
import { Page2 } from "../Page2";
import { Page1Router } from "./Page1Router";

export const Router = () => {
  return (
    <Switch>
      <Route exact path="/" render={({ match: { url } }) => <Home />} />
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {Page1Router.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      />
      <Route path="/page2" render={() => <Page2 />} />
    </Switch>
  );
};
