import { Router, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import { routes } from "./routes";

const Navigator = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {routes.map(({ component, exact, path }, index) => (
          <Route
            key={index}
            path={path}
            component={component}
            exact={exact || false}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default Navigator;
