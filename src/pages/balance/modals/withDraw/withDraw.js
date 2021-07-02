import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

import MainInput from '../../../../components/mainInput/mainInput';
import MainButton from "../../../../components/mainButton/mainButton";

import {ModalOverlay, ModalWrapper} from "../styled";
import closed from '../../media/icon/close.svg';
import ConfirmationCode from "../confirmationCode/confirmationCode";
import TopUpInfo from "../topUpModal/topUpInfo/topUpInfo";
import SuccessModal from "../successModal/successModal";

import ServerSettings from "../../../../service/serverSettings";
import {loginUser} from "../../../../actions";
import {connect} from "react-redux";

const WithDraw = ({close, user}) => {
  // модалка успеха
  const [successModal, setSuccessModal] = useState(false)
  // модалка подтверждения операции
  const [confirmation, setConfirmationCode] = useState(false)

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

  const OnWithDraw = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {
        // const data = new FormData();
        // data.set("summa", e.target.summa.value);
        // data.set("wallet", e.target.wallet.value);
        // data.set("user_id", user.id);

      }).catch(error => console.log(error));
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

              <form onSubmit={(e) => OnWithDraw(e)}>
                <MainInput
                  label={'Сумма'}
                  iconText={'MRC'}
                  name={'summa'}
                  type={'number'}
                />
                <div className={'small_info'}>Комиссия: 8% / 9,84 MRC</div>

                <MainInput
                  label={'Кошелек'}
                  name={'wallet'}
                />

                <MainButton
                  colorBg={true}
                  text={'Далее'}
                  width={'100%'}
                  type={'submit'}
                  //func={openConfirmation}
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

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(WithDraw);