import React from 'react';
import '././App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Landing from './pages/Landing';
import ProtectedRoute from './util/ProtectedRoute';

function App() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path='/' exact component = {Landing} />
          <Route path='/login' exact component = {Login} />
          <Route path='/sign-up' exact component = {Register} />
          <ProtectedRoute exact path='/user-home' component={Home} />
        </Switch>
      </Router>
    </React.Fragment>
  );
}

export default App;
