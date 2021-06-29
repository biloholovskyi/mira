import React, {useState} from 'react';
import axios from "axios";
import {useHistory} from "react-router";
import ReCAPTCHA from "react-google-recaptcha"; // link on docs https://www.npmjs.com/package/react-google-recaptcha
import {NavLink} from "react-router-dom";
import {loginUser} from "../../actions/index";
import {connect} from "react-redux";

import MainButton from '../../components/mainButton/mainButton';
import MainInput from '../../components/mainInput/mainInput';
import LeftImageBlock from '../../components/leftImageBlock/leftImageBlock';

import {LoginWrap, Caption, LoginForm, LogoMobile, MobileBtn} from './style';
import logo from "./media/icon/logo-green.svg";

import ServerSettings from '../../service/serverSettings';

const Registration = ({loginUser}) => {
  const [captcha, setCaptcha] = useState('');
  const history = useHistory();

  const onChange = (value) => {
    console.log("Captcha value:", value);
    setCaptcha(value)
  }

  const createNewUser = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    const email = e.target.email.value;

    await axios.get(`${server.getApi()}api/users/${email}/`)
      .then(res => {
        alert(('Email уже занят'))
      }).catch(error => {

        if (captcha) {
          const data = new FormData();
          data.set('name', e.target.name.value);
          data.set('surName', e.target.surname.value);
          data.set('email', e.target.email.value);
          data.set('password', generatePassword())

          axios.post(`${server.getApi()}api/users/`, data)
            .then(res => {
              loginUser(res.data);
              console.log(res.data)
              localStorage.setItem('mira_login', JSON.stringify({email: res.data.email}));
              history.push('/temporaryPassword')
              window.location.reload();

              // отправляем письмо
              axios.get(`${server.getApi()}api/user/email/${res.data.id}/`)
                .catch(error => {
                  console.error(error);
                });

              axios.get(`${server.getApi()}api/user/email/${res.data.email}/`)
                .catch(error => {
                  console.error(error);
                });

            }).catch(error => console.error(error));
        } else {
          alert('checked captcha!')
        }
      })

  }

  // генерируем пароль
  const generatePassword = () => {
    let pass = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let passLength = (Math.random() * 15) + 5;

    for (let i = 0; i < passLength; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }

  return (
    <LoginWrap>
      <LeftImageBlock/>

      <div className="right">
        <NavLink to='/'>
          <LogoMobile src={logo} alt="logo"/>
        </NavLink>

        <Caption>
          <span>Уже есть аккаунт?</span>
          <MainButton
            func={() => history.push('/login')}
            text={'Войти'}
          />
        </Caption>

        <LoginForm onSubmit={(e) => createNewUser(e)}>
          <h3>Зарегистрироваться</h3>
          <div className="double">
            <MainInput
              label={'Имя'}
              type={'text'}
              name={'name'}
              required={true}
            />

            <MainInput
              label={'Фамилия'}
              type={'text'}
              name={'surname'}
              required={true}
            />
          </div>
          <MainInput
            label={'Почта'}
            type={'email'}
            name={'email'}
            required={true}
          />

          <MainInput
            label={'Ссылка на реферера (необязательно)'}
            type={'text'}
            name={'link'}
          />

          <ReCAPTCHA
            sitekey="6LexLAgbAAAAAOlHJXKYTdzb2kSvPPMFk6RT8kcV"
            onChange={onChange}
            theme={'dark'}
            // secret key 6LexLAgbAAAAAJLRuwu1zgGi9EkMenGGgeuztkzu
            // key 6LexLAgbAAAAAOlHJXKYTdzb2kSvPPMFk6RT8kcV
          />

          <div className="btn_section">
            <MainButton
              type={'submit'}
              text={'Зарегистрироваться'}
              colorBg={true}
              //func={() => history.push('/temporaryPassword')}
            />
            <p>Нажимая «Отправить», вы соглашаетесь предоставить Вашу информацию ООО "МИРА" на обработку.</p>
          </div>
        </LoginForm>


        <MobileBtn>
          <span>Уже есть аккаунт?</span>
          <MainButton
            func={() => history.push('/login')}
            text={'Войти'}
            width={'100%'}
          />
        </MobileBtn>
      </div>
    </LoginWrap>
  )
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Registration);