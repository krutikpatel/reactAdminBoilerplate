import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import SidebarContent from './components/SidebarContent';
import ContentWrapper from './components/ContentWrapper';
import Login2 from './components/Login2';
import LandingPage from './components/LandingPage';

function App() {
  return (
    <BrowserRouter>
      <Login2></Login2>
      <LandingPage></LandingPage>
    </BrowserRouter>
  );
}

export default App;

/*
moved to login page
      <div className="wrapper">
        <Header></Header>
        <Menu></Menu>
        <ContentWrapper></ContentWrapper>
        <SidebarContent></SidebarContent>
        <Footer></Footer>
      </div>
    
*/