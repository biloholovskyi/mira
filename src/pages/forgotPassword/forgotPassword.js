import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import axios from "axios";
import {loginUser} from "../../actions";
import {connect} from "react-redux";

import MainInput from "../../components/mainInput/mainInput";
import MainButton from "../../components/mainButton/mainButton";
import LeftImageBlock from "../../components/leftImageBlock/leftImageBlock";

import {Caption, LoginForm, LoginWrap, SmallDesc} from "../temporaryPassword/style";
import arrow from "../temporaryPassword/media/icon/small_arrow.svg";
import {useHistory} from "react-router";

import {setSuccessModalText} from '../../actions'

import ServerSettings from "../../service/serverSettings";

const ForgotPassword = ({setSuccessModalText}) => {
  const [validation, setValidation] = useState(false);
  const history = useHistory();

  const validationInput = () => {
    setValidation(true)
  }

  const createNewPassword = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/`)
      .then(res => {
        const email = e.target.email.value;
        const getUser = res.data.find(u => u.email === email)

        const data = new FormData();
        data.set('email', e.target.email.value);
        data.set('password', generatePassword())

        if (getUser){
          axios.get(`${server.getApi()}api/users/${email}/`)
            .then(res => {
              const  userId = res.data.id;

              axios.put(`${server.getApi()}api/users/${res.data.id}/update/`, data)
                .then(res => {
                  loginUser(res.data);
                  localStorage.setItem('mira_login', JSON.stringify({email: res.data.email}));
                  history.push('/login')

                  setSuccessModalText('Пароль был успешно сброшен')
                  // отправка письма с новым паролем
                  axios.get(`${server.getApi()}api/user/email/${userId}/`)
                    .catch(error => {
                      console.error(error);
                    });

                }).catch(error => console.error(error));

            }).catch(error => {console.log(error)})
        } else {
          validationInput();
        }
      }).catch(error => {console.log(error)})
  }

  // генерируем пароль
  const generatePassword = () => {
    let pass = "";
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let passLength = (Math.random() * 15) + 5;

    for (let i = 0; i < passLength; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }

  return (
    <LoginWrap>
      <LeftImageBlock/>

      <div className="right">
        <Caption>
          <NavLink to={'/login'}><img src={arrow} alt="icon"/>Назад</NavLink>
        </Caption>

        <LoginForm onSubmit={(e)=> createNewPassword(e)}>
          <h3>Забыли пароль?</h3>

          <MainInput
            label={'Email'}
            type={'Email'}
            name={'email'}
            required={true}
            validation={validation}
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser,
  setSuccessModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword);