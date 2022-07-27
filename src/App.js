import "./App.css";

import HomePage from "./components/pages/homepage.component";

import { Route, Switch } from "react-router-dom";

const HatPage = () => {
  return (
    <div>
      <h1>HATS PAGE</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/shop/hats" component={HatPage} />
      </Switch>
    </div>
  );
}

export default App;
