import * as React from "react";
import queryString from "query-string";
import Loading from "./loading";
import Title from "./title";
import MetaData from "./metaData";
import { fetchPosts, fetchItem, fetchComments } from "../utils/api";

export default class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: null,
      postLoading: true,
      comments: null,
      commentsLoading: true,
      error: null,
    };
  }
  componentDidMount() {
    const { id } = queryString.parse(this.props.location.search);

    fetchItem(id)
      .then((post) =>
        this.setState({
          post,
          postLoading: false,
          error: null,
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          postLoading: false,
        })
      );
  }

  render() {
    const { postLoading, post, comments, commentsLoading, error } = this.state;
    console.log("Post :", post);

    return (
      <React.Fragment>
        {postLoading ? (
          <Loading text="Loading Post" />
        ) : (
          <div>
            <h1>
              <Title title={post.title} url={post.url} id={post.id} />
            </h1>
            <MetaData
              by={post.by}
              time={post.time}
              descendants={post.descendants}
              id={post.id}
            />
          </div>
        )}
        {commentsLoading ? (
          <Loading text="Loading Comments" />
        ) : (
          <h3>Commments Loaded!</h3>
        )}
      </React.Fragment>
    );
  }
}
