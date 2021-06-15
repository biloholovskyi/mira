import React, {useEffect, useRef, useState} from "react";

import MainInput from '../../../../components/mainInput/mainInput';
import MainButton from "../../../../components/mainButton/mainButton";

import {ModalOverlay, ModalWrapper} from "../styled";
import closed from '../../media/icon/close.svg';
import ConfirmationCode from "../confirmationCode/confirmationCode";
import TopUpInfo from "../topUpModal/topUpInfo/topUpInfo";
import SuccessModal from "../successModal/successModal";

const WithDraw = ({close}) => {
  // модалка успеха
  const [successModal, setSuccessModal] = useState(false)
  // модалка подтверждения операции
  const [confirmation, setConfirmationCode] = useState(false)
  // // ссылка модалку
  // const selectEl = useRef(null);
  //
  // // закрытие при клике вне елемента
  // const closeOutsideClick = (e) => {
  //   if (selectEl.current && !selectEl.current.contains(e.target)) {
  //     close()
  //   }
  // }
  //
  // useEffect(() => {
  //   document.addEventListener("click", (e) => closeOutsideClick(e));
  // }, []);

  // закритие модалки
  const closeModal = () => {
    setSuccessModal(false);
    setConfirmationCode(false);
    close();
  }

  const openSuccessModal = () => {
    setSuccessModal(true)
    navigator.clipboard.writeText('FfmbHfnpaZjKFvyi1okTjJJusN455paPH')
  }

  const previousModal = () => {
    setConfirmationCode(false)
  }

  const openConfirmation = () => {
    setConfirmationCode(true)
  }

  return (
    <>
      {
        confirmation ? (
          <ConfirmationCode
            close={closeModal}
            openSuccessModal={openSuccessModal}
            back={previousModal}
            title={'Введите проверочный код'}
          />
        ) : (
          <ModalOverlay>
            <ModalWrapper>
              <div className="title">Вывести средства</div>
              <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
              <form>
                <MainInput
                  label={'Сумма'}
                  iconText={'MRC'}
                  name={'summa'}
                  type={'number'}
                />
                <div className={'small_info'}>Комиссия: 8% / 9,84 MRC</div>

                <MainInput
                  label={'Кошелек'}
                  name={'balance'}
                  defaultValue={'1FfmbHfnpaZjKFvyi1okTjJJusN455paPH'}
                  readOnly={true}
                />

                <MainButton
                  colorBg={true}
                  text={'Далее'}
                  width={'100%'}
                  func={openConfirmation}
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
            title={'Вы успешно вывели деньги'}
          />
        )
      }
    </>
  )
}

export default WithDraw;