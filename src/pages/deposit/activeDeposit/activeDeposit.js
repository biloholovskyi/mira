import React, {useEffect, useState} from "react";
import axios from "axios";
import {connect} from "react-redux";

import MainButton from "../../../components/mainButton/mainButton";
import ConfirmationCode from "../confirmationCode/confirmationCode";

import {Left, Right, DepositTable, InfoBlock, TabWrapper, DepositEnd} from "../styled";

import {loginUser, setSuccessModalText} from '../../../actions/index';
import ServerSettings from "../../../service/serverSettings";
import Spinner from '../../../components/spinner/spinner';

const ActiveDeposit = ({
                         deposit,
                         user,
                         onDelete,
                         percent,
                         loginUser,
                         validation,
                         withDrawDeposit,
                         totalPercent,
                         spinner
                       }) => {
  // записиваем разницу в днях от создания депозита до сегодня
  const [days, setDays] = useState('');
  const [confirmation, setConfirmation] = useState(false)
  const [deleteDeposit, setDeleteDeposit] = useState(false)

  const getPercent = async () => {
    // дата создания депозита
    const depositDate = deposit.deposit_date.split('.')
    const newDepositDate = `${depositDate[2]}-${depositDate[1]}-${depositDate[0]}`

    // делаем нужный нам формат для даты создания
    let d1 = new Date(newDepositDate)
    // сегодняшняя дата
    let today = new Date()
    // получаем количество дней от создания депозита до сегодня
    let days = Math.round((today - d1) / 60 / 60 / 24 / 1000)
    //количество дней для диаграмы записиваем в стейт
    setDays(days)

    // получаем последний елемент начисленых процентов
    let lastItem = sortPercentList[0].percent_date;
    const newFormat = lastItem.split('.');
    const newPercentDate = `${newFormat[2]}-${newFormat[1]}-${newFormat[0]}`
    let lastItemDate = new Date(newPercentDate)
    let days2 = Math.floor((today - lastItemDate) / 60 / 60 / 24 / 1000)

    const server = new ServerSettings();

    await axios.get(`${server.getApi()}api/deposit/`)
      .then(res => {
        // получаем нужного юзера
        const needUser = res.data.filter(u => u.user_id === user.id);
        if (needUser) {
          // получаем текущый депозит
          const myDeposit = needUser.find(d => d.status === 'active');

          if (myDeposit) {
            axios.get(`${server.getApi()}api/percent/`)
              .then(res => {
                // получаем проценты текущего депозита
                const depositPercent = res.data.filter(u => u.deposit_percent === myDeposit.id);

                if (depositPercent) {
                  if (myDeposit.percent.length === deposit.percent.length) {
                    let counter = deposit.term - percent.length;

                    // получаем разницу в днях между последний начислениям и сегодня и через цикл делаем посты на сервер
                    for (let i = 0; i < days2; i++) {
                      if (counter > 0) {
                        // форматируем дату для начисления процентов
                        const formatLastDate = lastItemDate.setDate(lastItemDate.getDate() + 1)
                        const newFormatLastDate = new Date(formatLastDate);

                        const data = new FormData();
                        data.set('summa', myDeposit.dailyIncome)
                        data.set('rate', myDeposit.rate)
                        data.set('deposit_percent', myDeposit.id)
                        data.set('percent_date', newFormatLastDate.toLocaleString().split(',')[0])

                        axios.post(`${server.getApi()}api/percent/`, data)
                          .catch(error => console.error(error))
                      }
                      counter--
                    }
                  }
                }
              }).catch(error => console.error(error))
          }
        }
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getPercent().catch(error => console.error(error));
  }, [])

  // закритие модалки
  const closeModal = () => {
    setConfirmation(false)
  }

  // отправляем письмо с кодом
  const openConfirmationModal = () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

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
            setConfirmation(true)
          }).catch(error => {
          console.error(error);
        });

      }).catch(error => {
      console.error(error);
    });
  }

  // генерируем пароль
  const generatePassword = () => {
    let pass = "";
    let possible = "0123456789";

    for (let i = 0; i < 6; i++)
      pass += possible.charAt(Math.floor(Math.random() * possible.length));

    return pass;
  }

  // получаем прошедшие депозита дни и переводим в % для диаграмы
  let dayInPercent = Math.round((days * 100) / parseInt(deposit.term));

  // получаем дату и меняем в нужном формате
  const sortPercentList = percent.map(event => {
    const date = event.percent_date.split('.');
    const newFormatDate = `${date[2]}-${date[1]}-${date[0]}`
    const test = new Date(newFormatDate);
    return {...event, sortTime: test};
  })

  // соритруем по дате
  sortPercentList.sort((a, b) => {
    return new Date(a.sortTime).getTime() - new Date(b.sortTime).getTime()
  }).reverse()

  // отправляем письмо с кодом
  const openDeleteDeposit = () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

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
            setConfirmation(true)
            setDeleteDeposit(true)
          }).catch(error => {
          console.error(error);
        });

      }).catch(error => {
      console.error(error);
    });
  }

  return (
    <>
      <InfoBlock>
        <Left>
          <div className="top">

            <div className="diagramma">
              <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
                <circle className="donut-hole" cx="21" cy="21" r="15.91549430918954" fill="transparent"/>
                <circle className="donut-ring" cx="21" cy="21" r="15.91549430918954" fill="transparent" stroke="#d2d3d4"
                        strokeWidth="1.8"/>
                <circle className="donut-segment" cx="21" cy="21" r="15.91549430918954" fill="transparent"
                        stroke="#4BA499" strokeWidth="1.8" strokeDasharray={`${dayInPercent} ${100 - dayInPercent}`}
                        strokeDashoffset="25"/>
              </svg>
              <div className="chart-text">
                <div
                  className="chart-number">{parseInt(deposit.term) - days <= 0 ? 0 : parseInt(deposit.term) - days} дней
                </div>
                <div className="chart-label">Осталось</div>
              </div>
            </div>
          </div>
          <div className="bottom">
            <div className="item">
              <div className="title">Тело депозита</div>
              <div className="text">{deposit.summa} MRC</div>
            </div>
            <div className="item">
              <div className="title">Начислено процентов</div>
              <div className="text">{totalPercent} MRC</div>
            </div>
          </div>
        </Left>
        <Right>
          <h3>Подробнее о вашем депозите</h3>
          <TabWrapper>
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
              <div className="value">{deposit.income} MRC</div>
              <input type="text" name={'income'} value={deposit.income} hidden readOnly/>
            </div>
            {/*.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')*/}
            {
              days >= deposit.term ? (

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
                    func={openConfirmationModal}
                  />
                </DepositEnd>
              ) : (
                <MainButton
                  type={'button'}
                  text={'Отменить депозит'}
                  colorBgRed={true}
                  width={'100%'}
                  func={openDeleteDeposit}
                />
              )
            }
          </TabWrapper>
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
          {
            spinner ? (
              <Spinner/>
            ) : (
              <tbody>
              {
                sortPercentList.map(item => {
                  return (
                    <tr key={item.id}>
                      <td>{item.summa}</td>
                      <td>{item.rate}</td>
                      <td>{item.percent_date}</td>
                    </tr>
                  )
                })
              }
              </tbody>
            )
          }
        </table>
      </DepositTable>
      {
        confirmation && (
          <ConfirmationCode
            title={'Введите проверочный код'}
            validation={validation}
            close={closeModal}
            withDrawDeposit={withDrawDeposit}
            deleteDeposit={deleteDeposit}
            onDelete={onDelete}
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
  setSuccessModalText
};

export default connect(mapStateToProps, mapDispatchToProps)(ActiveDeposit);