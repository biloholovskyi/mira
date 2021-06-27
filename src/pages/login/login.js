import React, {useState} from 'react';
import {useHistory} from "react-router";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {loginUser} from "../../actions/index";
import {connect} from "react-redux";

import MainButton from '../../components/mainButton/mainButton';
import MainInput from '../../components/mainInput/mainInput';
import LeftImageBlock from '../../components/leftImageBlock/leftImageBlock';

import {LoginWrap, Caption, LoginForm, LogoMobile, MobileBtn} from './style';
import logo from './media/icon/logo-green.svg';

import ServerSettings from '../../service/serverSettings';

const Login = () => {
  const history = useHistory();

  // логин пользователя
  const onLogin = async (e) => {
    e.preventDefault();
    // получаем с сервера пользователя
    const login = e.target.login.value; // email
    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/${login}/`)
      .then(res => {
        // проверяем пароль
        if (res.data.password === e.target.password.value) {
          loginUser(res.data);
          createToken(res.data);
          console.log(res.data)
          history.push('/dashboard')
        } else {
          alert('wrong password or login');
        }
      }).catch(error => {
        try {
          // тип ошибки
          const typeError = error.message.data;
          // если пользователь не найден
          if (typeError.includes('DoesNotExist')) {
            alert('wrong password or login');
          } else {
            // если другая ошибка
            alert('Ошибка на сервере')
          }
        } catch {
          console.log('precess');
        }
      });
  }

  const createToken = (user) => {
    const value = JSON.stringify({email: user.email});

    localStorage.setItem('mira_login', value);
  }

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

        <LoginForm onSubmit={(e) => onLogin(e)}>
          <h3>Войти в систему</h3>
          <MainInput
            label={'Email'}
            type={'email'}
            name={'login'}
            required={true}
          />

          <NavLink to={'/'} className={'send_again'}>Забыли пароль?</NavLink>

          <MainInput
            label={'Пароль'}
            type={'password'}
            name={'password'}
            required={true}
          />
          <MainButton
            type={'submit'}
            text={'Войти'}
            colorBg={true}
            //func={() => history.push('/authorizationCode')}
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

const mapStateToProps = (state) => {
  return {
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);