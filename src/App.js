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