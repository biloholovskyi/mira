import React, {useEffect, useRef, useState} from "react";

import MainInput from "../../../../components/mainInput/mainInput";
import MainButton from "../../../../components/mainButton/mainButton";
import SuccessModal from "../successModal/successModal";
import TopUpInfo from './topUpInfo/topUpInfo';

import {ModalOverlay, ModalWrapper} from "../styled";
import closed from "../../media/icon/close.svg";

const TopUpModal = ({close}) => {
  // модалка успеха
  const [successModal, setSuccessModal] = useState(false)
  const [topUpInfo, setTopUpInfo] = useState(false)
  // ссылка модалку
  const selectEl = useRef(null);

  // закрытие при клике вне елемента
  const closeOutsideClick = (e) => {
    if (selectEl.current && !selectEl.current.contains(e.target)) {
      close();
    }
  }

  useEffect(() => {
    document.addEventListener("click", (e) => closeOutsideClick(e));
  }, []);

  // закритие модалки
  const closeModal = () => {
    setSuccessModal(false);
    setTopUpInfo(false);
    close();
  }

  const openSuccessModal = () => {
    setSuccessModal(true)
    navigator.clipboard.writeText('FfmbHfnpaZjKFvyi1okTjJJusN455paPH')
  }

  const openInfoModal = () => {
    setTopUpInfo(true)
  }

  return (
    <>
      {
        topUpInfo ? (
          <TopUpInfo
            close={closeModal}
            openSuccessModal={openSuccessModal}
          />
        ) : (
          <ModalOverlay>
            <ModalWrapper  ref={selectEl}>
              <div className="title">Пополнить счет</div>
              <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
              <form>

                <MainInput
                  label={'Сумма'}
                  iconText={'MRC'}
                  name={'summa'}
                  type={'number'}
                />
                <div className={'small_info'}>Минимальная сумма пополнения: 100MRC</div>

                <MainButton
                  colorBg={true}
                  text={'Далее'}
                  width={'100%'}
                  func={openInfoModal}
                />
              </form>
            </ModalWrapper>
          </ModalOverlay>
        )
      }
      {
        successModal && (
          <SuccessModal
            close={closeModal}
            title={'Вы успешно перевели деньги'}
          />
        )
      }
    </>
  )
}

export default TopUpModal;