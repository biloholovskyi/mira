import React from 'react';
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from '../../mainButton/mainButton';
import MainInput from '../../mainInput/mainInput';

import {LoginWrap, Caption, LoginForm} from './style';

import image from '../../../assets/images/r_image.png';
import logo from '../../../assets/icon/logo-white.svg';

const Registation = () => {
  const history = useHistory();

  return (
    <LoginWrap>
      <div className="left">
        <NavLink to='/'>
          <img src={logo} alt="logo" className={'logo'}/>
        </NavLink>
        <img src={image} alt="images"/>
      </div>
      <div className="right">

        <Caption>

          <span>Уже есть аккаунт?</span>

          <MainButton
            func={() => history.push('/login')}
            text={'Войти'}
          />
        </Caption>

        <LoginForm>

          <h3>Зарегистрироваться</h3>

        </LoginForm>

      </div>
    </LoginWrap>
  )
}

export default Registation;