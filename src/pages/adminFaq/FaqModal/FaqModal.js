import React from "react";

import {FaqModalOverlay,FaqModalBody} from './styled';
import MainInput from "../../../components/mainInput/mainInput";
import MainTextArea from "../../../components/mainTextArea/mainTextArea";
import MainButton from "../../../components/mainButton/mainButton";

import closed from '../media/close.svg';

const FaqModal = ({close}) => {
  return (
    <FaqModalOverlay>
      <FaqModalBody>
        <div className="title">Добавить вопрос</div>
        <div onClick={close} className="close"><img src={closed} alt="icon"/></div>

        <MainInput
          label={'Вопрос'}
          name={'question'}
          iconText={'MRC'}
        />

        <MainTextArea
          label={'Ответ'}
          name={'answer'}
        />

        <MainInput
          label={'Ссылка на видео (необязательно)'}
          name={'question'}
        />

        <MainButton
          text={'Опубликовать'}
          width={'100%'}
          colorBg={true}
        />
      </FaqModalBody>
    </FaqModalOverlay>
  )
}

export default FaqModal;