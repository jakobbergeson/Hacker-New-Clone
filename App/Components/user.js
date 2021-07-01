import * as React from "react";
import queryString from "query-string";
import Loading from "./loading";
import Title from "./title";
import MetaData from "./metaData";
import { fetchUser, fetchPosts } from "../utils/api";
import { formatDate } from "../utils/time";

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
          postsLoading: false,
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
    console.log("user: ", user);
    console.log("posts :", posts);

    return (
      <React.Fragment>
        {userLoading ? (
          <Loading text="Loading User" />
        ) : (
          <div className="meta-data">
            <h1>{user.id}</h1>
            <span>
              joined <strong>{formatDate(user.created)}</strong>{" "}
            </span>
            <span>
              has <strong>{user.karma}</strong> karma
            </span>
          </div>
        )}
        <h2>Posts</h2>
        {postsLoading ? (
          <Loading text="Loading Posts" />
        ) : (
          <ul>
            {posts.map((post, index) => (
              <li key={index} className="post">
                <Title title={post.title} url={post.url} />
                <MetaData
                  by={post.by}
                  time={post.time}
                  descendants={post.descendants}
                  id={post.id}
                />
              </li>
            ))}
          </ul>
        )}
      </React.Fragment>
    );
  }
}
