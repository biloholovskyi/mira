import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {useHistory} from "react-router";

import MainButton from "../../components/mainButton/mainButton";
import ConfirmationCodeItem from '../../components/confirmationCodeItem/ConfirmationCodeItem';
import LeftImageBlock from "../../components/leftImageBlock/leftImageBlock";

import arrow from './media/icon/small_arrow.svg';
import {Caption, LoginForm, LoginWrap, SmallDesc, LogoMobile} from "./style";
import logo from "../registration/media/icon/logo-green.svg";
import {loginUser, setErrorModalText} from "../../actions";
import {connect} from "react-redux";
import axios from "axios";
import ServerSettings from "../../service/serverSettings";
import SmallErrorModal from "../../components/smallErrorModal/smallErrorModal";

const AuthorizationCode = ({user, setErrorModalText}) => {
  const history = useHistory();
  const [authCode, setAuthCode] = useState('');
  const [validation, setValidation] = useState(false);

  const validationInput = () => {
    setValidation(true)
  }

  useEffect(() => {
    return () => {
      setErrorModalText(false)
    }
  }, []);

  setTimeout(() => {
    setErrorModalText(false)
  }, 3000)

  const update = (value) => {
    setAuthCode(value)
  }

  // проверка кода авторизации
  const checkCode = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    // получаем код подтверджения
    const code = document.getElementById('code')

      await axios.get(`${server.getApi()}api/users/${user.id}/`)
        .then(res => {
          if (user.code === code.textContent) {
            window.location.assign('/dashboard');
          } else {
            //alert('неверный код!')
            validationInput();
            setErrorModalText('неверный код!')
          }
        }).catch(error => console.log(error))
  }

  // отправляем код еще раз
  const sendCodeAgain = async (e) => {
    e.preventDefault();

    const server = new ServerSettings();

    // отправляем письмо с кодом авторизации
    axios.get(`${server.getApi()}api/user/code/${user.id}/`)
      .catch(error => {
        console.error(error);
      });
  }

  return (
   <>
     <LoginWrap>
       <LeftImageBlock loginPage={true}/>

       <div className="right">
         <LogoMobile src={logo} alt="logo"/>

         <Caption>
           <NavLink to={'/login'}><img src={arrow} alt="icon"/>Назад</NavLink>
         </Caption>

         <LoginForm onSubmit={(e)=> checkCode(e)}>
           <h3>Введите проверочный код</h3>
           <SmallDesc>Мы выслали проверочный код на почту {user.email}<br/>
             Введите код, что бы подтвердить свой аккаунт</SmallDesc>

           <ConfirmationCodeItem update={update} validation={validation}/>

           <div className="btn_section">
             <MainButton
               type={'submit'}
               text={'Подтвердить'}
               colorBg={true}
             />
             <p>
               Не пришел код?
               <button type={'button'} onClick={(e)=> sendCodeAgain(e)}>Выслать код еще раз</button>
             </p>
           </div>
           <div id={'code'} style={{visibility: "hidden"}}>{authCode}</div>
         </LoginForm>
       </div>
     </LoginWrap>
     <SmallErrorModal/>
   </>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser,
  setErrorModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthorizationCode);