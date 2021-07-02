import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Loading from "./Components/loading";
import Nav from "./Components/nav";

const PostList = React.lazy(() => import("./Components/postList"));
const User = React.lazy(() => import("./Components/user"));
const Post = React.lazy(() => import("./Components/post"));

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="container">
          <Nav />
          <React.Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path="/" render={() => <PostList type="top" />} />
              <Route path="/new" render={() => <PostList type="new" />} />
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
