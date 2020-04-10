import React, { Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";

import routes from "./routes";
import "./App.scss";

const loading = () => <div>Loading...</div>;

function App() {
  return (
    <Suspense fallback={loading()}>
      <BrowserRouter>
        <div className="App">
          <section className="section">
            <div className="container">
              <nav
                className="navbar"
                role="navigation"
                aria-label="main navigation"
              >
                <div className="navbar-brand">
                  <Link to="/" className="navbar-item">
                    microTensor
                  </Link>
                </div>
                <div className="navbar-end">
                  <Link className="navbar-item" to="/get_started">
                    Get Started
                  </Link>
                  <Link className="navbar-item" to="/docs">
                    Docs
                  </Link>
                  <a className="navbar-item" href="https://github.com/utensor">
                    <i className="fab fa-github"></i>
                  </a>
                  <a className="navbar-item" href="https://github.com/utensor">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a className="navbar-item" href="https://github.com/utensor">
                    <i className="fab fa-slack"></i>
                  </a>
                </div>
              </nav>
            </div>
          </section>
          <Switch>
            {routes.map((route, idx) => {
              return route.component ? (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={(props) => <route.component {...props} />}
                />
              ) : null;
            })}
            <Redirect to="/" />
          </Switch>
        </div>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
