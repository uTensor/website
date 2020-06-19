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
                <Link
                  to="/"
                  className="navbar-item noto-sans-font has-text-primary has-text-weight-semibold"
                >
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
                  <a
                    className="navbar-item ubuntu-font"
                    href="https://github.com/uTensor/utensor-helloworld"
                  >
                    Jump Start
                  </a>
                  <a
                    className="navbar-item ubuntu-font"
                    href="https://github.com/uTensor/website/blob/master/docs.md"
                  >
                    Docs
                  </a>
                  <a
                    className="navbar-item ubuntu-font"
                    href="https://utensor.slack.com/join/shared_invite/zt-6vf9jocy-lzk5Aw11Z8M9GPf_KS5I~Q#/"
                  >
                    Join
                  </a>
                  <a
                    className="navbar-item ubuntu-font"
                    href="https://opencollective.com/utensorai"
                  >
                    Donate
                  </a>
                  <a
                    className="navbar-item ubuntu-font"
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
              <p className="has-text-primary noto-sans-font">
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
