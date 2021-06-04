import React from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../mainButton/mainButton";
import SingleCodeItem from './singleCodeItem/singleCodeItem';

import logo from "../../../assets/icon/logo-white.svg";
import image from "../../../assets/images/login_image.jpg";
import arrow from '../../../assets/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc, CodeBlock} from "./style";

const AuthorizationCode = () => {
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
          <NavLink to={'/login'}><img src={arrow} alt="icon"/>Назад</NavLink>
        </Caption>

        <LoginForm>
          <h3>Введите проверочный код</h3>

          <SmallDesc>Мы выслали проверочный код на почту stasmihaylov228@gmail.com <br/>
            Введите код, что бы подтвердить свой аккаунт</SmallDesc>

          <CodeBlock>
            <SingleCodeItem />
            <SingleCodeItem />
            <SingleCodeItem />
            <div className="border" />
            <SingleCodeItem />
            <SingleCodeItem />
            <SingleCodeItem />
          </CodeBlock>

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