import React from "react";

import MainButton from "../../../../components/mainButton/mainButton";

import {ModalOverlay, ModalWrapper} from "../styled";
import ok from '../../media/icon/ok.svg';
import closed from "../../media/icon/close.svg";

const SuccessModal = ({close}) => {
  return(
    <ModalOverlay>
      <ModalWrapper>
        <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
        <div className="content">
          <div className="image"><img src={ok} alt="icon"/></div>
          <div className="text">Вы успешно вывели деньги</div>
          <div className="info_block">
            <div className="item">
              <div className="left">Дата / время транзакции</div>
              <div className="right">2 июня 2021, 10:44</div>
            </div>
            <div className="item">
              <div className="left">Сумма вывода</div>
              <div className="right">123.00 MRC</div>
            </div>
          </div>
          <MainButton
            text={'Окей'}
            width={'100%'}
            colorBg={true}
            func={close}
          />
        </div>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default SuccessModal;