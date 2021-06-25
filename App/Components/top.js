import * as React from "react";
import {fetchMainPosts} from "../utils/api"
import Loading from "./loading"
import Title from "./title"
import PropTypes from 'prop-types';




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
        {posts.map((post,index) =>
          <li key={index} >
          <Title title={post.title} url={post.url}/>
          </li>
          )}
      </ul>
      }
    </div>
  )
  }
}

Top.propTypes = {
  type: PropTypes.string.isRequired
}
