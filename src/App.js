import React from "react";
import Dashboard from "./components/dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./containers/auth/login";
import Register from "./containers/auth/register";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/login">
            <div className="sb-nav-fixed">
              <Login />
            </div>
          </Route>
          <Route exact path="/register">
            <div className="sb-nav-fixed">
              <Register />
            </div>
          </Route>
          <Dashboard>
            <Route exact path="/dashboard">
            </Route>
          </Dashboard>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;