import * as React from "react";
import {fetchMainPosts} from "../utils/api"
import Loading from "./loading"




export default class Top extends React.Component{

  constructor(props){
    super(props)

    this.state = {
      posts: null,
      error: null,
      loading: true
    }
   this.handleFetch = this.handleFetch.bind(this)
  }

  componentDidMount(){
    this.handleFetch()

  }
  
  handleFetch(){
    this.setState({
      posts: null,
      error: null,
      loading: true
    })
    
    fetchMainPosts(this.props.type)
    .then((posts)=> this.setState({
      posts,
      error: null,
      loading: false
    }))
    .catch(({ message }) => this.setState({
      error: message,
      loading: false
    }))
    
  }
  render() {
  const {posts, loading} = this.state
    return (
      <div>
      { loading === true ? <Loading speed={250}/> :
        <ul>
          {posts.map((post) =>
            <li key={post.url} >
            <h4>{post.title}</h4>
            </li>
            )}
        </ul>
        }
      </div>
    )
  }
}

