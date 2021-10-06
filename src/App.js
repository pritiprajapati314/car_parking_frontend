import React from 'react';
import '././App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import Navbar from './component/FrontPage/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home'
import Login from './component/pages/login'
import Register from './component/pages/Register'
//import UserPage from './component/UserStyles/UserPage';
function App() {
  return (
    <Provider store = {store}>
    <Router>
      <Navbar/>
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         {/* <Route path='/' exact component = {UserPage}/>  */}
         <Route path='/sign-up' exact component = {Register} />
      </Switch>
    </Router>
    </Provider>
  );
}

export default App;

//main page

//main page