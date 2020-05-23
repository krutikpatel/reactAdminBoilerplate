import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import SidebarContent from './components/SidebarContent';
import ContentWrapper from './components/ContentWrapper';

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <Header></Header>
        <Menu></Menu>
        <ContentWrapper></ContentWrapper>
        <SidebarContent></SidebarContent>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
/*
<header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
*/