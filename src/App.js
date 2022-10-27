import React from "react";
import Opcoes from "./components/Opcoes";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fruta: "banana",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    console.log("Fruta selecionda!!!");
    this.setState({ fruta: e.target.value });
  }

  render() {
    return (
      <div id="App">
        <div className="select-container">
          <select value={this.state.fruta} onChange={this.handleChange}>
            {Opcoes.map((option, index) => (
              <option  key={index} value={option.value}>{option.label}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default App;
