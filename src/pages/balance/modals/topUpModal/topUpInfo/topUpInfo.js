import React from "react";
import {ModalOverlay, ModalWrapper} from "../../styled";
import arrow from "../../../media/icon/arrow.svg";
import closed from "../../../media/icon/close.svg";
import MainButton from "../../../../../components/mainButton/mainButton";

const TopUpInfo = ({close, openSuccessModal}) => {

  return (
    <ModalOverlay>
      <ModalWrapper >
        <div className="title">Выполните перевод</div>
        <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
        <div className="information">
          <div className="top">
            <div className="item">
              <div className="small_title">Сумма пополнения</div>
              <div className="text">0.000123456789 BTC</div>
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
                type={'button'}
                text={'Скопировать адресс'}
                width={'195px'}
                func={openSuccessModal}
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