import React, {useEffect, useRef} from "react";

import {SmallModalWrap, ModalInfo} from '../styled';
import closed from '../media/close.svg';

const BigModal = ({closeModal, data, deleteItem, unReadMessage}) => {
  // ссылка модалку
  const selectEl = useRef(null);

  // закрытие при клике вне елемента
  const closeOutsideClick = (e) => {
    if (selectEl.current && !selectEl.current.contains(e.target)) {
      closeModal();
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  return (
    <SmallModalWrap>
      <ModalInfo ref={selectEl}>
        <img onClick={closeModal} src={closed} alt="icon" className={'close'}/>
        <div className="big_title">Детали уведомления</div>
        <div className="text_block">
          <div className="small_title">{data.title}</div>
          <div className="text">{data.text}</div>
        </div>
        <div className="btn_section">
          <button onClick={()=> unReadMessage(data.id)}>Пометить как непрочитанное</button>
          <button onClick={()=> deleteItem(data.id)}>Удалить</button>
        </div>
      </ModalInfo>
    </SmallModalWrap>
  )
}

export default BigModal;