import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';
import Length from './length/Length.js';
import NumberConverters from './numberConventers/NumberConventers.js';
import Form from './form/Form.js';
import Range from './range/Range.js';
import Posts from './posts/Posts.js';
import Post from './post/Post.js';


class App extends React.Component{
  state=
  {
    posts:
    [
      {id:"1",title:"Процудурное программирование на языке C++",content:"Изучаются юазовые консьрукции языка C++"},
      {id:"2",title:"Объектно-ориентированнное программирование на языке C++",content:"Изучаются базовые концепции ООП"},
      {id:"3",title:"DataContainers",content:"Изучаются основные структуры данных, и контейнеры, основанные на них"}
    ]
  }
  render() {
    return (
      <div className="App">
     <Header />
     {/* <Hello/>
     <Length/>
     <NumberConverters/>
     <Form/>
     <Range/> */}
     {typeof(this.state)}
    <Posts posts={this.state.posts}/>
    {/* <Post title ="Title" content="Content"/> */}
    </div>
  );
}
}
export default App;
