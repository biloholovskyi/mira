import React from 'react';
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";
import ReCAPTCHA from "react-google-recaptcha"; // link on docs https://www.npmjs.com/package/react-google-recaptcha

import MainButton from '../../mainButton/mainButton';
import MainInput from '../../mainInput/mainInput';

import {LoginWrap, Caption, LoginForm} from './style';

import image from '../../../assets/images/r_image.png';
import logo from '../../../assets/icon/logo-white.svg';

const Registration = () => {
  const history = useHistory();

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

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

          <div className="double">

            <MainInput
              label={'Имя'}
              type={'text'}
              name={'firstName'}
              required={true}
            />

            <MainInput
              label={'Фамилия'}
              type={'text'}
              name={'lastName'}
              required={true}
            />

          </div>

          <MainInput
            label={'Почта'}
            type={'email'}
            name={'mail'}
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
          />,

          <div className="btn_section">

            <MainButton
              type={'submit'}
              text={'Зарегистрироваться'}
              colorBg={true}
              func={() => history.push('/temporaryPassword')}
            />

            <p>Нажимая «Отправить», вы соглашаетесь предоставить Вашу информацию ООО "МИРА" на обработку.</p>

          </div>

        </LoginForm>

      </div>
    </LoginWrap>
  )
}

export default Registration;