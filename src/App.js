import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./containers/Home";
import Restaurants from "./containers/Restaurants";
import Recipes from "./containers/Recipes";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/restaurants">
          <Restaurants />
        </Route>
        <Route path="/recipes">
          <Recipes />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
