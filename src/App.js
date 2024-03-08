import logo from './logo.svg';
import './App.css';
import React,{ useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './components/Header';
import Body from './components/Body';



function App() {

  console.log(<Body/>)
  const {props, type} = <Body></Body>
  console.log("this is Type", type);
  return (
    <div className="App">
      <header className="App-header">
        <Header/>
        <Body></Body>
      </header>
    </div>
  );

}

export default App;
