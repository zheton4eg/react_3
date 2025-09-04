import React from 'react';
import './Post.css';

class Post extends React.Component{
    constructor(props)
    {
        super(props);
        // this.setState({this.state.title=props.title})
        // this.setState({this.state.content=props.content})
        this.state=
        {
            title:props.title,
            content:props.content
        }
    }
    // state =
    // {
    //     title:"",
    //     content:"",
    // }
    render()
    {
        return(
            <div>
                <h2>{this.state.title}</h2>
                <p>{this.state.content}</p>
            </div>
        )
    }
}
export default Post;