import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import CircleProgressBar from './circleProgressBar/circleProgressBar';
import MainButton from "../../../components/mainButton/mainButton";

import {Left, Right, DepositTable, InfoBlock, TabWrap} from "../styled";

import ServerSettings from "../../../service/serverSettings";

const ActiveDeposit = ({deposit, term, user}) => {
  const [percent, setPercent] = useState([]);
  console.log(percent)


  const getPercent = async () => {
    const depositDate = deposit.created_at.split('T')[0]

    let d1 = new Date(depositDate)
    let today = new Date()
    let days = Math.floor((today - d1) / 60 / 60 / 24 / 1000)

    // let lastItem = percent.slice(-1)[0].created_at
    // let lastItemDate = new Date(lastItem)

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        const myDeposit = res.data.filter(u => u.user_id === user.id);
        const percentDate = myDeposit[0].created_at.split('T')[0];

        if (myDeposit[0]) {
          if (1 > 2) {
            const data = new FormData();
            data.set('summa', 17)
            data.set('rate', myDeposit[0].rate)
            data.set('created_at', percentDate)
            data.set('deposit_percent', myDeposit[0].id)

            axios.post(`${server.getApi()}api/percent/`, data)
              .catch(error => console.error(error))
          }
        }
        setPercent(myDeposit[0].percent)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getPercent().catch(error => console.error(error));
  }, [])

  return (
    <>
      <InfoBlock>
        <Left>
          <div className="top">

            {/*<CircleProgressBar*/}
            {/*  term={term}*/}
            {/*/>*/}

            <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
              <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent"/>
              <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"
                      strokeWidth="1.8"/>
              <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                      stroke="#4BA499" strokeWidth="1.8" strokeDasharray="81 19" strokeDashoffset="25"/>
              <g className="chart-text">

                <text x="50%" y="50%" className="chart-number">180 дней</text>
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
              <div className="text"> MRC</div>
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

            <MainButton
              type={'button'}
              text={'Отменить депозит'}
              colorBgRed={true}
              width={'100%'}
              //onClick={console.log('test')}
            />
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
          <tr>
            <td></td>
            <td></td>
            <td></td>
          </tr>
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