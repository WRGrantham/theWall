import React, {Component} from 'react';
import Axios from 'axios';
import PostItem from "./PostItem.js";

class Dashboard extends Component {
   constructor(props){
       super(props);
       this.state = {posts: false}
   }
   render() {
        if(this.state.posts){
            var wallPosts = this.state.posts.map((singlePost) =>{
                return <PostItem key={singlePost._id} post={singlePost} />
            })
            return(
                <div>
                    <h1>Nothing</h1>
                    {wallPosts}
                </div>
            )
        } else {
            return <h1>Loading Forever</h1>
        }
   }
   componentDidMount(){
       this.getPosts();
   }
    getPosts = () => {
       Axios.get(`http://54.245.42.196/posts/${this.props.match.params.user_id}`, { headers: {
           Authorization: localStorage.getItem("jw-token")}
       }).then((result) => {
           console.log(result);
           this.setState({
               posts: result.data.posts
           })
       }).catch((err) => {
           console.log("unsuccessful");
       })
   }
}
export default Dashboard;