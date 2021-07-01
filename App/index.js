import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Loading from "./Components/loading";

const Top = React.lazy(() => import("./Components/top"));
const User = React.lazy(() => import("./Components/user"));
const Post = React.lazy(() => import("./Components/post"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" render={() => <Top type="top" />} />
              <Route path="/user" component={User} />
              <Route path="/post" component={Post} />
            </Switch>
          </React.Suspense>
        </div>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
