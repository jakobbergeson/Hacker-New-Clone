import * as React from "react";
import queryString from "query-string";
import Loading from "./loading";
import { fetchUser, fetchPosts } from "../utils/api";

export default class User extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      userLoading: true,
      posts: null,
      postsLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    fetchUser(id)
      .then((user) => {
        this.setState({ user, userLoading: false });

        return fetchPosts(user.submitted.slice(0, 30));
      })
      .then((posts) =>
        this.setState({
          posts,
          loadingPosts: false,
          error: null,
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          userLoading: false,
          postsLoading: false,
        })
      );
  }

  render() {
    const { userLoading, user, posts, postsLoading, error } = this.state;
    return (
      <React.Fragment>
        {userLoading ? <Loading text="Loading User" /> : <h1>{user.id}</h1>}
      </React.Fragment>
    );
  }
}
