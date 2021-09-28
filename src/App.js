import React from 'react';
import '././App.css';
import Navbar from './component/FrontPage/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home'
import Login from './component/pages/login'
import Register from './component/pages/Register'
import UserPage from './component/pages/UserPage';
// import AdminPanel from './component/pages/AdminPanels';
// import AdminLogin from './component/pages/AdminLogins'
function App() {
  return (
    <>
    <Router>
      {/* <Navbar/> */}
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         <Route path='/services' exact component = {UserPage}/> 
         <Route path='/sign-up' exact component = {Register} />
         {/* <Route path = '/adminPanel' exact component = {AdminPanel}/>
         <Route path = '/adminLogin' exact component = {AdminLogin}/> */}
      </Switch>
    </Router>
      
    </>
  );
}

export default App;

//main page