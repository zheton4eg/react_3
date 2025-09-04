import React from 'react';
import Post from '../post/Post.js';
import './Posts.css'

class Posts extends React.Component{
    constructor(props)
    {
        super(props)
        this.state=
        {
            props:props
        }
    }
    render()
    {
        return(
            <div>
                {
            //    typeof(this.state.props)
                 
                    this.state.props.posts.map(
                        post=>
                        (
                            <Post id={post.key}title={post.title}content={post.content}/>
                        )
                    )
                }
            </div>
        )
    }
}
export default Posts;