import React from "react";

import ConfirmationCodeItem from '../../../../components/confirmationCodeItem/ConfirmationCodeItem';

import {ModalOverlay, ModalWrapper} from "../styled";
import closed from "../../media/icon/close.svg";
import arrow from '../../media/icon/arrow.svg'
import MainButton from "../../../../components/mainButton/mainButton";
import {NavLink} from "react-router-dom";

const ConfirmationCode = ({close, back, title, openSuccessModal}) => {
  return (
    <ModalOverlay>
      <ModalWrapper>
        <div className="title">
          <button onClick={back} type={'button'} className={'back'}><img src={arrow} alt="icon"/></button>
          {title}
        </div>
        <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
        <div className={'info'}>Мы выслали проверочный код на почту s********28@gmail.com.
          Введите код, что бы вывести средства</div>
        <form>

          <ConfirmationCodeItem/>

          <MainButton
            text={'Подтвердить'}
            colorBg={true}
            width={'100%'}
            func={openSuccessModal}
          />

          <p className={'send_again'}>
            Не пришел код?
            <NavLink to={'#'}>Выслать код еще раз</NavLink>
          </p>
        </form>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default ConfirmationCode;