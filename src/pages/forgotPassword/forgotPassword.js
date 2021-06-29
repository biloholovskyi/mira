import React from "react";
import {NavLink} from "react-router-dom";

import MainInput from "../../components/mainInput/mainInput";
import MainButton from "../../components/mainButton/mainButton";
import LeftImageBlock from "../../components/leftImageBlock/leftImageBlock";

import {Caption, LoginForm, LoginWrap, SmallDesc} from "../temporaryPassword/style";
import arrow from "../temporaryPassword/media/icon/small_arrow.svg";
import {useHistory} from "react-router";

const ForgotPassword = () => {
  const history = useHistory();

  return (
    <LoginWrap>
      <LeftImageBlock/>

      <div className="right">
        <Caption>
          <NavLink to={'/login'}><img src={arrow} alt="icon"/>Назад</NavLink>
        </Caption>

        <LoginForm>
          <h3>Забыли пароль?</h3>

          <MainInput
            label={'Email'}
            type={'Email'}
            name={'Email'}
            required={true}
          />

          <MainButton
            type={'submit'}
            text={'Сбросить пароль'}
            colorBg={true}
          />
        </LoginForm>
      </div>
    </LoginWrap>
  )
}

export default ForgotPassword;