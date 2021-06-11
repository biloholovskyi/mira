import React from 'react';
import {useHistory} from "react-router";
import {NavLink} from "react-router-dom";

import MainButton from '../../components/mainButton/mainButton';
import MainInput from '../../components/mainInput/mainInput';
import LeftImageBlock from '../../components/leftImageBlock/leftImageBlock';

import {LoginWrap, Caption, LoginForm, LogoMobile, MobileBtn} from './style';
import logo from './media/icon/logo-green.svg';

const Login = () => {
  const history = useHistory();

  return (
    <LoginWrap>
      <LeftImageBlock loginPage={true}/>

      <div className="right">
        <NavLink to='/'>
          <LogoMobile src={logo} alt="logo"/>
        </NavLink>

      <Caption>
        <span>Еще нет аккаунта?</span>
        <MainButton
          func={() => history.push('/registration')}
          text={'Зарегистрироваться'}
        />
      </Caption>

        <LoginForm>
          <h3>Войти в систему</h3>
          <MainInput
            label={'Email'}
            type={'email'}
            name={'mail'}
            required={true}
          />

          <NavLink to={'/'} className={'send_again'}>Забыли пароль?</NavLink>

          <MainInput
            label={'Пароль'}
            type={'password'}
            name={'pass'}
            required={true}
          />
          <MainButton
            type={'submit'}
            text={'Войти'}
            colorBg={true}
            func={() => history.push('/authorizationCode')}
          />
        </LoginForm>

        <MobileBtn>
          <span>Еще нет аккаунта?</span>
          <MainButton
            func={() => history.push('/registration')}
            text={'Зарегистрироваться'}
            width={'100%'}
          />
        </MobileBtn>
      </div>
    </LoginWrap>
  )
}

export default Login;