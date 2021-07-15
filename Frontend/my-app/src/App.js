import React, { Fragment } from 'react';
// import '../public/index.html/bootstrap.min.css';
import './App.css';
import Navbar from './component/layout/Navbar.js';
import Landing from './component/layout/landing.js'
import Login from './component/auth/login';
import Register from './component/auth/signup';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Fragment>
        <Route exact path="/" component={Landing}/>
        <section className="container">
          <switch>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/login" component={Login}/>
          </switch>
        </section>
        <Navbar />
      </Fragment>
    </Router>
  );
}

export default App;
