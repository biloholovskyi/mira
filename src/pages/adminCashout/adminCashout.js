import React, {useEffect, useState} from "react";
import axios from "axios";

import MainButton from "../../components/mainButton/mainButton";
import Pagination from "./pagination/pagination";
import Calendar from "./calendar/calendar";

import {AdminUserWrap, InfoSection, TabHead, TabHeadNav, TableWrap, CashoutInfoModal} from "./styled";
import arrow from "./media/arrow-down.svg";
import calendar from "./media/calenadar.svg";
import all from './media/all.svg';

import ServerSettings from "../../service/serverSettings";
import {loginUser, getAllCashout} from '../../actions/index';
import {connect} from "react-redux";
import {Redirect} from "react-router";

const AdminCashout = ({users, cashout, loginUser, getAllCashout}) => {
  const [tabStatus, setTabStatus] = useState('on_moderation');
  const [cashoutOnModeration, setCashOutOnModeration] = useState([])
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);
  // for calendar
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarTitle, setCalendarTitle] = useState('');
  //записиваем диапазон выбраних дат
  const [diapason, setDiapason] = useState({from: '', to: ''})
  const [checkedModal, setCheckedModal] = useState([])
  const [selectedSum, setSelectedSum] = useState([])
  const [totalSum, setTotalSum] = useState('');


  const getDiapasonDate = (value) => {
    setDiapason(value)
  }
   useEffect(() => {
    // получаем все пополнения и записиваем в стейт
    const getCashout = cashout.filter(u => u.status === 'on_moderation')
    setCashOutOnModeration(getCashout)
  }, [])

  // change categories Tab
  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

  // получаем дату и меняем в нужном формате
  const sortList = cashoutOnModeration.map(event => {
    const date = event.date.split('T')[0]
    const myDate = formatDate(date)
    const dateReal = new Date(date);
    return {...event, sortTime: myDate, realDate: dateReal};
  })

  // соритруем по дате
  sortList.sort((a, b) => {
    return new Date(a.sortTime).getTime() - new Date(b.sortTime).getTime()
  }).reverse();

  // для пагинации
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentCashout = sortList.slice(firstUserIndex, lastUserIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  // сортируем масив за сегодня
  const handleClickToday = () => {
    // сегодня
    const date = new Date();
    const myDate = date.toLocaleDateString();

    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    // перезаписиваем масив  с даными
    const getTopUp = sortList.filter(u => u.sortTime === myDate)
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
    setCalendarTitle('Сегодня')
  }

  // сортируем масив за вчера
  const handleClickYesterday = () => {
    const date = new Date();
    const yesterday = date.setDate(date.getDate() - 1);
    const formatYesterday = new Date(yesterday)
    const newFormatYesterday = formatYesterday.toLocaleDateString();

    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    const getTopUp = sortList.filter(u => u.sortTime === newFormatYesterday)
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
    setCalendarTitle('Вчера')
  }

  // //сортируем масив за текущею неделю
  const handleClickWeek = () => {
    const curr = new Date;
    // первый день текущей недели
    const firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 1));
    // последний день текущей недели
    const lastDay = new Date(curr.setDate(curr.getDate() - curr.getDay() + 7));

    const newFirstDay = firstDay.toLocaleDateString()
    const newLastDay = lastDay.toLocaleDateString()

    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    const getTopUp = sortList.filter(u => u.realDate >= firstDay && u.realDate <= lastDay)
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
    setCalendarTitle('Эта неделя')
  }

  //сортируем масив за текущею неделю
  const handleClickMonth = () => {
    const date = new Date;
    const y = date.getFullYear()
    const m = date.getMonth()
    const firstDay = new Date(y, m, 1);

    const newFirstDayOfMonth = firstDay.toLocaleDateString()
    const newLastDayOfMonth = date.toLocaleDateString();

    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    const getTopUp = sortList.filter(u => u.sortTime >= newFirstDayOfMonth && u.sortTime <= newLastDayOfMonth)
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
    setCalendarTitle('Этот месяц')
  }

  //сортируем масив за последние две недели
  const handleClickTwoWeeks = () => {
    const dateNow = new Date();
    // первый день предедущей недели
    const firstDayOfTheWeek = (dateNow.getDate() - dateNow.getDay()) + 1;
    const firstDayOfLastWeek = new Date(dateNow.setDate(firstDayOfTheWeek - 7));

    const newFirstDayOfLastWeek = firstDayOfLastWeek.toLocaleDateString()

    const today = new Date;
    const newToday = today.toLocaleDateString()

    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    const getTopUp = sortList.filter(u => u.realDate >= new Date(firstDayOfLastWeek) && u.realDate <= today)
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
    setCalendarTitle('Последние две недели')
  }

  // за год
  const handleClickYear = () => {
    const today = new Date();
    const currentYear = today.getFullYear();
    const firstDayCurrYear = new Date(currentYear, 0, 1);
    const lastDayCurrYear = new Date(currentYear, 11, 31);

    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    const getTopUp = sortList.filter(u => u.realDate >= firstDayCurrYear && u.realDate <= lastDayCurrYear)
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
    setCalendarTitle('Этот год')
  }
  // для выбора диаразона дат в календаре
  const selectDiapasonDate = () => {
    // получаем все пополнения
    const getCashout = cashout.filter(u => u.status === 'on_moderation')

    // получаем дату и меняем в нужном формате
    const sortList = getCashout.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      const dateReal = new Date(date);
      return {...event, sortTime: myDate, realDate: dateReal};
    })

    const getTopUp = sortList.filter(u => u.realDate >= new Date(diapason.from) && u.realDate <= new Date(diapason.to))
    setCashOutOnModeration(getTopUp)
    setShowCalendar(false)
  }

  const handleChange = ({target}) => {
    if (target.checked){
      const getUser = cashoutOnModeration.find(u => parseInt(u.id) === parseInt(target.value));

      setSelectedSum([...selectedSum, getUser])
      target.setAttribute('checked', true);
    } else {
      const index = selectedSum.findIndex(elem => parseInt(elem.id) === parseInt(target.value));
      const newData = [...selectedSum.slice(0, index), ...selectedSum.slice(index + 1)];

      setSelectedSum(newData)
      target.removeAttribute('checked');
    }
  }

  useEffect(()=> {
    const allPercent = selectedSum.map(u => parseFloat(u.summa))
    const totalPerc = allPercent.reduce((a, b) => a + b, 0)
    setTotalSum(totalPerc)
  })
  const successCashOut = async () => {
    axios.defaults.xsrfHeaderName = 'X-CSRFTOKEN';
    axios.defaults.xsrfCookieName = 'csrftoken';

    const server = new ServerSettings();

    selectedSum.map(item => {

      axios.get(`${server.getApi()}api/users/${item.user_id}/`)
        .then(res => {
          const newBalance = parseInt(res.data.user_balance) - (parseInt(item.summa) + (item.summa * 8 / 100));

          const data = new FormData()
          data.set("user_balance", newBalance);

          // обновляем баланс юзера
          axios.put(`${server.getApi()}api/users/${res.data.id}/update/`, data)
            .catch(error => console.error(error))

          // обновляем список транзакций
          const data2 = new FormData();
          data2.set("summa", item.summa);
          data2.set("wallet", item.wallet);
          data2.set("user_id", item.user_id);
          data2.set('operation', 'вывод средств')
          data2.set('background', '#FF3842')

          axios.post(`${server.getApi()}api/balance/`, data2)
            .catch(error => {console.error(error);});

          //обновляем заявки на вывод средств
          const data3 = new FormData();
          data3.set("summa", item.summa);
          data3.set("wallet", item.wallet);
          data3.set("user_id", item.user_id);
          data3.set('status', 'successful')

          axios.put(`${server.getApi()}api/cashout/${item.id}/update/`, data3)
            .then(res => {

              axios.get(`${server.getApi()}api/cashout/`)
                .then(res => {
                  getAllCashout(res.data)

                  const currentCashOut = res.data.filter(u => u.status === 'on_moderation');
                  setCashOutOnModeration(currentCashOut)
                  setSelectedSum([])
                }).catch(error => console.error(error))

            }).catch(error => console.error(error))


        }).catch(error => console.error(error))
    })

  }

  const cancelAll = () => {
    setSelectedSum([])
    document.location.assign('/admin/cashout')
  }

  return (
    <div className={'admin_container'}>
      <AdminUserWrap>
        <div className="title_section">
          <div className="title">Заявки на вывод</div>
          <InfoSection>
            <div className="left">
              <TabHead>
                <TabHeadNav className='tabs-active' onClick={(e) => changeTab(e, 'on_moderation')}>На
                  модерации</TabHeadNav>
                <TabHeadNav onClick={(e) => changeTab(e, 'successful')}>Одобренные</TabHeadNav>
              </TabHead>
            </div>
            <div className="right">
              <div style={{position: "relative"}} className={'dropList_container'}>
                <button type={'button'} onClick={() => setShowCalendar(!showCalendar)}
                        className="dropList calendar_dropList">
                  <div className="text">
                    <img src={calendar} alt="icon" className={'calendar_icon'}/>{calendarTitle ? calendarTitle : 'За все время'}
                  </div>
                  <div className="calendar_arrow">
                    <div className={'prev'}><img src={arrow} alt="icon" className={'arrow_down'}/></div>
                    <div className={'next'}><img src={arrow} alt="icon" className={'arrow_down'}/></div>
                  </div>
                </button>
                {
                  showCalendar && (
                    <Calendar
                      today={handleClickToday}
                      yesterday={handleClickYesterday}
                      week={handleClickWeek}
                      month={handleClickMonth}
                      twoWeeks={handleClickTwoWeeks}
                      year={handleClickYear}
                      activeBtn={calendarTitle}
                      diapasonDate={getDiapasonDate}
                      clickDiapasonDate={selectDiapasonDate}
                      setShowCalendar={setShowCalendar}
                    />
                  )
                }
              </div>
            </div>
          </InfoSection>
        </div>
        <TableWrap>
          <thead>
          <tr>
            <th>Логин пользователя</th>
            <th>Дата</th>
            <th>Тип пополнения</th>
            <th>Сумма</th>
          </tr>
          </thead>
          <tbody>
          {
            currentCashout.map((item, key) => {
              // логин
              const getNickName = users.find(u => u.id === item.user_id);
              // дата в нужном формате
              const MyNewDate = item.date.split('T')[0]
              const dateNormal = formatDate(MyNewDate);
              return (
                <tr key={key}>
                  <td>
                    <input
                      onClick={handleChange}
                      type="checkbox"
                      value={item.id}
                      className={'check'}
                      defaultChecked={false}
                    />
                    {getNickName.email.split('@')[0]}</td>
                  <td>{dateNormal}</td>
                  <td>????</td>
                  <td>{item.summa}</td>
                </tr>
              )
            })
          }
          </tbody>
        </TableWrap>
        <div className="bottom_info">
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={cashoutOnModeration.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="count_users">
            <div>{firstUserIndex === 0 ? 1 : firstUserIndex}</div>
            <div>-</div>
            <div>{lastUserIndex}</div>
            <div>из</div>
            <div> {cashoutOnModeration.length}</div>
            <div>заявок</div>
          </div>
        </div>
        {
          selectedSum.length > 0 && (
            <CashoutInfoModal >
              <button  className={'select_all'}>
                <div className="hover">Выбрать все</div>
                <img src={all} alt="icon"/>
              </button>
              <div className="text">Выбрано {selectedSum.length} заявки на сумму {totalSum} MRC</div>
              <MainButton
                text={'Одобрить'}
                colorBg={true}
                func={successCashOut}
              />
              <button onClick={cancelAll} className={'cancel'}>Отменить</button>
            </CashoutInfoModal>
          )
        }
      </AdminUserWrap>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    cashout: state.cashout
  }
};

const mapDispatchToProps = {
  loginUser,
  getAllCashout
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminCashout);