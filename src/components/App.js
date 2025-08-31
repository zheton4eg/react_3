import React from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from './header/Header.js';
import Hello from './hello/Hello.js';

class App extends React.Component{

  render() {
    return (
      <div className="App">
     <Header />
     <Hello/>
    </div>
  );
}

}
export default App;
