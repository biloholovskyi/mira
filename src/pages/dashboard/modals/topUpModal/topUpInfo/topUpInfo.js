import React from "react";

import MainButton from "../../../../../components/mainButton/mainButton";

import {ModalOverlay, ModalWrapper} from "../../../../balance/modals/styled";
import closed from "../../../media/icon/close.svg";

const TopUpInfo = ({close, sum}) => {

  return (
    <ModalOverlay style={{background: 'none'}}>
      <ModalWrapper>
        <div className="title">Выполните перевод</div>
        <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
        <div className="information">
          <div className="top">
            <div className="item">
              <div className="small_title">Сумма пополнения</div>
              <div className="text">{sum} MRC</div>
            </div>
            <div className="item">
              <div className="small_title">Осталось времени</div>
              <div className="text">00:59:56</div>
            </div>
          </div>
          <div className="bottom">
            <div className="small_title">Кошелек для перевода</div>
            <div className="block">
              <div className="wallet_value">1FfmbHfnpaZjKFvyi1okTjJJusN455paPH</div>

              <MainButton
                type={'submit'}
                text={'Скопировать адресс'}
                width={'195px'}
                //func={openSuccessModal}
                colorBg={true}
              />

            </div>
          </div>
        </div>
      </ModalWrapper>
    </ModalOverlay>
  )
}

export default TopUpInfo;