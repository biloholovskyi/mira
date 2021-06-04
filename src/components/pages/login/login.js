import React from 'react';
import {useHistory} from "react-router";

import MainButton from '../../mainButton/mainButton';
import MainInput from '../../mainInput/mainInput';
import LeftImageBlock from '../../leftImageBlock/leftImageBlock';

import {LoginWrap, Caption, LoginForm} from './style';

const Login = () => {
  const history = useHistory();

  return (
    <LoginWrap>
      <LeftImageBlock loginPage={true}/>

      <div className="right">
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
          <MainInput
            label={'Пароль'}
            type={'password'}
            name={'pass'}
            forgotPass={true}
            required={true}
          />
          <MainButton
            type={'submit'}
            text={'Войти'}
            colorBg={true}
            func={() => history.push('/authorizationCode')}
          />
        </LoginForm>
      </div>
    </LoginWrap>
  )
}

export default Login;