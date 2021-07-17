import React, { Fragment, useEffect } from 'react';
import './App.css';
import Navbar from './component/layout/Navbar.js';
import Landing from './component/layout/landing.js';
import Login from './component/auth/login';
import Register from './component/auth/signup';
import AdminSignup from './component/Admin/Signup'
import AdminLogin from './component/Admin/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import Alert from './component/layout/Aleart';
import setAuthToken from './utils/isAuthantication';
import { loadUser } from './action/auth';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  return (
    <Provider store={store} >
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <section className="container">
            {/* <Alert /> */}
            <switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/signup" component={AdminSignup}/>
              <Route exact path="/adminLogin" component={AdminLogin}/>
            </switch>
            <Navbar />
          </section>
        
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
