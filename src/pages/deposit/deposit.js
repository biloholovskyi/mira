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

const Deposit = ({user, setSuccessModalText, loginUser, setErrorModalText}) => {
  useEffect(() => {
  }, [user])

  // for button show more text
  const [showMore, setShowMore] = useState(false);
  // записиваем все дание о депозите
  const [deposit, setDeposit] = useState({});
  const [percent, setPercent] = useState([])
  const [validation, setValidation] = useState(false);
  const [validationSum, setValidationSum] = useState(false);
  const [active, setActive] = useState(false)

  useEffect(() => {
    return () => {
      setSuccessModalText(false)
      setErrorModalText(false)
    }
  }, []);

  setTimeout(() => {
    setSuccessModalText(false)
    setErrorModalText(false)
  }, 3000)

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
        const deposit = res.data.find(d => d.status === 'active');

        if (deposit) {
          // получаем код подтверджения
          const code = document.getElementById('code')

          // новый баланс
          const newBalance = parseInt(user.user_balance) + parseInt(deposit.total)

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

            // обновляем список транзакций
            const data2 = new FormData();
            data2.set("summa", deposit.total);
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
              }).catch(error => console.error(error))

            setSuccessModalText('средства выведены')
          } else {
            validationInput()
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
                        const currentPercent = res.data.find(d => d.status === 'active');
                        setPercent(currentPercent.percent)
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

        } else {
          validationSumma();
          setErrorModalText('Не достаточно средств')
        }
      }).catch(error => console.error(error))
  }

  //получаем все даные о текущем депозите
  const getDeposit = async () => {
    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        const activeDep = res.data.find(d => d.status === 'active');

        if (activeDep.status === 'active') {
          setDeposit(activeDep)
          setPercent(activeDep.percent)
          setActive(true)
        } else {
          setDeposit({})
          setPercent([])
          setActive(false)
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
        const deposit = res.data.find(d => d.status === 'active');
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