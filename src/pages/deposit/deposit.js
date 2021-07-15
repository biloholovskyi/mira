import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import MakeDeposit from './makeDeposit/makeDeposit';
import ActiveDeposit from "./activeDeposit/activeDeposit";

import arrow from './media/icon/arrow_down.svg';
import {DepositWrap, Desc} from './styled';

import ServerSettings from "../../service/serverSettings";
import {loginUser} from "../../actions";

const Deposit = ({user, loginUser}) => {
  useEffect(()=> {
  }, [user])
  // for button show more text
  const [showMore, setShowMore] = useState(false);
  // записиваем все дание о депозите
  const [deposit, setDeposit] = useState([]);
  const [activeDeposit, setActiveDeposit] = useState(false);

  const showMoreBtn = () => {
    setShowMore(!showMore)
  }

  // записываем дание о депозите в стейт
  const updateList = (event) => {
    setDeposit(event)
  }

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

    await axios.get(`${server.getApi()}api/users/${user.id}/`)
      .then(res => {

        axios.post(`${server.getApi()}api/deposit/`, data)
          .then(res => {

             axios.get(`${server.getApi()}api/deposit/`)
              .then(res => {
                const dep = res.data.filter(deposit => parseInt(deposit.user_id) === parseInt(user.id))
                setDeposit(dep)
              }).catch(error => console.error(error))

          })
          .catch(error => console.error(error))

        setActiveDeposit(true)
      }).catch(error => console.error(error))
  }

  const getDeposit = async () => {
    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        const dep = res.data.filter(deposit => parseInt(deposit.user_id) === parseInt(user.id))
        setDeposit(dep)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getDeposit().catch(error => console.error(error));
  }, [])

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
          deposit.length >= 1
            ? (
            deposit.map(item => {
              return (
                <ActiveDeposit
                  key={item.id}
                  deposit={item}
                  term={item.term}
                  user={user}
                />
              )
            })
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