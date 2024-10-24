import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./NotFound";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={App} />
        <Route exact component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
};

export default Router;