import React from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../mainButton/mainButton";
import LeftImageBlock from "../../leftImageBlock/leftImageBlock";
import MainInput from "../../mainInput/mainInput";

import arrow from '../../../assets/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc} from "./style";

const TemporaryPassword = () => {
  const history = useHistory();

  return (
    <LoginWrap>
      <LeftImageBlock/>

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
            <NavLink to={'/'}>Выслать пароль еще раз</NavLink>
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