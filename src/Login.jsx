import React from "react";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.interval = null;
  }

  // Method to start the counter
  start = () => {
    if (this.interval !== null) return; // Prevent multiple intervals

    this.interval = setInterval(() => {
      this.setState((prevState) => ({
        count: prevState.count === 9 ? 0 : prevState.count + 1
      }));
    }, 1000);
  };

  // Method to stop the counter
  stop = () => {
    if (this.interval !== null) {
      clearInterval(this.interval);
      this.interval = null;
    }
  };

  // Cleanup interval on component unmount
  componentWillUnmount() {
    this.stop();
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
      </div>
    );
  }
}

export default Login;
