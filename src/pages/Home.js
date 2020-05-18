import React, { Component } from "react";
import "./Home.scss";

class Index extends Component {
  state = {
    displayGenerateCode: true,
  };

  handleChangeDisplayCode = () => {
    this.setState({
      displayGenerateCode: !this.state.displayGenerateCode,
    });
  };

  render() {
    const { displayGenerateCode } = this.state;
    const codeFeature = displayGenerateCode ? (
      <ul>
        <li>
          Tensor provide abstractions for memory devices (RAM, ROM,
          storage-devices, connectivity, etc)
        </li>
        <li>
          Operator classes allow silicon providers to extend uTensor runtime
          with their own optimized kernels.
        </li>
        <li>All memory usage can be governed by a predefined amount</li>
        <li>Very low static and fixed dynamic memory footprint</li>
        <li>Quantized Operations</li>
        <li>Hand-codable, readable and debuggable C++</li>
      </ul>
    ) : (
      <ul>
        <li>The model is built with TensorFlow</li>
        <li>
          With a single function call, C++ files are generated from the trained
          model
        </li>
        <li>Actions behind the scene:</li>
        <ul>
          <li>Dropout removal</li>
          <li>Quantization</li>
          <li>Offline Memory Planning</li>
          <li>Out-of-order Execution Planning</li>
          <li>Graph-rewriting (Node fusion and replacement)</li>
        </ul>
        <li>Multi-training framework and runtime support to come</li>
      </ul>
    );
    return (
      <div>
        <section className="hero is-primary is-fullheight-with-navbar">
          <div className="hero-body">
            <div className="container">
              <div className="columns">
                <h1 className="column is-size-1 has-text-centered is-pink">
                  Hands on Embedded Machine Learning
                </h1>
              </div>
              <div className="columns">
                <div className="column is-size-4 has-text-centered-mobile is-pink is-offset-8">
                  built by innovators & for the creators
                </div>
              </div>
              <div className="columns">
                <div className="column is-size-5 is-three-fifths is-offset-1 is-family-secondary">
                  uTensor is a completely free and open source embedded machine
                  learning infrastructure designed for rapid-prototyping and
                  deployment. At the present, the project includes an inference
                  engine, a highly customizable graph processing tool and a data
                  collection framework (work-in-progress). The device code is
                  optimized for hardware with only a few kilobytes of memory.
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-medium is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-variable is-7">
                <div className="column">
                  <h3 className="is-size-3">Embedded Runtime</h3>
                  <p className="is-family-secondary">
                    The core of uTensor is written in C++ and compiles down to
                    less than 2 kilobytes. It supports both online and offline
                    planning for various memory units making it friendly to
                    integrate with your embedded project. Debugging and
                    extending the project is also super easy.
                  </p>
                </div>
                <div className="column">
                  <h3 className="is-size-3">Simple Deployment</h3>
                  <p className="is-family-secondary">
                    uTensor is designed to enable embedded engineers and data
                    scientists to work with each other. Given a trained model,
                    C++ implementation of the model is generated from the
                    Jupyter-notebook with a single function call. The C++ source
                    code is then copy-and-pasted into the embedded project
                    folder to integrate with the application code.
                  </p>
                </div>
                <div className="column">
                  <h3 className="is-size-3">Graph Processing</h3>
                  <p className="is-family-secondary">
                    The advancement of embedded machine learning will come from
                    the ability to quickly experiment and test novel ideas. The
                    SDK is written in Python, enabling anyone to leverage
                    uTensor's existing toolchain for their research and
                    prototypes.
                  </p>
                </div>
                <div className="column">
                  <h3 className="is-size-3">Open Ecosystem</h3>
                  <p className="is-family-secondary">
                    The uTensor inference framework is not owned by anyone. We
                    welcome anyone to join us in pushing the boundaries of
                    machine learning and edge computing. The project currently
                    supports Mbed and Tensorflow. The support of Arduino,
                    PyTorch and others are under development and will be
                    available soon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body is-background-pink">
            <div className="container">
              <div className="buttons has-addons is-centered">
                <button
                  className={
                    displayGenerateCode
                      ? "button is-primary"
                      : "button is-primary is-outlined"
                  }
                  onClick={this.handleChangeDisplayCode}
                >
                  Generated Code
                </button>
                <button
                  className={
                    displayGenerateCode
                      ? "button is-primary is-outlined"
                      : "button is-primary"
                  }
                  onClick={this.handleChangeDisplayCode}
                >
                  Training Code
                </button>
              </div>
              <div className="tile is-ancestor">
                <div className="tile is-parent is-8">
                  <div className="tile is-child box" id="code"></div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child box">
                    <div className="content is-family-secondary">
                      <h4>Feature</h4>
                      {codeFeature}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container">
              <div className="is-size-2 has-text-centered has-text-primary">
                Join the uTensor Communtiy
              </div>
              <div className="has-text-centered">
                <a className="is-size-4 community-link is-pink" href="/">
                  Donate
                </a>
                •
                <a className="is-size-4 community-link is-pink" href="/">
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
