import React, {useState} from 'react';
import {Redirect, Route, Switch} from "react-router";

import Login from '../pages/login/login';
import Registration from '../pages/registration/registration'

import './App.css'

const App = () => {

  const [loading, setLoading] = useState(false);

  return (
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

    </Switch>
  )
}

export default App;