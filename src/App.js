import React from 'react';
import '././App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home';
import Login from './component/pages/login';
import Register from './component/pages/Register';

function App() {
  return (
    <>

    <Router>
    
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         <Route path='/sign-up' exact component = {Register} />
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
