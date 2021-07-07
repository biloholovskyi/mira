import React from "react";

import MainButton from "../../../../components/mainButton/mainButton";

import {ModalOverlay, ModalWrapper} from "../styled";
import ok from '../../media/icon/ok.svg';
import closed from "../../media/icon/close.svg";

const SuccessModal = ({close, title, data}) => {
  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'long', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }
  // дата
  const newDate = data.date.split('T')[0]
  const dateNormal = formatDate(newDate);

  // время
  const time = data.date.split('.')[0]
  const newTime = time.split('T')[1]

  const closeAll = () => {
    close()
    //window.location.assign('/balance')
  }

  return(
    <ModalOverlay style={{background: 'none'}}>
      <ModalWrapper>
        <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
        <div className="content">
          <div className="image"><img src={ok} alt="icon"/></div>
          <div className="text">{title}</div>
          <div className="info_block">
            <div className="item">
              <div className="left">Дата / время транзакции</div>
              <div className="right">{dateNormal} {newTime}</div>
            </div>
            <div className="item">
              <div className="left">Сумма вывода</div>
              <div className="right">{data.summa} MRC</div>
            </div>
          </div>
          <MainButton
            text={'Окей'}
            width={'100%'}
            colorBg={true}
            func={closeAll}
          />
        </div>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default SuccessModal;