import React, {useState, useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router";

import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration'
import AuthorizationCode from '../../pages/authorizationCode/authorizationCode';
import TemporaryPassword from '../../pages/temporaryPassword/temporaryPassword';
import Dashboard from '../../pages/dashboard/dashboard';
import LeftSideBar from "../leftSideBar/leftSideBar";
import Settings from '../../pages/settings/settings';
import Balance from '../../pages/balance/balance';
import Faq from '../../pages/faq/faq';
import Deposit from '../../pages/deposit/deposit';
import Header from '../header/header';

import './App.css'

const App = () => {
  const [loading, setLoading] = useState(false);
// window width
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handlerResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => handlerResize())
  }, [])

  return (
    <>
      <LeftSideBar/>
      {
        windowWidth < 900 && (
          <Header/>
        )
      }

      <Switch>
        <Route path='/' exact>
          {
            loading
              ? null
              : <Redirect to={'/login'}/>
          }
        </Route>
        <Route path='/login' exact component={Login}/>
        <Route path='/registration' exact component={Registration}/>
        <Route path='/authorizationCode' exact component={AuthorizationCode}/>
        <Route path='/temporaryPassword' exact component={TemporaryPassword}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/settings' exact component={Settings}/>
        <Route path='/balance' exact component={Balance}/>
        <Route path='/faq' exact component={Faq}/>
        <Route path='/deposit' exact component={Deposit}/>
      </Switch>
    </>
  )
}

export default App;