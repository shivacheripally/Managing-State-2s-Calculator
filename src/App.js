import React from "react";
import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.add2 = this.add2.bind(this);
    this.Square = this.Square.bind(this);
    this.Double = this.Double.bind(this);
    this.DividedBy2 = this.DividedBy2.bind(this);
    this.Substract2 = this.Substract2.bind(this);
  }
  add2() {
    this.setState({
      count: this.state.count + 2
    });
  }
  Square() {
    this.setState({
      count: Math.pow(this.state.count, 2)
    });
  }

  Double() {
    this.setState({
      count: this.state.count * 2
    });
  }
  DividedBy2() {
    this.setState({
      count: this.state.count / 2
    });
  }
  Substract2() {
    this.setState({
      count: this.state.count - 2
    });
  }
  render() {
    return (
      <div className="calc">
        <h1>{this.state.count}</h1>
        <div className="btns">
          <button onClick={this.add2}>add2!</button>
          <button onClick={this.Square}>Square!</button>
          <button onClick={this.Double}>Double!</button>
          <button onClick={this.DividedBy2}>DividedBy2!</button>
          <button onClick={this.Substract2}>Substract2!</button>
        </div>
      </div>
    );
  }
}

export default App;
