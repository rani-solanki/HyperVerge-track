import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Navbar from './component/layout/Navbar.js';
import Landing from './component/layout/Landing.js';
import Login from './component/auth/Login';
import Register from './component/auth/Signup';
import AdminSignup from './component/Admin/Signup';
import AdminLogin from './component/Admin/Login';
import { Provider } from 'react-redux';
import store from './store';
// import Alert from './component/layout/Aleart';
import setAuthToken from './utils/isAuthantication';
import { loadUser } from './action/auth';
import SearchBar from './component/layout/SearchBar';
import Buses from './component/Buses/Bus';
import BookTicket from './component/Buses/bookTickets';
import About from './component/About/about';
import AddAgency from './component/AdminDatabase/Addagency';
import AddBusStaff from './component/AdminDatabase/Addstaff';
import AddLocation from './component/AdminDatabase/AddLocation'; 
import AddBus from './component/AdminDatabase/AddBus';
import dashboardAction from './component/AdminDatabase/Dashbord';
import Tickets from './component/Tickets/Tickets';

if (localStorage.token){
  setAuthToken(localStorage.token);
}

const App =()=>{
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store} >
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={AdminSignup} />
              <Route exact path="/searchBar" component={SearchBar} />
              <Route exact path="/adminLogin" component={AdminLogin} />
              <Route exact path="/buses" component={Buses} />
              <Route exact path='/bus/:busId/bookTickets' component={BookTicket} />
              <Route exact path='/about' component={About} />
              <Route exact path='/addAgency' component={AddAgency}/>
              <Route exact path='/addStaff' component={AddBusStaff}/>
              <Route exact path='/addLocation' component={AddLocation}/>
              <Route exact path='/addBus' component={AddBus}/>
              <Route exact path='/dashboardAction' component={dashboardAction}/>
              <Route exact path ='/tickets' component={Tickets}/>
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
