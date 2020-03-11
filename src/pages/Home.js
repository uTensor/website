import React, { Component } from "react";
import "./Home.scss";

class Index extends Component {
  render() {
    return (
      <div>
        <section>
          <div className="container">
            <div className="intro">
              Extremely light-weight machine learning inference framework built
              on Mbed and Tensorflow.
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="features">
              <div className="columns">
                <div className="column">
                  <i className="fas fa-tachometer-alt fa-2x"></i>
                  <div className="feature-title title">Fast and Small</div>
                  <div className="feature-detail">
                    The uTensor core runtime takes full advantage of the Arm
                    CMSIS-NN kernels, making your models run wicked quick in a
                    small footprint!
                  </div>
                </div>
                <div className="column">
                  <i className="fas fa-users fa-2x"></i>
                  <div className="feature-title title">Developer friendly</div>
                  <div className="feature-detail">
                    Hand crafting neural nets for embedded systems is a real
                    pain in the uTensor, so we provide a toolchain for quickly
                    generating C++ models so you don't have to!
                  </div>
                </div>
                <div className="column">
                  <i className="fas fa-sliders-h fa-2x"></i>
                  <div className="feature-title title">Easy Customization</div>
                  <div className="feature-detail">
                    With uTensor it's easy to add new operators, specify where
                    tensors exist in memory, and even add automatic graph
                    optimiziation passes!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="quick-start">
              <h1 className="title is-2">Quick Start</h1>
              <div className="columns">
                <div className="column is-two-thirds">
                  <div className="quick-start-code">This is code part.</div>
                </div>
                <div className="column">
                  <div className="title is-3">Features</div>
                  <div className="content">
                    <ul type="1">
                      <li>Feature 1</li>
                      <li>Feature 2</li>
                      <li>Feature 3</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="community">
              <div className="community-title">
                Join the microTensor Communtiy
              </div>
              <div className="community-link-container">
                <a className="community-link" href="/">
                  Donate
                </a>
                •
                <a className="community-link" href="/">
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Index;
