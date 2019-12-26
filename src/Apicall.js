import React, {Component} from 'react';
import axios from 'axios';

class Apicall extends Component {

  componentWillMount(){
    this.getReddit();
  }

  getReddit(){
    const promise = axios.get("https://www.reddit.com/r/"+this.state.subr+".json");
    promise
    .then(resp=>{
      const posts = resp.data.data.children.map(obj=>obj.data);
      this.setState({posts:posts});
    })
    .catch(e=>{});
  }

  constructor(props){
    super(props);

    this.state = {
      posts:[],
      subr:'space'
    };

    this.getReddit = this.getReddit.bind(this);
  }
  render(){
    return(
      <div>
        <h1>{`/r/${this.state.subr}`}</h1>
        <ul>
          {this.state.posts.map(post =>
          <li key={post.id}>
          {post.title}
          </li>
        )}
        </ul>
      </div>
    );
  }
}

export default Apicall;
