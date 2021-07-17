import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import MakeDeposit from './makeDeposit/makeDeposit';
import ActiveDeposit from "./activeDeposit/activeDeposit";

import arrow from './media/icon/arrow_down.svg';
import {DepositWrap, Desc} from './styled';

import ServerSettings from "../../service/serverSettings";
import {loginUser} from "../../actions";

const Deposit = ({user}) => {
  useEffect(() => {
  }, [user])

  // for button show more text
  const [showMore, setShowMore] = useState(false);
  // записиваем все дание о депозите
  const [deposit, setDeposit] = useState([]);
  const [percent, setPercent] = useState([])

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
              />
            ) : (
              <MakeDeposit
                updateList={updateList}
                onMakeDeposit={onMakeDeposit}
              />
            )
        }
      </DepositWrap>
    </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Deposit);