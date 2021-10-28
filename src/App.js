import React from 'react';
import { withRouter } from 'react-router';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './component/pages/home';
import Login from './component/pages/login';
import Register from './component/pages/Register';
import userPage from './component/pages/userPage';
import AdminLogin from './component/Admin/AdminLogin/AdminLogin';
import AdminPanel from './component/Admin/AdminPanel/AdminPanel';
import BookSlot from './component/BookSlot/BookSlot';
import Manager from './component/Admin/ManagerFile/Manager'
import Payment from './component/Payments/Payment';
import ManagerLogin from './component/Admin/ManagerFile/Manger_login';
import ParkingForm from './component/Parking/ParkingForm';
import ManagerRequest from './component/Admin/ManagerFile/ManagerRequest'
import Success from './component/Admin/ManagerFile/Success';
import ManagerViews from './component/pages/ManagerView';
import DetailedViews from './component/pages/DetailedViews';
import DetailedView from './component/Admin/ManagerFile/DetailedView';
import Searchpage from './component/BookSlot/Searchpage';
import UserProfile from './component/pages/UserProfile';
import ApprovedManager from './component/pages/ApprovedManager';
import ParkingDisplay from './component/pages/ParkingDisplay';
import DenyMessage from './component/Admin/ManagerFile/DenyMessage';
import VisualLayout from './component/VisualDisplay/VisualLayout';
// import ManagerPanel2 from './ManagerPanel-2/ManagerPanel-2';
function App() {
  return (
    <>

    <Router>
    
      <Switch>
        <Route path='/' exact component = {Home} />
        <Route path='/login' exact component = {Login} />
         <Route path='/services' exact component = {userPage}/> 
         <Route path='/sign-up' exact component = {Register} />
         <Route path = '/adminLogin' exact component = {AdminLogin}/>
         <Route path = '/adminPanel' exact component = {AdminPanel}/>
         <Route path = '/bookSlot' exact component = {BookSlot}/>
         <Route path = '/managerLogin' exact component = {ManagerLogin}/>
         <Route path = '/managerRequest' exact component = {ManagerRequest}/>
         <Route path = '/detailedView/:id' exact component ={withRouter(DetailedView)}/>
         <Route path='/UserProfile' exact component={UserProfile}/>
         <Route path='/VisualLayout' exact component={VisualLayout}/>
         {/* <Route path='/mypanel' exact component={ManagerPanel2}/> */}
         
         <Route path = '/managerRequest/managerLogin' exact component = {ManagerLogin} > <ManagerLogin/> </Route>
         <Route path = '/managerRequest/Success' exact component = {Success} > <Success/> </Route>
         <Route path = '/adminPanel/manager' exact component = {Manager}/>
         <Route path = '/adminPanel/managerRequestView' exact component = {ManagerViews} />
         <Route path = '/payments' exact component = {Payment}/>
         <Route path = '/adminPanel/addParking' exact component ={ParkingForm}/>
         <Route path = '/Searchpage' exact component = {Searchpage}/>
         <Route path = '/approvedManager' exact component = {ApprovedManager}/>
         <Route path = '/parkingDisplay' exact component = {ParkingDisplay}/>
         <Route path = '/denyRequest' exact component = {DenyMessage}/>
      </Switch>
    </Router>
      
    </>
  );
}

export default App;
