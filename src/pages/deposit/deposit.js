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
  const [deposit, setDeposit] = useState([]);
  const [percent, setPercent] = useState([])
  const [validation, setValidation] = useState(false);
  const [validationSum, setValidationSum] = useState(false);

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
        const deposit = res.data.filter(d => d.user_id === user.id)

        if(deposit[0]){
          // получаем код подтверджения
          const code = document.getElementById('code')
          // новый баланс
          const newBalance = parseInt(user.user_balance) + parseInt(deposit[0].total)

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
                  }).catch(error => console.error(error))
              }).catch(error => console.error(error))

            // удаляем депозит
            axios.delete(`${server.getApi()}api/deposit/${deposit[0].id}/delete/`, { body: 'delete' })
              .then(res => {
                axios.get(`${server.getApi()}api/deposit/`)
                  .then(res => {
                    const deposit = res.data.filter(u => u.user_id === user.id);
                    setDeposit(deposit)
                  }).catch(error => console.error(error));
              }).catch(error => console.error(error));

            setSuccessModalText('средства выведены')
          } else {
            validationInput()
          }

        }
      }).catch(error => console.error(error))
  }

  useEffect(()=> {
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

    const data = new FormData();
    data.set('summa', e.target.summa.value);
    data.set('term', e.target.month.value);
    data.set('rate', e.target.percent.value);
    data.set('income', e.target.income.value);
    data.set('dailyIncome', e.target.dailyIncome.value);
    data.set("user_id", user.id);
    data.set('total', parseInt(e.target.summa.value) + parseInt(e.target.income.value));
    // получаем текущого пользователя
    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {
        if(parseInt(e.target.summa.value) <= parseInt(user.user_balance) && parseInt(e.target.summa.value) > 0){
          // делаем пост с новым депозитом на сервер
          axios.post(`${server.getApi()}api/deposit/`, data)
            .then(res => {

              axios.get(`${server.getApi()}api/deposit/`)
                .then(res => {
                  // получаем депозит текущого пользователя
                  const dep = res.data.filter(deposit => parseInt(deposit.user_id) === parseInt(user.id))
                  setDeposit(dep)
                  // если депозит найден делаем первое начисление процентов
                  if (dep[0]) {
                    const data2 = new FormData();
                    data2.set('summa', dep[0].dailyIncome)
                    data2.set('rate', dep[0].rate)
                    data2.set('deposit_percent', dep[0].id)

                    axios.post(`${server.getApi()}api/percent/`, data2)
                      .then(res => {
                        // получаем начисления пользователя
                        axios.get(`${server.getApi()}api/deposit/`)
                          .then(res => {
                            // получаем начисления текущого пользователя
                            const userPercent = res.data.filter(deposit => parseInt(deposit.user_id) === parseInt(user.id))
                            // записиваем начисления в стейт

                            if (userPercent[0]) {
                              setPercent(userPercent[0].percent)
                            }
                          }).catch(error => console.error(error))
                      }).catch(error => console.error(error))
                  }
                }).catch(error => console.error(error))
            })
            .catch(error => console.error(error))

          //обновляем баланс (отнимаем сумму депозита)
          const newBalance = parseInt(user.user_balance) - parseInt(e.target.summa.value)

          const data2 = new FormData();
          data2.set('user_balance' , newBalance)

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

  // получаем все даные о текущем депозите
  const getDeposit = async () => {
    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        const dep = res.data.filter(deposit => parseInt(deposit.user_id) === parseInt(user.id))
        setDeposit(dep)
        setPercent(dep[0].percent)
        // if(dep[0]){
        //   axios.get(`${server.getApi()}api/percent/`)
        //     .then(res => {
        //       // получаем проценты текущего депозита
        //       const depositPercent = res.data.filter(u => u.deposit_percent === dep[0].id);
        //
        //       const lastItem = depositPercent.slice(-1)[0].created_at;
        //       let lastItemDate = new Date(lastItem)
        //       let days2 = Math.round((today - lastItemDate) / 60 / 60 / 24 / 1000)
        //       setRemainder(days2)
        //     }).catch(error => console.error(error))
        // }
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getDeposit().catch(error => console.error(error));
  }, [])

  // удалить дапозит
  const onDelete = async (e ,id) => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    await axios.delete(`${server.getApi()}api/deposit/${id}/delete/`, { body: 'delete' })
      .then(res => {
        axios.get(`${server.getApi()}api/deposit/`)
          .then(res => {
            const deposit = res.data.filter(u => u.user_id === user.id);
            setDeposit(deposit)
          }).catch(error => console.error(error));
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
          deposit.length === 1
            ? (
              <ActiveDeposit
                deposit={deposit[0]}
                percent={deposit[0].percent}
                user={user}
                onDelete={onDelete}
                updateList={updateList}
                withDrawDeposit={withDrawDeposit}
                validation={validation}
              />
            ) : (
              <MakeDeposit
                updateList={updateList}
                onMakeDeposit={onMakeDeposit}
                validation={validationSum}
              />
            )
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