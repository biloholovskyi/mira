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

import {LoginWrap, Caption, LoginForm, LogoMobile, MobileBtn, CheckLogin, CaptionCheck} from './style';
import logo from './media/icon/logo-green.svg';

import ServerSettings from '../../service/serverSettings';
import arrow from "../authorizationCode/media/icon/small_arrow.svg";
import {SmallDesc} from "../authorizationCode/style";
import ConfirmationCodeItem from "../../components/confirmationCodeItem/ConfirmationCodeItem";

const Login = ({setSuccessModalText, loginUser, setErrorModalText, user}) => {
  const [validation, setValidation] = useState(false);
  const [nextStep, setNextStep] = useState(false)
  const [authCode, setAuthCode] = useState('');
  const history = useHistory();
  console.log(user)

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

  const update = (value) => {
    setAuthCode(value)
  }

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
          console.log(userId)

          const data = new FormData();
          data.set('code', generatePassword())

          axios.put(`${server.getApi()}api/users/${userId}/update/`, data)
            .then(res => {
              setNextStep(true)
              axios.get(`${server.getApi()}api/users/${userId}/`)
                .then(res => {
                  loginUser(res.data);
                }).catch(error => console.error(error));

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

  // проверка кода авторизации
  const checkCode = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    // получаем код подтверджения
    const code = document.getElementById('code')

    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {
        if (user.code === code.textContent) {
          loginUser(res.data);
          createToken(res.data);
          window.location.assign('/dashboard')
        } else {
          //alert('неверный код!')
          validationInput();
          setErrorModalText('неверный код!')
        }
      }).catch(error => console.log(error))
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

  // отправляем код еще раз
  const sendCodeAgain = (e) => {
    e.preventDefault();

    const server = new ServerSettings();

    // отправляем письмо с кодом авторизации
    axios.get(`${server.getApi()}api/user/code/${user.id}/`)
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <>
      <LoginWrap>
        <LeftImageBlock loginPage={true}/>

        <div className="right">
          <LogoMobile src={logo} alt="logo"/>

          {
            nextStep ? (
              <CaptionCheck>
                <button onClick={() => setNextStep(false)}><img src={arrow} alt="icon"/>Назад</button>
              </CaptionCheck>
            ) : (
              <Caption>
                <span>Еще нет аккаунта?</span>
                <MainButton
                  func={() => history.push('/registration')}
                  text={'Зарегистрироваться'}
                />
              </Caption>
            )
          }
          {
            nextStep ? (
              <>
                <CheckLogin onSubmit={(e) => checkCode(e)}>
                  <h3>Введите проверочный код</h3>
                  <SmallDesc>Мы выслали проверочный код на почту {user.email}<br/>
                    Введите код, что бы подтвердить свой аккаунт</SmallDesc>

                  <ConfirmationCodeItem update={update} validation={validation}/>

                  <div className="btn_section">
                    <MainButton
                      type={'submit'}
                      text={'Подтвердить'}
                      colorBg={true}
                    />
                    <p>
                      Не пришел код?
                      <button type={'button'} onClick={(e) => sendCodeAgain(e)}>Выслать код еще раз</button>
                    </p>
                  </div>
                  <div id={'code'} style={{visibility: "hidden"}}>{authCode}</div>
                </CheckLogin>
              </>
            ) : (
              <>
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
                  />
                </LoginForm>
              </>
            )
          }
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