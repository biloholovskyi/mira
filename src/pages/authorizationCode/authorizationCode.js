import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../components/mainButton/mainButton";
import ConfirmationCodeItem from '../../components/confirmationCodeItem/ConfirmationCodeItem';
import LeftImageBlock from "../../components/leftImageBlock/leftImageBlock";

import arrow from './media/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc, LogoMobile} from "./style";
import logo from "../registration/media/icon/logo-green.svg";
import {loginUser} from "../../actions";
import {connect} from "react-redux";
import axios from "axios";
import ServerSettings from "../../service/serverSettings";

const AuthorizationCode = ({user}) => {
  const history = useHistory();
  const [authCode, setAuthCode] = useState('');

  const update = (value) => {
    setAuthCode(value)
  }
console.log(authCode)
  // изминения пароля пользователя
  const checkCode = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    const code = e.target.code.value;
console.log(code)
    if(user.code === code) {
      await axios.get(`${server.getApi()}api/users/${user.id}/`)
        .then(res => {
          window.location.assign('/dashboard');
        }).catch(error => console.log(error))
    } else {
      alert('не верный код')
    }

  }

  return (
    <LoginWrap>
      <LeftImageBlock loginPage={true}/>

      <div className="right">
        <LogoMobile src={logo} alt="logo"/>

        <Caption>
          <NavLink to={'/login'}><img src={arrow} alt="icon"/>Назад</NavLink>
        </Caption>

        <LoginForm onSubmit={(e)=> checkCode(e)}>
          <h3>Введите проверочный код</h3>
          <SmallDesc>Мы выслали проверочный код на почту stasmihaylov228@gmail.com <br/>
            Введите код, что бы подтвердить свой аккаунт</SmallDesc>

          <ConfirmationCodeItem update={update}/>

          <div className="btn_section">
            <MainButton
              type={'submit'}
              text={'Подтвердить'}
              colorBg={true}
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


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationCode);