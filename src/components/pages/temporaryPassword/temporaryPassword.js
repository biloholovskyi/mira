import React from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../mainButton/mainButton";

import logo from "../../../assets/icon/logo-white.svg";
import image from '../../../assets/images/r_image.png';
import arrow from '../../../assets/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc} from "./style";
import MainInput from "../../mainInput/mainInput";

const TemporaryPassword = () => {
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
          <NavLink to={'/registration'}><img src={arrow} alt="icon"/>Назад</NavLink>
        </Caption>

        <LoginForm>
          <h3>Введите временный пароль</h3>

          <SmallDesc>Мы выслали временный пароль на почту stasmihaylov228@gmail.com<br/>
            Позже вы сможете поменять пароль в личном кабинете</SmallDesc>

          <div className={'send_again'}>
            Не пришел пароль?

            <MainButton
              type={'button'}
              text={' Выслать пароль еще раз'}
              simple={true}
            />

          </div>

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
            func={() => history.push('/dashboard')}
          />

        </LoginForm>

      </div>

    </LoginWrap>
  )
}

export default TemporaryPassword;