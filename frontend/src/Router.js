import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Home from './components/home/Home';
import Homepage from './components/home/Homepage';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import CoacheeInst from './components/instructions/CoacheeInst';
import CoachInst from './components/instructions/CoachInst';

//import './App.css';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/CoacheeInst" component={CoacheeInst} />
      <Route exact path="/CoachInst" component={CoachInst} />
    </Switch>
  </BrowserRouter>
);

export default Router;