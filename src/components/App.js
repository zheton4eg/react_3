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
import Quiz from './quiz/Quiz.js';

// Импортируем текстовые файлы
import article1 from './articles/article1.txt';
import article2 from './articles/article2.txt';
import article3 from './articles/article3.txt';

class App extends React.Component{
  // state=
  // {
  //   posts:
  //   [
  //     {id:"1",title:"Процудурное программирование на языке C++",content:"Изучаются юазовые консьрукции языка C++"},
  //     {id:"2",title:"Объектно-ориентированнное программирование на языке C++",content:"Изучаются базовые концепции ООП"},
  //     {id:"3",title:"DataContainers",content:"Изучаются основные структуры данных, и контейнеры, основанные на них"}
  //   ]
  // }
   constructor(props) {
    super(props);
    this.state = {
      posts: [],
      loading: true
    };
  }

  componentDidMount() {
    // Загружаем содержимое всех текстовых файлов
    Promise.all([
      fetch(article1).then(response => response.text()),
      fetch(article2).then(response => response.text()),
      fetch(article3).then(response => response.text())
    ])
    .then(contents => {
      // Парсим содержимое файлов
      const posts = contents.map((content, index) => {
        // Разделяем заголовок и содержимое (первая строка - заголовок)
        const lines = content.split('\n');
        const title = lines[0];
        const contentText = lines.slice(1).join('\n');
        
        return {
          id: (index + 1).toString(),
          title: title,
          content: contentText
        };
      });
      
      this.setState({
        posts: posts,
        loading: false
      });
    })
    .catch(error => {
      console.error('Ошибка загрузки статей:', error);
      this.setState({ loading: false });
    });
  }
  render() {
     const { posts, loading } = this.state;

    if (loading) {
      return <div>Загрузка статей...</div>;
    }
    return (
      <div className="App">
     <Header />
     {/* <Hello/>
     <Length/>
     <NumberConverters/>
     <Form/>
     <Range/> */}
     {typeof(this.state)}
    {/* <Posts posts={this.state.posts}/> */}
       <Posts posts={posts} />
    {/* <Post title ="Title" content="Content"/> */}
    <Quiz/>
    </div>
  );
}
}
export default App;
 