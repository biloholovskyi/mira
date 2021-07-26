import React from "react";

import {SmallModalWrap, ModalInfo} from '../styled';
import closed from '../media/close.svg';

const SmallModal = ({closeModal, data, deleteItem}) => {
  return (
    <SmallModalWrap>
      <ModalInfo>
        <img onClick={closeModal} src={closed} alt="icon" className={'close'}/>
        <div className="big_title">Детали уведомления</div>
        <div className="text_block">
          <div className="small_title">{data.title}</div>
          <div className="text">{data.text}</div>
        </div>
        <div className="btn_section">
          <button>Пометить как непрочитанное</button>
          <button onClick={()=> deleteItem(data.id)}>Удалить</button>
        </div>
      </ModalInfo>
    </SmallModalWrap>
  )
}

export default SmallModal;