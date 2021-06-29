import React, {useState, useEffect} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {connect} from "react-redux";
import axios from "axios";

import {loginUser} from '../../actions/index';

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
import Referral from '../../pages/referral/Referral';
import ForgotPassword from '../../pages/forgotPassword/forgotPassword';

import ServerSettings from "../../service/serverSettings";

import './App.css'

const App = () => {
  const [loading, setLoading] = useState(false);
  // записиваем дание от пользователе
  const [user, setUser] = useState({});
  console.log(user)
// window width
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handlerResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => handlerResize())
  }, [])

  useEffect(() => {
    _checkToken().catch(error => console.error(error));
  }, [])

  // получаем залогиненого пользователя
  const _checkToken = async () => {
    // получаем токен из стора
    const token = JSON.parse(localStorage.getItem("mira_login"));
    if (token) {
      const statusToken = token.email;
      // если токен не верный удалаем его
      if (!statusToken) {
        localStorage.removeItem('mira_login');
        setLoading(false);
        return
      }
      // получить данные с сервера о нужном пользователе
      axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
      axios.defaults.xsrfCookieName = 'csrftoken';

      const server = new ServerSettings();

      await axios.get(`${server.getApi()}api/users/${statusToken}/`)
        .then(res => {
          loginUser(res.data);
          setUser(res.data)
          setLoading(true);

        }).catch(error => {
          console.log(error)
          localStorage.removeItem('mira_login');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }

  return (
    <>
      <LeftSideBar user={user}/>
      {
        windowWidth < 900 && (
          <Header user={user}/>
        )
      }

      <Switch>
        <Route path='/' exact>
          {
            localStorage.getItem('mira_login')
              ? <Redirect to={'/dashboard'}/>
              : <Redirect to={'/login'}/>
          }
        </Route>
        <Route path='/login' exact component={Login}/>
        <Route path='/registration' exact component={Registration}/>
        <Route path='/authorizationCode' exact component={AuthorizationCode}/>
        <Route path='/temporaryPassword' exact component={TemporaryPassword}/>
        <Route path='/dashboard' exact component={Dashboard}/>
        <Route path='/settings' exact >
          <Settings user={user}/>
        </Route>
        <Route path='/balance' exact component={Balance}/>
        <Route path='/faq' exact component={Faq}/>
        <Route path='/deposit' exact component={Deposit}/>
        <Route path='/ref' exact component={Referral}/>
        <Route path='/forgotPassword' exact component={ForgotPassword}/>
      </Switch>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(App);