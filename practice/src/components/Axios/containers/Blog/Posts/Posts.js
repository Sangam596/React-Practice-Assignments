import React, { Component } from 'react'
import axios from "../../../../../axios";
import Post from '../../../components/Post/Post';
import "./Posts.css";
import { Route } from "react-router-dom";
import FullPost from '../../Blog/FullPost/FullPost';



export class Posts extends Component {
    state={
        posts:[]
    }
    componentDidMount(){
        console.log(this.props);
        axios.get('/posts')
            .then(response=>{
                const posts =response.data.slice(0,4)
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author:'Sangam'
                    }
                })
                this.setState({posts:updatedPosts})
                // console.log(result)}
            } ).catch(error=>{
                // this.setState({error:true})
                console.log(error)}
                )
    }
    postSelectedHandler = (id) =>{
        this.props.history.push({pathname:'/'+id});
        this.props.history.push('/posts/' + id);
    }
    render() {
        let posts = <p style={{textAlign:'centre'}}>Something Went Wrong!</p>
        if(!this.state.error){
            posts = this.state.posts.map(post=>{
                return (
                // <Link  to={'/posts/'+post.id}>
                        <Post 
                            key={post.id}
                            {...this.props} 
                            title={post.title} 
                            author={post.author} 
                            clicked={()=>this.postSelectedHandler(post.id)}
                            />
                    // </Link>
                    )
            })
        }
        return (
           <diiv>
                <section className="Posts">
                    {posts}
                </section>
                <Route path={this.props.match.url+'/:id'} exact component={FullPost} />
           </diiv>
        )
    }
}

export default Posts
