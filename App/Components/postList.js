import * as React from "react";
import { fetchMainPosts } from "../utils/api";
import Loading from "./loading";
import Title from "./title";
import MetaData from "./metaData";
import PropTypes from "prop-types";

export default class PostList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      error: null,
      loading: true,
    };
    this.handleFetch = this.handleFetch.bind(this);
  }

  componentDidMount() {
    this.handleFetch();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.type !== this.props.type) {
      this.handleFetch();
    }
  }

  handleFetch() {
    this.setState({
      posts: null,
      error: null,
      loading: true,
    });

    fetchMainPosts(this.props.type)
      .then((posts) =>
        this.setState({
          posts,
          error: null,
          loading: false,
        })
      )
      .catch(({ message }) =>
        this.setState({
          error: message,
          loading: false,
        })
      );
  }

  render() {
    const { posts, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loading speed={250} />
        ) : (
          <ul>
            {posts.map((post, index) => (
              <li key={index} className="post">
                <Title title={post.title} url={post.url} id={post.id} />
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
      </div>
    );
  }
}

PostList.propTypes = {
  type: PropTypes.string.isRequired,
};
