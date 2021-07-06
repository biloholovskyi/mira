import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import ConfirmationCodeItem from '../../../../components/confirmationCodeItem/ConfirmationCodeItem';

import MainButton from "../../../../components/mainButton/mainButton";
import SmallSuccessModal from '../../../../components/smallSuccessModal/smallSuccessModal';

import {ModalOverlay, ConfirmModalWrapper} from "../styled";
import closed from "../../media/icon/close.svg";
import arrow from '../../media/icon/arrow.svg'
import {loginUser} from "../../../../actions";
import {connect} from "react-redux";
import ServerSettings from "../../../../service/serverSettings";
import axios from "axios";


const ConfirmationCode = ({close, back, title, transferModal, confirmation, user}) => {
  const [smallSuccess, setSmallSuccess] = useState(false)
  const [authCode, setAuthCode] = useState('');

  const update = (value) => {
    setAuthCode(value)
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
      {
        <>
          {
            transferModal && (
              <ModalOverlay transferModal={transferModal}/>
            )
          }
          <ConfirmModalWrapper confirmation={confirmation} transferModal={transferModal}>
            <div className="title">
              {
                transferModal
                  ? null
                  : <button onClick={back} type={'button'} className={'back'}><img src={arrow} alt="icon"/></button>
              }
              {title}
            </div>
            <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
            <div className={'info'}>Мы выслали проверочный код на почту {user.email}.
              Введите код, что бы вывести средства
            </div>

            <ConfirmationCodeItem update={update}/>

            <MainButton
              text={'Подтвердить'}
              colorBg={true}
              width={'100%'}
              type={'submit'}
            />
            <p className={'send_again'}>
              Не пришел код?
              <button onClick={(e) => sendCodeAgain(e)}>Выслать код еще раз</button>
            </p>

            <div id={'code'} style={{visibility: "hidden"}}>{authCode}</div>
          </ConfirmModalWrapper>
        </>
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ConfirmationCode);