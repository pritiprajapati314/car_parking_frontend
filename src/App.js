import React from 'react';
import '././App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
<<<<<<< HEAD
import Home from './component/pages/home'
import Login from './component/pages/login'
import Register from './component/pages/Register'
import UserPage from './component/pages/userPage';
import AdminLogin from './component/Admin/AdminLogin';
import AdminPanel from './component/Admin/AdminPanel';
=======
import Home from './component/pages/home';
import Login from './component/pages/login';
import Register from './component/pages/Register';
import UserPage from './component/pages/UserPage';
import AdminLogin from './component/Admin/AdminLogin/AdminLogin';
import AdminPanel from './component/Admin/AdminPanel/AdminPanel';
>>>>>>> bf48ee31cfdefc1f0d42147703c2fccb9218c4c9
import BookSlot from './component/BookSlot/BookSlot';
import Manager from './component/Admin/ManagerFile/Manager'
import Payment from './component/Payments/Payment';
<<<<<<< HEAD
import ManagerLogin from './component/Manger_login';
import ParkingForm from './component/Admin/ParkingForm';
// import ManagerRequest from './component/ManagerRequest'
import ManagerPanel from './component/Manager/ManagerPanel';
import Display from './component/VisualDisplay/Display'
=======
import ManagerLogin from './component/Admin/ManagerFile/Manger_login';
import ParkingForm from './component/Parking/ParkingForm';
import ManagerRequest from './component/Admin/ManagerFile/ManagerRequest'
import Success from './component/Admin/ManagerFile/Success';
import ManagerViews from './component/pages/ManagerView';
import DetailedViews from './component/pages/DetailedViews';
>>>>>>> bf48ee31cfdefc1f0d42147703c2fccb9218c4c9
function App() {
  return (
    <>

    <Router>
    
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         <Route path='/services' exact component = {UserPage} /> 
         <Route path='/sign-up' exact component = {Register} />
         <Route path = '/adminLogin' exact component = {AdminLogin}/>
         <Route path = '/adminPanel' exact component = {AdminPanel}/>
         <Route path = '/bookSlot' exact component = {BookSlot}/>
         <Route path = '/managerLogin' exact component = {ManagerLogin}/>
<<<<<<< HEAD
         {/* <Route path = '/managerRequest' exact component = {ManagerRequest}/> */}
         <Router path = '/adminPanel/manager' exact component = {Manager} ><Manager/> </Router>
        <Route path= '/managerPanel' exact component={ManagerPanel}/>
        <Route path= '/Display' exact component={Display}/>

=======
         <Route path = '/managerRequest' exact component = {ManagerRequest}/>
         <Route path = '/managerRequest/managerLogin' exact component = {ManagerLogin} > <ManagerLogin/> </Route>
         <Route path = '/managerRequest/Success' exact component = {Success} > <Success/> </Route>
         <Router path = '/adminPanel/manager' exact component = {Manager} ><Manager/> </Router>
         <Router path = '/adminPanel/managerRequestView' exact component = {ManagerViews} ><ManagerViews/> </Router>
         <Router path = '/detailedView' exact component = {DetailedViews} ><DetailedViews/> </Router>
>>>>>>> bf48ee31cfdefc1f0d42147703c2fccb9218c4c9
         <Router path = '/payments' exact component = {Payment}/>
         <Router path = '/adminPanel/addParking' exact component ={ParkingForm}> <ParkingForm/> </Router>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
