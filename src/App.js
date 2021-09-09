import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home'
import Login from './component/pages/userPage'
import UserPage from './component/UserPage'
function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         {/* <Route path='/' exact component = {UserPage}/>  */}
      </Switch>
    </Router>
      
    </>
  );
}

export default App;

//main page