import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Login2 from './components/Login2';
import LandingPage from './components/LandingPage';
import ProtectedRoute from './components/ProtectedRoute';
import { Route, Switch } from 'react-router-dom';

/*
Login and rounting ref:
https://medium.com/javascript-in-plain-english/how-to-set-up-protected-routes-in-your-react-application-a3254deda380

Imp:
how to stay logged in even after page refresh : use localstorage to store JWT
https://stackoverflow.com/questions/39097440/on-react-router-how-to-stay-logged-in-state-even-page-refresh

*/

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={Login2} />
        <ProtectedRoute exact={true} path="/" component={LandingPage} />
        {/* <ProtectedRoute path="/settings" component={Settings} /> */ }
        <ProtectedRoute component={LandingPage} />
      </Switch>      
    </BrowserRouter>
  );
}

export default App;

/*
    <Login2></Login2>
      <LandingPage></LandingPage>

moved to login page
      <div className="wrapper">
        <Header></Header>
        <Menu></Menu>
        <ContentWrapper></ContentWrapper>
        <SidebarContent></SidebarContent>
        <Footer></Footer>
      </div>
    
*/