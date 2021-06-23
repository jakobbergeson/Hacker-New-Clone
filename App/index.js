import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Landing from "./Components/landing";

class App extends React.Component {
  render() {
    return (
      <div>
        <Landing />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
