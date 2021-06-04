import React from 'react';
import {useHistory} from "react-router";
import ReCAPTCHA from "react-google-recaptcha"; // link on docs https://www.npmjs.com/package/react-google-recaptcha

import MainButton from '../../mainButton/mainButton';
import MainInput from '../../mainInput/mainInput';
import LeftImageBlock from '../../leftImageBlock/leftImageBlock';

import {LoginWrap, Caption, LoginForm} from './style';

const Registration = () => {
  const history = useHistory();

  const onChange = (value) => {
    console.log("Captcha value:", value);
  }

  return (
    <LoginWrap>
      <LeftImageBlock/>

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