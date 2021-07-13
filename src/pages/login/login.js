import React, {useEffect, useState} from 'react';
import {useHistory} from "react-router";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {loginUser, setSuccessModalText, setErrorModalText} from "../../actions/index";
import {connect} from "react-redux";

import MainButton from '../../components/mainButton/mainButton';
import MainInput from '../../components/mainInput/mainInput';
import LeftImageBlock from '../../components/leftImageBlock/leftImageBlock';
import SmallSuccessModal from "../../components/smallSuccessModal/smallSuccessModal";
import SmallErrorModal from "../../components/smallErrorModal/smallErrorModal";

import {LoginWrap, Caption, LoginForm, LogoMobile, MobileBtn} from './style';
import logo from './media/icon/logo-green.svg';

import ServerSettings from '../../service/serverSettings';

const Login = ({setSuccessModalText, loginUser, setErrorModalText}) => {
  const [validation, setValidation] = useState(false);
  const history = useHistory();

  const validationInput = () => {
    setValidation(true)
  }

  useEffect(() => {
    return () => {
      setSuccessModalText(false)
      setErrorModalText(false)
    }
  }, []);

  setTimeout(() => {
    setSuccessModalText(false)
    setErrorModalText(false)
  }, 1500)

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
         const userId = res.data.id;

          loginUser(res.data);
          createToken(res.data);

          const data = new FormData();
          data.set('code', generatePassword())

          axios.put(`${server.getApi()}api/users/${userId}/update/`, data)
            .then(res => {
              window.location.assign('/authorizationCode');
              // отправляем письмо с кодом авторизации
              axios.get(`${server.getApi()}api/user/code/${userId}/`)
                .catch(error => {
                  console.error(error);
                });

            }).catch(error => console.error(error));

        } else {
          validationInput();
          setErrorModalText('Логин или пароль введен неверно!')
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
          validationInput();
          setErrorModalText('Логин или пароль введен неверно!')
        }
      });
  }

  const createToken = (user) => {
    const value = JSON.stringify({email: user.email});

    localStorage.setItem('mira_login', value);
  }

  // генерируем пароль
  const generatePassword = () => {
    let pass = "";
    let possible = "0123456789";

    for (let i = 0; i < 6; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }

  return (
    <>
      <LoginWrap>
        <LeftImageBlock loginPage={true}/>

        <div className="right">
          <NavLink to='/login'>
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
              validation={validation}
            />

            <NavLink to={'/forgotPassword'} className={'send_again'}>Забыли пароль?</NavLink>

            <MainInput
              label={'Пароль'}
              type={'password'}
              name={'password'}
              required={true}
              validation={validation}
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
      <SmallSuccessModal/>
      <SmallErrorModal/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser,
  setSuccessModalText,
  setErrorModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);