import React from 'react';
import '././App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home';
import Login from './component/pages/login';
import Register from './component/pages/Register';
import UserPage from './component/pages/UserPage';
import AdminLogin from './component/Admin/AdminLogin';
import AdminPanel from './component/Admin/AdminPanel';
import BookSlot from './component/BookSlot/BookSlot';
import Manager from './component/Admin/Manager'
import Payment from './component/Payments/Payment';
import ManagerLogin from './component/Manger_login';
import ParkingForm from './component/Admin/ParkingForm';
// import ManagerRequest from './component/ManagerRequest'
function App() {
  return (
    <>

    <Router>
    
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         <Route path='/services' exact component = {UserPage}/> 
         <Route path='/sign-up' exact component = {Register} />
         <Route path = '/adminLogin' exact component = {AdminLogin}/>
         <Route path = '/adminPanel' exact component = {AdminPanel}/>
         <Route path = '/bookSlot' exact component = {BookSlot}/>
         <Route path = '/managerLogin' exact component = {ManagerLogin}/>
         {/* <Routh path = '/managerRequest' exact component = {ManagerRequest}/> */}
         <Router path = '/adminPanel/manager' exact component = {Manager} ><Manager/> </Router>
        
         <Router path = '/payments' exact component = {Payment}/>
         <Router path = '/adminPanel/addParking' exact component ={ParkingForm}> <ParkingForm/> </Router>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
