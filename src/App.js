import React, { Component, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch, Link } from "react-router-dom";

import routes from "./routes";
import "./App.scss";

const loading = () => <div>Loading...</div>;

class App extends Component {
  state = {
    showNav: false,
  };

  toggleNavBar = () => {
    this.setState({
      showNav: !this.state.showNav,
    });
  };

  render() {
    return (
      <Suspense fallback={loading()}>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <nav
            className="navbar"
            role="navigation"
            aria-label="main navigation"
          >
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item changa-font">
                  uTensor
                </Link>
                <div
                  className="navbar-burger burger"
                  data-target="navMenu"
                  onClick={this.toggleNavBar}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div
                className={
                  this.state.showNav ? "navbar-menu is-active" : "navbar-menu"
                }
                id="navMenu"
              >
                <div className="navbar-end">
                  <Link className="navbar-item changa-font" to="/get_started">
                    Jump Start
                  </Link>
                  <Link className="navbar-item changa-font" to="/docs">
                    Docs
                  </Link>
                  <a
                    className="navbar-item changa-font"
                    href="https://github.com/utensor"
                  >
                    Join
                  </a>
                  <a
                    className="navbar-item changa-font"
                    href="https://github.com/utensor"
                  >
                    Donate
                  </a>
                  <a
                    className="navbar-item changa-font"
                    href="https://github.com/utensor"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </nav>
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
          <footer className="footer">
            <div className="content has-text-centered">
              <p className="has-text-primary changa-font">
                <i className="fas fa-heart"></i> by uTensor
              </p>
            </div>
          </footer>
        </BrowserRouter>
      </Suspense>
    );
  }
}

export default App;
