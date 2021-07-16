import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import CircleProgressBar from './circleProgressBar/circleProgressBar';
import MainButton from "../../../components/mainButton/mainButton";

import {Left, Right, DepositTable, InfoBlock, TabWrap, DepositEnd} from "../styled";

import ServerSettings from "../../../service/serverSettings";

const ActiveDeposit = ({deposit, user, onDelete, percent}) => {
  // записиваем разницу в днях от создания депозита до сегодня
  const [days, setDays] = useState('');
  const [totalPercent, setTotalPercent] = useState('');

  const getPercent = async () => {
    // дата создания депозита
    const depositDate = deposit.created_at.split('T')[0]

    // делаем нужный нам формат для даты создания
    let d1 = new Date(depositDate)
    // сегодняшняя дата
    let today = new Date()
    // получаем количество дней от создания депозита до сегодня
    let days = Math.round((today - d1) / 60 / 60 / 24 / 1000)
    //количество дней для диаграмы записиваем в стейт
    setDays(days)

    // получаем последний елемент начисленых процентов
    let lastItem = percent.slice(-1)[0].created_at
    let lastItemDate = new Date(lastItem)
    let days2 = Math.round((today - lastItemDate) / 60 / 60 / 24 / 1000)

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        // получаем текущый депозит
        const myDeposit = res.data.filter(u => u.user_id === user.id);

        if (myDeposit[0]) {
          axios.get(`${server.getApi()}api/percent/`)
            .then(res => {
              // получаем проценты текущего депозита
              const depositPercent = res.data.filter(u => u.deposit_percent === myDeposit[0].id);

              if (depositPercent) {
                // получаем общее количество всех выплат и записиваем в стейт
                const allPercent = depositPercent.map(u => parseInt(u.summa))
                let totalPercent = allPercent.reduce((a, b) => a + b, 0)
                setTotalPercent(totalPercent)

                const data = new FormData();
                data.set('summa', myDeposit[0].dailyIncome)
                data.set('rate', myDeposit[0].rate)
                data.set('deposit_percent', myDeposit[0].id)

                // получаем разницу в днях между последний начислениям и сегодня и через цикл делаем посты на сервер
                let promises = [];
                for (let i = 0; i < days2; i++) {
                  promises.push(
                    axios.post(`${server.getApi()}api/percent/`, data)
                      .catch(error => console.error(error))
                  )
                }
                Promise.all(promises).then(() => console.log('all done'));

              }
            }).catch(error => console.error(error))
        }
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getPercent().catch(error => console.error(error));
  }, [])

  // получаем прошедшие депозита дни и переводим в % для диаграмы
  let dayInPercent = Math.round((days * 100) / parseInt(deposit.term));

  return (
    <>
      <InfoBlock>
        <Left>
          <div className="top">

            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
              <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent"/>
              <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"
                      strokeWidth="1.8"/>
              <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                      stroke="#4BA499" strokeWidth="1.8" strokeDasharray={`${dayInPercent} ${100 - dayInPercent}`}
                      strokeDashoffset="25"/>
              <g className="chart-text">

                <text x="50%" y="50%" className="chart-number">{parseInt(deposit.term) - days} дней</text>
                <text x="50%" y="50%" className="chart-label">Осталось</text>
              </g>
            </svg>

          </div>
          <div className="bottom">
            <div className="item">
              <div className="title">Тело депозита</div>
              <div className="text">{deposit.summa.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
            </div>
            <div className="item">
              <div className="title">Начислено процентов</div>
              <div className="text">{totalPercent} MRC</div>
            </div>
          </div>
        </Left>
        <Right>
          <h3>Подробнее о вашем депозите</h3>
          <TabWrap>
            <div className="item">
              <div className="name">Срок депозита</div>
              <div className="value">{deposit.term} дней</div>
              <input type="text" name={'month'} value={deposit.term} hidden readOnly/>
            </div>
            <div className="item">
              <div className="name">Процентная ставка</div>
              <div className="value">{deposit.rate}% / день</div>
              <input type="text" name={'percent'} value={deposit.rate} hidden readOnly/>
            </div>
            <div className="item">
              <div className="name">Дневная прибыль</div>
              <div className="value">{deposit.dailyIncome} MRC</div>
              <input type="text" name={'dailyIncome'} value={deposit.dailyIncome} hidden readOnly/>
            </div>
            <div className="item">
              <div className="name">Прогнозируемая прибыль</div>
              <div className="value">{deposit.income.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</div>
              <input type="text" name={'income'} value={deposit.income} hidden readOnly/>
            </div>
            {
              deposit.term ===  days ? (
                <DepositEnd>
                  <div className="text">
                    <div className="top">Программа окончена</div>
                    <div className="bottom">Вы заработали {totalPercent} MRC</div>
                  </div>
                  <MainButton
                    type={'button'}
                    text={'Вывести на кошелек'}
                    colorBg={true}
                    width={'235px'}
                  />
                </DepositEnd>
              ) : (
                <MainButton
                  type={'button'}
                  text={'Отменить депозит'}
                  colorBgRed={true}
                  width={'100%'}
                  func={(e)=>onDelete(e, deposit.id)}
                />
              )
            }
          </TabWrap>
        </Right>
      </InfoBlock>

      <DepositTable>
        <div className="small_title">История начислений</div>
        <table>
          <thead>
          <tr>
            <th>Сумма, MRC</th>
            <th>Сумма, %</th>
            <th>Дата</th>
          </tr>
          </thead>
          <tbody>
          {
            percent.map(item => {
              const date = item.created_at.split('T')[0];
              return (
                <tr key={item.id}>
                  <td>{item.summa}</td>
                  <td>{item.rate}</td>
                  <td>{date}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>
      </DepositTable>
    </>
  )
}


const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveDeposit);