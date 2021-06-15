import React from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../components/mainButton/mainButton";
import ConfirmationCodeItem from '../../components/confirmationCodeItem/ConfirmationCodeItem';
import LeftImageBlock from "../../components/leftImageBlock/leftImageBlock";

import arrow from './media/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc, LogoMobile} from "./style";
import logo from "../registration/media/icon/logo-green.svg";

const AuthorizationCode = () => {
  const history = useHistory();

  return (
    <LoginWrap>
      <LeftImageBlock loginPage={true}/>

      <div className="right">
        <LogoMobile src={logo} alt="logo"/>

        <Caption>
          <NavLink to={'/login'}><img src={arrow} alt="icon"/>Назад</NavLink>
        </Caption>

        <LoginForm>
          <h3>Введите проверочный код</h3>
          <SmallDesc>Мы выслали проверочный код на почту stasmihaylov228@gmail.com <br/>
            Введите код, что бы подтвердить свой аккаунт</SmallDesc>

          <ConfirmationCodeItem />

          <div className="btn_section">
            <MainButton
              type={'submit'}
              text={'Подтвердить'}
              colorBg={true}
              func={() => history.push('/dashboard')}
            />
            <p>
              Не пришел код?
             <NavLink to={'#'}>Выслать код еще раз</NavLink>
            </p>
          </div>
        </LoginForm>
      </div>
    </LoginWrap>
  )
}

export default AuthorizationCode;