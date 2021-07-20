import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import MainInput from '../../components/mainInput/mainInput';
import MainButton from "../../components/mainButton/mainButton";
import WithDraw from './modals/withDraw/withDraw';
import ConfirmationCode from './modals/confirmationCode/confirmationCode';
import TopUpModal from "./modals/topUpModal/topUpModal";

import {Top, BalanceBlock, InfoBlock, TableWrap} from './styled';
import search from './media/icon/search.svg';

import {loginUser, setSuccessModalText, setErrorModalText} from "../../actions";
import ServerSettings from "../../service/serverSettings";
import SmallSuccessModal from "../../components/smallSuccessModal/smallSuccessModal";
import SmallErrorModal from "../../components/smallErrorModal/smallErrorModal";
import Preloader from "../../components/preloader/preloader";

const Balance = ({user, setSuccessModalText, loginUser, setErrorModalText}) => {
  // модалка вывода средств
  const [withDraw, setWithDraw] = useState(false);
  // модалка пополнения стеча
  const [topUpModal, setTopUpModal] = useState(false)
  // модалка перевода средств
  const [transferModal, setTransferModal] = useState(false)
  // записываем баланс пользователя для истории
  const [balanceList, setBalanceList] = useState([])
  const [userEmail, setUserEmail] = useState('');
  const [transferSum, setTransferSUm] = useState('')
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

  const updateValue = (value) => {
    setUserEmail(value)
  }

  const updateTransferSum = (value) => {
    setTransferSUm(value)
  }

  useEffect(() => {
    return () => {
      setSuccessModalText(false)
    }
  }, []);

  setTimeout(() => {
    setSuccessModalText(false)
  }, 1500)

  // закритие модалок
  const closeModal = () => {
    setWithDraw(false)
    setTopUpModal(false)
    setTransferModal(false)
  }

  // получаем историю операций текущого пользователя
  const getUserBalance = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();
    await axios.get(`${server.getApi()}api/balance/`)
      .then(res => {
        const userBalance = res.data.filter(balance => parseInt(balance.user_id) === parseInt(user.id))
        if (userBalance) {
          setBalanceList(userBalance)
        }
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getUserBalance().catch(error => console.error(error));
  }, [])

  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

  // обновляем баланс
  const updateBalance = (event) => {
    setBalanceList([...balanceList, event])
  }

  // делаем перевод другому пользователю
  const makeTransfer = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';
    // получаем код подтверджения
    const code = document.getElementById('code')

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/`)
      .then(res => {
        // получаем пользователя которому будет перевод
        const needUser = e.target.selectUser.value;
        const getUser = res.data.find(u => u.email === needUser);

        const data = new FormData();
        data.set('email', e.target.selectUser.value);
        data.set('summa', e.target.transferSumma.value);
        data.set('operation', 'перевод')
        data.set('user_id', getUser.id)

        // проверяем совпадают ли коды
        if (user.code === code.textContent) {
          // баланс текущого пользователя
          const newBalance = parseInt(user.user_balance) - parseInt(e.target.transferSumma.value);
          // баланс пользователя которому перевели деньги
          const otherBalance = parseInt(getUser.user_balance) + parseInt(e.target.transferSumma.value);

          const data2 = new FormData();
          data2.set("user_balance", newBalance);

          const data4 = new FormData();
          data4.set("user_balance", otherBalance);
          // обновляем баланс текущого пользователя
          axios.put(`${server.getApi()}api/users/${user.id}/update/`, data2)
            .then(res => {
              axios.get(`${server.getApi()}api/users/${user.id}/`)
                .then(res => {
                  loginUser(res.data)
                }).catch(error => console.error(error))
            })
            .catch(error => console.error(error))

          // обновляем баланс пользователя которому перевели
          axios.put(`${server.getApi()}api/users/${getUser.id}/update/`, data4)
            .catch(error => console.error(error))

          const data3 = new FormData();
          data3.set('email', e.target.selectUser.value);
          data3.set('summa', e.target.transferSumma.value);
          data3.set('operation', 'перевод')
          data3.set('user_id', user.id)
          data3.set('background', '#FF3842')

          // обновляем список транзакций текущого пользователя
          axios.post(`${server.getApi()}api/balance/`, data3)
            .then(res => {
              updateBalance(res.data)
            }).catch(error => console.error(error))

          // обновляем список транзакций пользователя которому перевели
          axios.post(`${server.getApi()}api/balance/`, data)
            .then(res => {
              updateBalance(res.data)
            }).catch(error => console.error(error))

          // закриваем модалки и очищаем инпуты
          closeModal()
          //window.location.assign('/balance')
          e.target.selectUser.value = ''
          e.target.transferSumma.value = ''
          setSuccessModalText('Средства были отправлены')
          setValidation(false)
        } else {
          //alert('Не верный пароль!')
          validationInput();
          setErrorModalText('Не верный код!')

        }
      }).catch(error => console.error(error))
  }

  // отправляем письмо и откриваем модалку подтверджения для перевода
  const openTransferModal = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/users/`)
      .then(res => {
        const mail = res.data.find(u => u.email === userEmail);
        // проверяем найден ли юзер
        if (mail) {
          // проверяем что б невозмоно было зайти в минус
          if (parseInt(transferSum) <= user.user_balance) {

            const data = new FormData();
            data.set('code', generatePassword())

            axios.put(`${server.getApi()}api/users/${user.id}/update/`, data)
              .then(res => {

                axios.get(`${server.getApi()}api/users/${user.id}/`)
                  .then(res => {
                    loginUser(res.data)
                  }).catch(error => console.error(error))

                // отправляем письмо
                axios.get(`${server.getApi()}api/user/code/${user.id}/`)
                  .then(res => {
                    setTransferModal(true)
                  }).catch(error => {
                  console.error(error);
                });

              }).catch(error => {
              console.error(error);
            });
            setValidationSum(false)
          } else {
            //alert('у вас недостаточно средств')
            validationSumma();
            setErrorModalText('у вас недостаточно средств')
          }
          setValidation(false)
        } else {
          //alert('user not found')
          validationInput()
          setErrorModalText('Пользователь не найден!')
        }
      }).catch(error => {
        console.error(error);
      });
  }

  // генерируем код
  const generatePassword = () => {
    let pass = "";
    let possible = "0123456789";

    for (let i = 0; i < 6; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }

  // получаем дату и меняем в нужном формате
  const sortList = balanceList.map(event => {
    const date = event.date.split('T')[0]
    const myDate = formatDate(date)
    return {...event, sortTime: myDate};
  })

  // соритруем по дате
  sortList.sort((a, b) => {
    return new Date(a.sortTime).getTime() - new Date(b.sortTime).getTime()
  }).reverse();

  return (
    <>
      <div className={'main_container'}>
        <Top>
          <BalanceBlock>
            <div className="small_title">Баланс</div>
            <div className="info">{user.user_balance} MRC <span>151 217,89 ₽</span></div>
            <div className="btn_section">

              <MainButton
                type={'button'}
                text={'Вывести'}
                width={'50%'}
                func={() => setWithDraw(true)}
              />

              <MainButton
                type={'button'}
                text={'Пополнить'}
                colorBg={true}
                width={'50%'}
                func={() => setTopUpModal(true)}
              />

            </div>
          </BalanceBlock>

          <InfoBlock>
            <form onSubmit={(e) => makeTransfer(e)}>
              <div className="title">Перевод другому пользователю</div>

              <MainInput
                label={'Выберите пользователя'}
                type={'text'}
                name={'selectUser'}
                placeholder={'Введите Email'}
                icon={search}
                updateValue={updateValue}
                validation={validation}
              />

              <MainInput
                label={'Сумма перевода'}
                type={'number'}
                name={'transferSumma'}
                iconText={'MRC'}
                updateValue={updateTransferSum}
                validation={validationSum}
              />

              <MainButton
                text={'Перевести'}
                colorBg={true}
                width={'100%'}
                type={'button'}
                func={openTransferModal}
              />
              {
                transferModal && (
                  <ConfirmationCode
                    transferModal={transferModal}
                    title={'Подтвердите перевод'}
                    close={closeModal}
                    validation={validation}
                  />
                )
              }
            </form>
          </InfoBlock>
        </Top>

        <TableWrap>
          <div className="small_title">История операций</div>
          <table>
            <thead>
            <tr>
              <th>Операция</th>
              <th>Статус</th>
              <th>Дата</th>
              <th>Сумма</th>
              {/*<th>Коментарий к платежу</th>*/}
            </tr>
            </thead>
            <tbody>
            {
              sortList.map(item => {
                const MyNewDate = item.date.split('T')[0]
                const dateNormal = formatDate(MyNewDate);
                return (
                  <tr key={item.id}>
                    <td>
                      <div className="info">
                        <div className="indicator" style={{backgroundColor: item.background}}/>
                        <div className="name">{item.operation}</div>
                        <div className="mobile_summ">{item.summa} MRC</div>
                      </div>
                    </td>
                    <td>{item.status === 'Conducted' ? 'Проведено' : 'Не Проведено'}</td>
                    <td>{dateNormal}</td>
                    <td>{item.summa}</td>
                    {/*<td>Коментарий</td>*/}
                  </tr>
                )
              })
            }
            </tbody>
          </table>
        </TableWrap>
        {/*маленькая модалка успеха*/}
        <SmallSuccessModal/>
        <SmallErrorModal/>
      </div>
      {
        withDraw && (
          <WithDraw
            user={user}
            update={updateBalance}
            close={closeModal}
          />
        )
      }
      {
        topUpModal && (
          <TopUpModal
            close={closeModal}
            update={updateBalance}
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
  loginUser,
  setSuccessModalText,
  setErrorModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(Balance);