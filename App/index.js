import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Loading from "./Components/loading";

const Top = React.lazy(() => import("./Components/top"));
const User = React.lazy(() => import("./Components/user"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" render={() => <Top type="top" />} />
              <Route path="/user" component={User} />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
