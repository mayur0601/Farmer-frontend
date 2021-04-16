import React from 'react';
import './App.css';
import Navbar from './components/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import About from './pages/about';
import login from './pages/login';
// import Contact from './pages/contact';
import SignUp from './pages/signup';
import axios from "axios";

  axios.defaults.headers.post['Content-Type'] ='application/json;charset=utf-8';
  axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' component={About} />

        <Route path='/login' component={login} />
        {/* <Route path='/contact-us' component={Contact} /> */}
        <Route path='/sign-up' component={SignUp} />
      </Switch>
    </Router>
  );
}

export default App;