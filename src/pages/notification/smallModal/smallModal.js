import React, {useEffect, useRef} from "react";
import { Player, ControlBar } from 'video-react';

import {SmallModalWrap, ModalInfo} from '../styled';
import closed from '../media/close.svg';
import image from '../media/image.png';
import './video-react.css';
import MainButton from "../../../components/mainButton/mainButton";


const SmallModal = ({closeModal, data, deleteItem, unReadMessage}) => {
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
        <div className="content">
          <div className="text_block">
            <div className="small_title">{data.title}</div>
            <div className="text">{data.text}</div>
          </div>
          <div className="big_modal--content">
            <img className={'image'} src={image} alt="image"/>

            {/*<Player*/}
            {/*  playsInline*/}
            {/*  muted*/}
            {/*  poster={image}*/}
            {/*  src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"*/}
            {/*/>*/}

            <video className={'video'} src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"  playsInline muted controls/>

            <div className="mark_list">
              <div className="small_title">Headline Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <ul>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ul>
            </div>

            <div className="number_list">
              <div className="small_title">Headline Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
              <ol>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet.</li>
                <li>Lorem ipsum dolor sit amet.</li>
              </ol>
            </div>

            <MainButton
              text={'Button text'}
              colorBg
            />

          </div>
        </div>
        <div className="btn_section">
          <button onClick={()=> unReadMessage(data.id)}>Пометить как непрочитанное</button>
          <button onClick={()=> deleteItem(data.id)}>Удалить</button>
        </div>
      </ModalInfo>
    </SmallModalWrap>
  )
}

export default SmallModal;