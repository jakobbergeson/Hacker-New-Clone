import * as React from "react";
import queryString from "query-string";
import Loading from "./loading";
import Title from "./title";
import MetaData from "./metaData";
import Comments from "./comments";
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
      .then((post) => {
        this.setState({
          post,
          postLoading: false,
          error: null,
        });

        return fetchComments(post.kids || []);
      })
      .then((comments) =>
        this.setState({
          comments,
          commentsLoading: false,
          error: null,
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          postLoading: false,
          commentsLoading: false,
        })
      );
  }

  render() {
    const { postLoading, post, comments, commentsLoading, error } = this.state;

    if (error) {
      return <p>{error}</p>;
    }

    return (
      <React.Fragment>
        {postLoading ? (
          <Loading text="Loading Post" />
        ) : (
          <React.Fragment>
            <h1>
              <Title title={post.title} url={post.url} id={post.id} />
            </h1>
            <MetaData
              by={post.by}
              time={post.time}
              descendants={post.descendants}
              id={post.id}
            />
            <p dangerouslySetInnerHTML={{ __html: post.text }} />
          </React.Fragment>
        )}
        {commentsLoading ? (
          <Loading text="Loading Comments" />
        ) : (
          <Comments comments={comments} />
        )}
      </React.Fragment>
    );
  }
}
