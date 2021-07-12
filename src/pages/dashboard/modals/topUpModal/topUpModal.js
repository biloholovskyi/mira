import React, {useEffect, useRef, useState} from "react";
import axios from "axios";
import {loginUser} from "../../../../actions";
import {connect} from "react-redux";

import MainInput from "../../../../components/mainInput/mainInput";
import MainButton from "../../../../components/mainButton/mainButton";
import TopUpInfo from './topUpInfo/topUpInfo';
import SuccessModal from '../successModal/successModal';

import {ModalOverlay, ModalWrapper} from "../../../balance/modals/styled";
import closed from "../../media/icon/close.svg";

import ServerSettings from "../../../../service/serverSettings";



const TopUpModal = ({close, update, user, loginUser}) => {
  // модалка успеха
  const [successModal, setSuccessModal] = useState(false)
  // модалка подтверждения пополнения
  const [topUpInfo, setTopUpInfo] = useState(false)
  const [sum, setSum] = useState('');

  const updateValue = (value) => {
    setSum(value)
  }

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

  // пополнение
  const onTopUp = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {

        const data = new FormData();
        data.set("summa", e.target.summa.value);
        data.set("user_id", user.id);
        data.set('operation', 'пополнение')
        data.set('background', '#36C136')

        const newBalance = parseInt(user.user_balance) + parseInt(e.target.summa.value);

        const data2 = new FormData();
        data2.set("user_balance", newBalance);

        // обновляем баланс юзера
        axios.put(`${server.getApi()}api/users/${user.id}/update/`, data2)
          .then(res => {
            axios.get(`${server.getApi()}api/users/${user.id}/`)
              .then(res => {
                loginUser(res.data)
              }).catch(error => console.error(error))
          })
          .catch(error => console.error(error))

        // обновляем список транзакций
        axios.post(`${server.getApi()}api/balance/`, data)
          .then(res => {
            setSuccessModal(res.data)
          }).catch(error => {
          console.error(error);
        });
      })
      .then(res => {

      }).catch(error => console.error(error))
  }

  return (
    <>
      <ModalOverlay>
        <ModalWrapper ref={selectEl}>
          <div className="title">Пополнить счет</div>
          <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>
          <form onSubmit={(e)=> onTopUp(e)}>
            {
              topUpInfo && (
                <TopUpInfo
                  close={closeModal}
                  openSuccessModal={openSuccessModal}
                  update={update}
                  sum={sum}
                />
              )
            }
            <MainInput
              label={'Сумма'}
              iconText={'MRC'}
              name={'summa'}
              type={'number'}
              minValue={'100'}
              updateValue={updateValue}
            />
            <div className={'small_info'}>Минимальная сумма пополнения: 100MRC</div>

            <MainButton
              colorBg={true}
              text={'Далее'}
              width={'100%'}
              func={sum > 100 ? openInfoModal : undefined}
            />
          </form>
        </ModalWrapper>
      </ModalOverlay>
      )
      {
        successModal && (
          <SuccessModal
            close={closeModal}
            title={'Вы успешно перевели деньги'}
            data={successModal}
          />
        )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {
  loginUser
};

export default connect(mapStateToProps, mapDispatchToProps)(TopUpModal);