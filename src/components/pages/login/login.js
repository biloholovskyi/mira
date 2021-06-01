import React from 'react';
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from '../../mainButton/mainButton';
import MainInput from '../../mainInput/mainInput';

import {LoginWrap, Caption, LoginForm} from './style';

import image from '../../../assets/images/login_image.jpg';
import logo from '../../../assets/icon/logo-white.svg';

const Login = () => {
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

        <NavLink to='/'>Еще нет аккаунта?</NavLink>

        <MainButton
          func={() => history.push('/')}
          text={'Зарегистрироваться'}
        />
      </Caption>

        <LoginForm>
          <h3>Войти в систему</h3>

          <MainInput
            label={'Email'}
            type={'text'}
            name={'mail'}
          />

          <MainInput
            label={'Пароль'}
            type={'password'}
            name={'pass'}
            forgotPass={true}
          />

          <MainButton
            type={'submit'}
            text={'Войти'}
            colorBg={true}
          />

        </LoginForm>

      </div>
    </LoginWrap>
  )
}

export default Login;