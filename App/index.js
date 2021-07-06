import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./index.css";
import Loading from "./Components/loading";
import Nav from "./Components/nav";
import { ThemeProvider } from "./contexts/theme";

const PostList = React.lazy(() => import("./Components/postList"));
const User = React.lazy(() => import("./Components/user"));
const Post = React.lazy(() => import("./Components/post"));

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      toggleTheme: () => {
        this.setState(({ theme }) => ({
          theme: theme === "light" ? "dark" : "light",
        }));
      },
    };
  }
  render() {
    return (
      <Router>
        <ThemeProvider value={this.state}>
          <div className={this.state.theme}>
            <div className="container">
              <Nav />
              <React.Suspense fallback={<Loading />}>
                <Switch>
                  <Route
                    exact
                    path="/"
                    render={() => <PostList type="top" />}
                  />
                  <Route path="/new" render={() => <PostList type="new" />} />
                  <Route path="/user" component={User} />
                  <Route path="/post" component={Post} />
                </Switch>
              </React.Suspense>
            </div>
          </div>
        </ThemeProvider>
      </Router>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
