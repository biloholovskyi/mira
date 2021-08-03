import React, {useState, useEffect, Suspense} from 'react';
import {Redirect, Route, Switch} from "react-router";
import {connect} from "react-redux";
import axios from "axios";

import {loginUser, getAllUsers} from '../../actions/index';

import Login from '../../pages/login/login';
import Registration from '../../pages/registration/registration'
import AuthorizationCode from '../../pages/authorizationCode/authorizationCode';
import TemporaryPassword from '../../pages/temporaryPassword/temporaryPassword';
import Header from '../header/header';
import ForgotPassword from '../../pages/forgotPassword/forgotPassword';
import LeftSideBar from "../leftSideBar/leftSideBar";

//import Dashboard from '../../pages/dashboard/dashboard';
// import Settings from '../../pages/settings/settings';
// import Balance from '../../pages/balance/balance';
// import Faq from '../../pages/faq/faq';
// import Deposit from '../../pages/deposit/deposit';
// import Referral from '../../pages/referral/Referral';
// import Notification from "../../pages/notification/notification";

import ServerSettings from "../../service/serverSettings";

import './App.css'
import Preloader from "../preloader/preloader";
import AdminHeader from "../adminHeader/adminHeader";
import AdminUsers from "../../pages/adminUsers/adminUsers";

// navigation
const Dashboard = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/dashboard/dashboard")), 1500);});});
const Settings = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/settings/settings")), 1500);});});
const Balance = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/balance/balance")), 1500);});});
const Faq = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/faq/faq")), 1500);});});
const Deposit = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/deposit/deposit")), 1500);});});
const Referral = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/referral/Referral")), 1500);});});
const Notification = React.lazy(() => {return new Promise(resolve => {setTimeout(() => resolve(import("../../pages/notification/notification")), 1500);});});

const App = ({loginUser, user, getAllUsers}) => {
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
          setLoading(true);
        }).catch(error => {
          console.error(error)
          localStorage.removeItem('mira_login');
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }

  const getUsers = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/`)
      .then(res => {
        getAllUsers(res.data)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getUsers().catch(error => console.error(error));
  }, [])

  let isAdmin = window.location.pathname.split("/")[1] === "admin";
  if (user.type === 'admin') {
    isAdmin = 'admin'
  }

  return (
    <>
      {
        isAdmin
        ? <AdminHeader/>
        : <LeftSideBar/>
      }
      {
        windowWidth < 900 && (
          <Header/>
        )
      }
      <Suspense fallback={<Preloader/>}>
        <Switch>
          <Route path='/' exact>
            {
              loading
                ? <Redirect to={'/dashboard'}/>
                : <Redirect to={'/login'}/>
            }
          </Route>
          <Route path='/login' exact>
            {
              loading
                ? <Redirect to={'/dashboard'}/>
                : <Login/>
            }
          </Route>
          <Route path='/registration' exact>
            {
              loading
                ? <Redirect to={'/dashboard'}/>
                : <Registration/>
            }
          </Route>
          <Route path='/authorizationCode' exact component={AuthorizationCode}/>
          <Route path='/temporaryPassword' exact component={TemporaryPassword}/>
          <Route path='/dashboard' exact component={Dashboard}>
            {
              loading
                ? <Dashboard/>
                : <Redirect to={'/login'}/>
            }
          </Route>
          <Route path='/settings' exact component={Settings}/>
          <Route path='/balance' exact component={Balance}/>
          <Route path='/faq' exact component={Faq}/>
          <Route path='/deposit' exact component={Deposit}/>
          <Route path='/ref' exact component={Referral}/>
          <Route path='/forgotPassword' exact component={ForgotPassword}/>
          <Route path='/notification' exact component={Notification}/>
          <Route path='/admin/users' exact component={AdminUsers}/>
        </Switch>
      </Suspense>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
    users: state.users
  }
};

const mapDispatchToProps = {
  loginUser,
  getAllUsers
};

export default connect(mapStateToProps, mapDispatchToProps)(App);