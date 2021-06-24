import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Top from "./Components/top";

class App extends React.Component {
  render() {
    return (
      <div>
        <Top />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
