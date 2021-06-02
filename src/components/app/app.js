import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router";

import Login from '../pages/login/login';
import Registration from '../pages/registration/registration'
import AuthorizationCode from '../pages/authorizationCode/authorizationCode';
import TemporaryPassword from '../pages/temporaryPassword/temporaryPassword';
import Dashboard from '../pages/dashboard/dashboard';
import Header from "../header/header";

import './App.css'

const App = () => {

  const [loading, setLoading] = useState(false);

  return (
    <>
      <Header/>

      <Switch>

        <Route path='/' exact>
          {
            loading
              ? null
              : <Redirect to={'/login'}/>
          }
        </Route>

        <Route path='/login' exact>
          <Login/>
        </Route>

        <Route path='/registration' exact>
          <Registration/>
        </Route>

        <Route path='/authorizationCode' exact>
          <AuthorizationCode/>
        </Route>

        <Route path='/temporaryPassword' exact>
          <TemporaryPassword/>
        </Route>

        <Route path='/dashboard' exact>
          <Dashboard/>
        </Route>

      </Switch>
    </>
  )
}

export default App;