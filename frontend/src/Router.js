import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
//import Home from './components/home/Home';
import Homepage from './components/home/Homepage';
import Signup from './components/auth/Signup';
import Login from './components/auth/Login';
import Profile from './components/auth/Profile';
import CoacheeInst from './components/instructions/CoacheeInst';
import CoachInst from './components/instructions/CoachInst';
import QuizVida from './components/quiz/QuizVida';
import QuizCarrera from './components/quiz/QuizCarrera';
//import './App.css';


const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/coacheeInst" component={CoacheeInst} />
      <Route exact path="/CoachInst" component={CoachInst} />
      <Route exact path="/QuizVida" component={QuizVida} />
      <Route exact path="/QuizCarrera" component={QuizCarrera} />
      {/* <Route exact path="/QuizCarrera" component={QuizCarrera} /> */}
    </Switch>
  </BrowserRouter>
);

export default Router;