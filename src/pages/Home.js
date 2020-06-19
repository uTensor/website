import React, { Component } from "react";
import "./Home.scss";
import demoVideo from "../assets/uTensor-mNIST-demo.mp4";
import utensorPicture from "../assets/utensor.png";
import GeneratedCode from "../components/GeneratedCode";
import TrainingCode from "../components/TrainingCode";

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
        <section className="hero is-fullheight-with-navbar video">
          <div className="hero-video">
            <video playsInline autoPlay muted loop className="video-background">
              <source src={demoVideo} type="video/mp4" />
            </video>
          </div>
          <div className="hero-body video-cover">
            <div className="container">
              <div className="columns">
                <h1 className="column is-size-1 has-text-centered noto-sans-font cover-title">
                  Hands on Embedded Machine Learning
                </h1>
              </div>
              <div className="columns">
                <div className="column is-size-3 has-text-centered-touch is-offset-6 noto-sans-font cover-subtitle">
                  built by innovators & for the creators
                </div>
              </div>
              <div className="columns">
                <div className="column is-size-5 is-6-desktop is-10 is-offset-1-desktop has-text-centered-tablet noto-sans-font cover-detail">
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
        <section className="hero is-hidden-tablet">
          <video playsInline autoPlay muted loop className="video">
            <source src={demoVideo} type="video/mp4" />
          </video>
        </section>
        <section className="hero is-medium is-light">
          <div className="hero-body">
            <div className="container">
              <div className="columns is-variable is-7">
                <div className="column">
                  <h3 className="is-size-3 ubuntu-font">Embedded Runtime</h3>
                  <p className="noto-sans-font">
                    As little as 2kb, C++ graph implementations can be either
                    hand-coded or auto-generated from trained models.
                  </p>
                </div>
                <div className="column">
                  <h3 className="is-size-3 ubuntu-font">Simple Deployment</h3>
                  <p className="noto-sans-font">
                    From Jupyter-notebooks to MCUs, uTensor is the channel for
                    data scientists and embedded engineers.
                  </p>
                </div>
                <div className="column">
                  <h3 className="is-size-3 ubuntu-font">Graph Processing</h3>
                  <p className="noto-sans-font">
                    Innovating in embedded-ML requires rapid iteration of ideas.
                    uTensor SDK provides easily-customizable graph transformers
                    in Python.
                  </p>
                </div>
                <div className="column">
                  <h3 className="is-size-3 ubuntu-font">Open Ecosystem</h3>
                  <p className="noto-sans-font">
                    uTensor is an embedded-ML infrastructure. Bring your own
                    ops, graph-transformations, or port it to new platforms; it
                    is for everyone.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body">
            <div className="utensor-picture">
              <img alt="utensor" src={utensorPicture}></img>
            </div>
          </div>
        </section>
        <section className="hero">
          <div className="hero-body is-background-utensor">
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
                  <div className="tile is-child code-content">
                    {displayGenerateCode ? <GeneratedCode /> : <TrainingCode />}
                  </div>
                </div>
                <div className="tile is-parent">
                  <div className="tile is-child code-explain">
                    <div className="content is-family-secondary">
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
                Join the uTensor Community
              </div>
              <div className="has-text-centered">
                <a
                  className="is-size-4 community-link is-secondary-color"
                  href="https://opencollective.com/utensorai"
                >
                  Donate
                </a>
                •
                <a
                  className="is-size-4 community-link is-secondary-color"
                  href="https://utensor.slack.com/join/shared_invite/zt-6vf9jocy-lzk5Aw11Z8M9GPf_KS5I~Q#/"
                >
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
