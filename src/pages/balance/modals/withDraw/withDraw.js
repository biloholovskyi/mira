import React, {useEffect, useState} from "react";
import axios from "axios";

import MainInput from '../../../../components/mainInput/mainInput';
import MainButton from "../../../../components/mainButton/mainButton";

import {ModalOverlay, ModalWrapper} from "../styled";
import closed from '../../media/icon/close.svg';
import ConfirmationCode from "../confirmationCode/confirmationCode";
import TopUpInfo from "../topUpModal/topUpInfo/topUpInfo";
import SuccessModal from "../successModal/successModal";

import ServerSettings from "../../../../service/serverSettings";
import {loginUser, setErrorModalText} from "../../../../actions";
import {connect} from "react-redux";
import SmallErrorModal from "../../../../components/smallErrorModal/smallErrorModal";

const WithDraw = ({close, user, update, loginUser, setErrorModalText}) => {
  // модалка успеха
  const [successModal, setSuccessModal] = useState(false)
  // модалка подтверждения операции
  const [confirmation, setConfirmationCode] = useState(false)
  const [sumValue, setSumValue] = useState('');
  const [wallet, setWallet] = useState('');
  const [validation, setValidation] = useState(false);
  const [validationSum, setValidationSum] = useState(false);

  const validationInput = () => {
    setValidation(true)
  }

  const validationSumma = () => {
    setValidationSum(true)
  }

  useEffect(() => {
    return () => {
      setErrorModalText(false)
    }
  }, []);

  setTimeout(() => {
    setErrorModalText(false)
  }, 1500)

  // получаем суму что б пощитать комисию
  const getCommission = (value) => {
    setSumValue(value)
  }

  const getWalletValue = (value) => {
    setWallet(value)
  }

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

  // отправляем письмо и откриваем модалку подтверджения
  const openConfirmation = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    const data = new FormData();
    data.set('code' , generatePassword())

    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {
        const summa = parseInt(sumValue) + parseInt(sumValue * 8 / 100);

        if(summa < user.user_balance){
          axios.put(`${server.getApi()}api/users/${user.id}/update/`, data)
            .then(res => {

              axios.get(`${server.getApi()}api/users/${user.id}/`)
                .then(res => {
                  loginUser(res.data)
                }).catch(error => console.error(error))

              // отправляем письмо
              axios.get(`${server.getApi()}api/user/code/${user.id}/`)
                .then(res => {
                  setConfirmationCode(true)
                }).catch(error => {console.error(error);});

            }).catch(error => {console.error(error);});
        } else {
          //alert('у вас недостаточно средств')
          validationSumma();
          setErrorModalText('у вас недостаточно средств')
        }


      }).catch(error => {console.error(error);})
  }

  // генерируем пароль
  const generatePassword = () => {
    let pass = "";
    let possible = "0123456789";

    for (let i = 0; i < 6; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }

  // проводим операцию транзакций
  const OnWithDraw = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {
        // получаем код подтверджения
        const code = document.getElementById('code')

        const data = new FormData();
        data.set("summa", e.target.summa.value);
        data.set("wallet", e.target.wallet.value);
        data.set("user_id", user.id);
        data.set('operation', 'вывод средств')
        data.set('background', '#FF3842')

        // проверяем совпадают ли коды
        if (user.code === code.textContent) {
          const newBalance = parseInt(user.user_balance) - (parseInt(e.target.summa.value) + (e.target.summa.value * 8 / 100));

          const data2 = new FormData();
          data2.set("user_balance", newBalance);

          // // обновляем баланс юзера
          // axios.put(`${server.getApi()}api/users/${user.id}/update/`, data2)
          //   .then(res => {
          //     axios.get(`${server.getApi()}api/users/${user.id}/`)
          //       .then(res => {
          //         loginUser(res.data)
          //       }).catch(error => console.error(error))
          //   })
          //   .catch(error => console.error(error))

          const today = new Date();

          const data3 = new FormData();
          data3.set('summa',  e.target.summa.value);
          data3.set('wallet', e.target.wallet.value)
          data3.set("user_id", user.id);
          data3.set("date", today.toLocaleDateString());
          data3.set('status', 'on_moderation')
          //создаем заявку на вывод средств
          axios.post(`${server.getApi()}api/cashout/`, data3)
            .then(res => {
              setSuccessModal(res.data)
            })
            .catch(error => console.error(error))

          // обновляем список транзакций
          // axios.post(`${server.getApi()}api/balance/`, data)
          //   .then(res => {
          //     update(res.data)
          //   }).catch(error => {
          //   console.error(error);
          // });
        } else {
          validationInput();
          setErrorModalText('неверный код!')
        }
      }).catch(error => console.error(error))
  }

  return (
    <>
      {
        <ModalOverlay>
          <ModalWrapper>
            <form onSubmit={(e) => OnWithDraw(e)}>

              {
                confirmation && (
                  <ConfirmationCode
                    close={closeModal}
                    openSuccessModal={openSuccessModal}
                    back={previousModal}
                    title={'Введите проверочный код'}
                    onConfirmation={OnWithDraw}
                    confirmation={confirmation}
                    validation={validation}
                  />
                )
              }

              <div className="title">Вывести средства</div>
              <button onClick={close} className={'close'}><img src={closed} alt="icon"/></button>

              <MainInput
                label={'Сумма'}
                iconText={'MRC'}
                name={'summa'}
                type={'number'}
                updateValue={getCommission}
                validation={validationSum}
              />
              <div className={'small_info'}>Комиссия: 8% / {sumValue * 8 / 100} MRC</div>

              <MainInput
                label={'Кошелек'}
                name={'wallet'}
                updateValue={getWalletValue}
              />

              <MainButton
                colorBg={true}
                text={'Далее'}
                width={'100%'}
                type={'button'}
                func={sumValue && wallet === '' ? undefined : openConfirmation}
              />

            </form>
          </ModalWrapper>
        </ModalOverlay>
      }
      {
        successModal && (
          <SuccessModal
            close={closeModal}
            title={'Ваша заявка на модерации'}
            data={successModal}
          />
        )
      }
      <SmallErrorModal/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {}
};

const mapDispatchToProps = {
  loginUser,
  setErrorModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(WithDraw);