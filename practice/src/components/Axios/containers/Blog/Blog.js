import React, { Component } from 'react';
// import axios from "axios";
import './Blog.css';
import Posts from './Posts/Posts';
import { Route , NavLink , Switch, Redirect} from "react-router-dom";
import NewPost from './NewPost/NewPost';


class Blog extends Component {
       render () {
        return (
            <div>
                <header className='Blog'>
                    <nav>
                        <ul>
                            <li><NavLink
                             exact
                             to='/'
                             activeClassName='my-active'
                             activeStyle={{
                                 color:'red',
                                 textDecoration:'underline'
                             }}
                             >Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash:'#submit',
                                search:'?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path='/' exact render={()=><h1>Home</h1>} />
                <Route path='/new-post'  render={()=><h1> New post</h1>} /> */}

                <Switch>
                    <Route path='/new-post' exact component={NewPost} />
                    <Route path='/posts' exact component={Posts} />
                    <Redirect from='/' to='/posts' />
                    {/* <Route path='/' exact component={Posts} /> */}
                </Switch>

                

                
                
            </div>
        );
    }
}

export default Blog;