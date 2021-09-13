import React from 'react';
import '././App.css';
import Navbar from './component/FrontPage/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home'
import Login from './component/pages/userPage'
import Register from './component/pages/Register'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         {/* <Route path='/' exact component = {UserPage}/>  */}
         <Route path='/sign-up' exact component = {Register} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;

//main page