import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import MakeDeposit from './makeDeposit/makeDeposit';
import ActiveDeposit from "./activeDeposit/activeDeposit";

import arrow from './media/icon/arrow_down.svg';
import {DepositWrap, Desc} from './styled';

import ServerSettings from "../../service/serverSettings";
import {loginUser, setSuccessModalText, setErrorModalText} from "../../actions";
import SmallSuccessModal from "../../components/smallSuccessModal/smallSuccessModal";
import SmallErrorModal from "../../components/smallErrorModal/smallErrorModal";
import ConfirmationCode from "./confirmationCode/confirmationCode";

const Deposit = ({user, setSuccessModalText, loginUser, setErrorModalText}) => {
  useEffect(() => {
  }, [user])

  // for button show more text
  const [showMore, setShowMore] = useState(false);
  // записиваем все дание о депозите
  const [deposit, setDeposit] = useState({});
  // все проценты депозита
  const [percent, setPercent] = useState([])
  // валидация
  const [validation, setValidation] = useState(false);
  const [validationSum, setValidationSum] = useState(false);
  const [active, setActive] = useState(false)
  // общая сума всех процентов
  const [totalPercent, setTotalPercent] = useState('');

  useEffect(() => {
    return () => {
      setSuccessModalText(false)
      setErrorModalText(false)
    }
  }, []);

  setTimeout(() => {
    setSuccessModalText(false)
    setErrorModalText(false)
  }, 2500)

  const validationInput = () => {
    setValidation(true)
  }
  const validationSumma = () => {
    setValidationSum(true)
  }

  //выводим средства на кошелек
  const withDrawDeposit = async () => {

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        // получаем нужного юзера
        const needUser = res.data.filter(u => u.user_id === user.id);
        if (needUser) {
          const deposit = needUser.find(d => d.status === 'active');

          if (deposit) {
            // получаем код подтверджения
            const code = document.getElementById('code')

            // новый баланс
            const newBalance = parseInt(user.user_balance) + (parseInt(deposit.summa) + (parseInt(deposit.term) * parseInt(deposit.dailyIncome)))

            const data = new FormData();
            data.set('user_balance', newBalance)

            // проверяем совпадают ли коды
            if (user.code === code.textContent) {
              // обновляем баланс юзера
              axios.put(`${server.getApi()}api/users/${user.id}/update/`, data)
                .then(res => {
                  axios.get(`${server.getApi()}api/users/${user.id}/`)
                    .then(res => {
                      loginUser(res.data)
                      setActive(false)
                    }).catch(error => console.error(error))
                }).catch(error => console.error(error))

              const newSum = parseInt(deposit.summa) + (parseInt(deposit.term) * parseInt(deposit.dailyIncome))
              // обновляем список транзакций
              const data2 = new FormData();
              data2.set("summa", newSum);
              data2.set("user_id", user.id);
              data2.set('operation', 'перевод с депозита')
              data2.set('background', '#36C136')

              axios.post(`${server.getApi()}api/balance/`, data2)
                .catch(error => {
                  console.error(error)
                })

              // delete deposit
              const data3 = new FormData();
              data3.set('status', 'un_active');

              axios.put(`${server.getApi()}api/deposit/${deposit.id}/update/`, data3)
                .then(res => {
                  setActive(false)
                  setDeposit({})
                  //window.location.reload()
                }).catch(error => console.error(error))

              setSuccessModalText('средства выведены')
            } else {
              validationInput()
            }

          }
        }
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    withDrawDeposit().catch(error => console.error(error))
  }, [])

  const showMoreBtn = () => {
    setShowMore(!showMore)
  }

  // записываем дание о депозите в стейт
  const updateList = (event) => {
    setDeposit(event)
  }

  // создаем депозит
  const onMakeDeposit = async (e) => {
    e.preventDefault();
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    // дата создания депозита, получаем нужный формат
    const depositCreate = new Date().toLocaleString().split(',')[0];

    const data = new FormData();
    data.set('summa', e.target.summa.value);
    data.set('term', e.target.month.value);
    data.set('rate', e.target.percent.value);
    data.set('income', e.target.income.value);
    data.set('dailyIncome', e.target.dailyIncome.value);
    data.set("user_id", user.id);
    data.set('total', parseInt(e.target.summa.value) + parseInt(e.target.income.value));
    data.set("deposit_date", depositCreate);
    data.set("status", 'active');

    // получаем текущого пользователя
    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {
        if (parseInt(e.target.summa.value) <= parseInt(user.user_balance) && parseInt(e.target.summa.value) > 0) {
          if (parseInt(e.target.summa.value) < 100) {
            validationSumma();
            setErrorModalText('минимальная сумма 100 MRC')
          } else if (parseInt(e.target.summa.value) > 5000) {
            validationSumma();
            setErrorModalText('максимальная сумма 5000 MRC')
          } else {
            // делаем пост с новым депозитом на сервер
            axios.post(`${server.getApi()}api/deposit/`, data)
              .then(res => {
                setDeposit(res.data)
                setActive(true)
                if (res.data) {
                  const data2 = new FormData();
                  data2.set('summa', res.data.dailyIncome)
                  data2.set('rate', res.data.rate)
                  data2.set('percent_date', depositCreate)
                  data2.set('deposit_percent', res.data.id)

                  axios.post(`${server.getApi()}api/percent/`, data2)
                    .then(res => {
                      axios.get(`${server.getApi()}api/deposit/`)
                        .then(res => {
                          const needUser = res.data.filter(u => u.user_id === user.id);
                          if (needUser) {
                            const currentPercent = needUser.find(d => d.status === 'active');
                            setPercent(currentPercent.percent)
                            const allPercent = currentPercent.percent.map(u => parseFloat(u.summa))
                            const totalPerc = allPercent.reduce((a, b) => a + b)
                            setTotalPercent(totalPerc)

                          }

                        }).catch(error => console.error(error))
                    }).catch(error => console.error(error))
                }
              }).catch(error => console.error(error))

            //обновляем баланс (отнимаем сумму депозита)
            const newBalance = parseInt(user.user_balance) - parseInt(e.target.summa.value)

            const data2 = new FormData();
            data2.set('user_balance', newBalance)

            axios.put(`${server.getApi()}api/users/${user.id}/update/`, data2)
              .then(res => {
                axios.get(`${server.getApi()}api/users/${user.id}/`)
                  .then(res => {
                    loginUser(res.data)
                  }).catch(error => console.error(error))
              }).catch(error => console.error(error))

            // обновляем список транзакций
            const data3 = new FormData();
            data3.set("summa", e.target.summa.value);
            data3.set("user_id", user.id);
            data3.set('operation', 'перевод на депозит')
            data3.set('background', '#FF3842')

            axios.post(`${server.getApi()}api/balance/`, data3)
              .catch(error => {
                console.error(error)
              })
          }
        } else {
          validationSumma();
          setErrorModalText('Недостаточно средств')
        }
      }).catch(error => console.error(error))
  }

  //получаем все даные о текущем депозите
  const getDeposit = async () => {
    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        // получаем нужного юзера
        const needUser = res.data.filter(u => u.user_id === user.id);

        if (needUser) {
          // получаем активный депозит текущого юзера
          const activeDep = needUser.find(d => d.status === 'active');

          if (activeDep) {
            setDeposit(activeDep)
            setPercent(activeDep.percent)
            setActive(true)

            const allPercent = activeDep.percent.map(u => parseFloat(u.summa))
            const totalPerc = allPercent.reduce((a, b) => a + b)
            setTotalPercent(totalPerc)
          } else {
            setDeposit({})
            setPercent([])
            setActive(false)
            setTotalPercent(0)
          }
        }
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getDeposit().catch(error => console.error(error));
  }, [])

  // отменить дапозит
  const onDelete = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        // получаем нужного юзера
        const needUser = res.data.filter(u => u.user_id === user.id);
        if (needUser) {
          const deposit = needUser.find(d => d.status === 'active');
          if (deposit) {
            const newBalance = parseInt(user.user_balance) + parseInt(deposit.summa);

            const data = new FormData();
            data.set('user_balance', newBalance);

            axios.put(`${server.getApi()}api/users/${user.id}/update/`, data)
              .then(res => {
                axios.get(`${server.getApi()}api/users/${user.id}/`)
                  .then(res => {
                    loginUser(res.data)
                  }).catch(error => console.error(error))
              })
              .catch(error => console.error(error))

            const data2 = new FormData();
            data2.set('status', 'un_active');

            axios.put(`${server.getApi()}api/deposit/${deposit.id}/update/`, data2)
              .then(res => {
                setActive(false)
                setDeposit({})
                console.log('delete')
              }).catch(error => console.error(error))

            // обновляем список транзакций
            const data3 = new FormData();
            data3.set("summa", deposit.summa);
            data3.set("user_id", user.id);
            data3.set('operation', 'отмена депозита')
            data3.set('background', '#36C136')

            axios.post(`${server.getApi()}api/balance/`, data3)
              .catch(error => {
                console.error(error)
              })
          }
        }
      }).catch(error => console.error(error));
  }

  return (
    <div className={'main_container'}>
      <DepositWrap>
        <div className="title">Программа Mira Deposit</div>

        <Desc show={showMore}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur et odio eget massa blandit posuere.
            Integer sed massa nisi. Morbi eget lectus nulla. Integer sodales elit sed consequat volutpat. Curabitur
            lectus felis, interdum nec nulla a, elementum sagittis felis. Donec congue, felis ege... massa nisi. Morbi
            eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla.
            Integer massa nisi. Morbi eget lectus nulla. Integer massa nisi. Morbi eget lectus nulla. Integer</p>
          <button onClick={showMoreBtn}>{showMore ? 'Скрыть' : 'Подробнее'}<img src={arrow} alt="icon"/></button>
        </Desc>

        {
          active
            ? <ActiveDeposit
              deposit={deposit}
              percent={percent}
              user={user}
              onDelete={onDelete}
              updateList={updateList}
              withDrawDeposit={withDrawDeposit}
              validation={validation}
              totalPercent={totalPercent}
            />

            : <MakeDeposit
              updateList={updateList}
              onMakeDeposit={onMakeDeposit}
              validation={validationSum}
            />
        }
      </DepositWrap>

      <SmallSuccessModal/>
      <SmallErrorModal/>

    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);