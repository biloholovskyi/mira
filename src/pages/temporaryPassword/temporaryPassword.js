import React from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../components/mainButton/mainButton";
import LeftImageBlock from "../../components/leftImageBlock/leftImageBlock";
import MainInput from "../../components/mainInput/mainInput";

import arrow from './media/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc} from "./style";
import {loginUser} from "../../actions";
import {connect} from "react-redux";
import ServerSettings from "../../service/serverSettings";
import axios from "axios";
import {Button} from "../../components/mainButton/styled";


const TemporaryPassword = ({user}) => {
  const history = useHistory();

  const checkPassword = async (e) => {
    e.preventDefault();
    const pass = e.target.pass.value;
    if(user.password === pass) {
      window.location.assign('/dashboard');
    }else {
      alert('wrong password')
    }
  }

  const sendPassAgain = async (e) => {
    e.preventDefault();

    const server = new ServerSettings();

    // отправляем письмо с кодом
    axios.get(`${server.getApi()}api/user/email/${user.id}/`)
      .catch(error => {
        console.error(error);
      });
  }

  return (
    <LoginWrap>
      <LeftImageBlock/>

      <div className="right">
        {/*<Caption>*/}
        {/*  <NavLink to={'/registration'}><img src={arrow} alt="icon"/>Назад</NavLink>*/}
        {/*</Caption>*/}

        <LoginForm onSubmit={(e)=> checkPassword(e)}>
          <h3>Введите временный пароль</h3>
          <SmallDesc>Мы выслали временный пароль на почту {user.email}<br/>
            Позже вы сможете поменять пароль в личном кабинете</SmallDesc>

          <div className={'send_again'}>
            Не пришел пароль?
            <Button  onClick={(e)=> sendPassAgain(e)}>Выслать пароль еще раз</Button>
          </div>

          <MainInput
            label={'Пароль'}
            type={'password'}
            name={'pass'}
            required={true}
          />

          <div className={'send_again--mobile'}>
            Не пришел пароль?
            <NavLink to={'/'}>Выслать пароль еще раз</NavLink>
          </div>

          <MainButton
            type={'submit'}
            text={'Войти'}
            colorBg={true}
            //func={() => history.push('/dashboard')}
          />
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

export default connect(mapStateToProps, mapDispatchToProps)(TemporaryPassword);