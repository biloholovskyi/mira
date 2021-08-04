import React, {useEffect, useState} from "react";

import MainButton from "../../components/mainButton/mainButton";
import Pagination from "./pagination/pagination";

import arrow from './media/arrow-down.svg';
import calendar from './media/calenadar.svg';
import {AdminUserWrap, TableWrap, InfoSection, TabHead, TabHeadNav} from "./styled";
import {connect} from "react-redux";
import Calendar from "./calendar/calendar";

const AdminWallets = ({users, balance}) => {
  // все пополнение пользователей
  const [allTopUp, setAllTopUp] = useState([]);
  // для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);
  const [tabStatus, setTabStatus] = useState('detail');

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
  const sortList = allTopUp.map(event => {
    const date = event.date.split('T')[0]
    const myDate = formatDate(date)

    return {...event, sortTime: myDate};
  })

  // соритруем по дате
  sortList.sort((a, b) => {
    return new Date(a.sortTime).getTime() - new Date(b.sortTime).getTime()
  }).reverse();

  // сортируем масив за сегодня
  const handleClickToday = () => {
    // сегодня
    const date = new Date();
    const myDate = date.toLocaleDateString();

    // получаем все пополнения
    const TopUp = balance.filter(u => u.operation === 'пополнение')

    // получаем дату и меняем в нужном формате
    const sortList = TopUp.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      return {...event, sortTime: myDate};
    })

    // перезаписиваем масив  с даными
    const getTopUp = sortList.filter(u => u.sortTime === myDate)
    setAllTopUp(getTopUp)
  }

  // сортируем масив за вчера
  const handleClickYesterday = () => {
    const date = new Date();
    const yesterday = date.setDate(date.getDate() - 1);
    const formatYesterday = new Date(yesterday)
    const newFormatYesterday = formatYesterday.toLocaleDateString();

    // получаем все пополнения
    const TopUp = balance.filter(u => u.operation === 'пополнение')

    // получаем дату и меняем в нужном формате
    const sortList = TopUp.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      return {...event, sortTime: myDate};
    })

    const getTopUp = sortList.filter(u => u.sortTime === newFormatYesterday)
    setAllTopUp(getTopUp)
  }

  //сортируем масив за текущею неделю
  const handleClickWeek = () => {
    const  curr = new Date;
    // первый день текущей недели
    const firstDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+1));
    // последний день текущей недели
    const lastDay = new Date(curr.setDate(curr.getDate() - curr.getDay()+7));

    const newFirstDay = firstDay.toLocaleDateString()
    const newLastDay = lastDay.toLocaleDateString()

    // получаем все пополнения
    const TopUp = balance.filter(u => u.operation === 'пополнение')

    // получаем дату и меняем в нужном формате
    const sortList = TopUp.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      return {...event, sortTime: myDate};
    })

    const getTopUp = sortList.filter(u => u.sortTime >= newFirstDay && u.sortTime <= newLastDay)
    setAllTopUp(getTopUp)
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
    const TopUp = balance.filter(u => u.operation === 'пополнение')

    // получаем дату и меняем в нужном формате
    const sortList = TopUp.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      return {...event, sortTime: myDate};
    })

    const getTopUp = sortList.filter(u => u.sortTime >= newFirstDayOfMonth && u.sortTime <= newLastDayOfMonth)
    setAllTopUp(getTopUp)
  }

  const handleClickTwoWeeks = () => {
    const dateNow = new Date();
    // первый день предедущей недели
    const firstDayOfTheWeek = (dateNow.getDate() - dateNow.getDay()) + 1;
    const firstDayOfLastWeek = new Date(dateNow.setDate(firstDayOfTheWeek - 7));

    const newFirstDayOfLastWeek = firstDayOfLastWeek.toLocaleDateString()
    console.log(newFirstDayOfLastWeek)
    const today = new Date;
    const newToday = today.toLocaleDateString()
    console.log(newToday)

    // получаем все пополнения
    const TopUp = balance.filter(u => u.operation === 'пополнение')

    // получаем дату и меняем в нужном формате
    const sortList = TopUp.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      return {...event, sortTime: myDate};
    })


    const getTopUp = sortList.filter(u => u.sortTime >= '20.07.2021' && u.sortTime <= '03.08.2021')
    console.log(getTopUp)
  }

  const handleClickYear = () => {
    const  today = new Date();
    const  currentYear = today.getFullYear();
    const  firstDayCurrYear  = new Date( currentYear, 0, 1 );
    const  lastDayCurrYear  = new Date( currentYear, 11, 31 );

    // получаем все пополнения
    const TopUp = balance.filter(u => u.operation === 'пополнение')

    // получаем дату и меняем в нужном формате
    const sortList = TopUp.map(event => {
      const date = event.date.split('T')[0]
      const myDate = formatDate(date)
      return {...event, sortTime: myDate};
    })

    const getTopUp = sortList.filter(u => u.sortTime >= firstDayCurrYear.toLocaleDateString() && u.sortTime <= lastDayCurrYear.toLocaleDateString())
    console.log(getTopUp)
  }

  // для пагинации
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = sortList.slice(firstUserIndex, lastUserIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  useEffect(()=> {
    // получаем все пополнения и записиваем в стейт
    const getTopUp = balance.filter(u => u.operation === 'пополнение')
    setAllTopUp(getTopUp)
  }, [])

  return (
    <div className={'admin_container'}>
      <AdminUserWrap>
        <div className="title_section">
          <div className="title">Пользователи</div>

          <MainButton
            text={'Добавить'}
            colorBg={true}
          />
        </div>
        <InfoSection>
          <div className="left">
            <div className="text">Вид:</div>
            <TabHead>
              <TabHeadNav onClick={(e) => changeTab(e, 'all')}>Общий</TabHeadNav>
              <TabHeadNav className='tabs-active' onClick={(e) => changeTab(e, 'detail')}>Детальный</TabHeadNav>
            </TabHead>
          </div>
          <div className="right">
            <div className="dropList">
              <div className="text">Все пополнения</div>
              <img src={arrow} alt="icon" className={'arrow_down'} />
            </div>
            <div className="dropList calendar_dropList">
              <div className="text">
                <img src={calendar} alt="icon" className={'calendar_icon'}/>
                Этот месяц
              </div>
              <div className="calendar_arrow">
                <button type={'button'} className={'prev'}> <img src={arrow} alt="icon" className={'arrow_down'} /></button>
                <button type={'button'} className={'next'}><img src={arrow} alt="icon" className={'arrow_down'} /></button>
              </div>

              <Calendar
                today={handleClickToday}
                yesterday={handleClickYesterday}
                week={handleClickWeek}
                month={handleClickMonth}
                twoWeeks={handleClickTwoWeeks}
                year={handleClickYear}
              />

            </div>
          </div>
        </InfoSection>
        <TableWrap>
          <thead>
          <tr>
            <th>Тип пополнения</th>
            <th>Логин пользователя</th>
            <th>Дата</th>
            <th>Сумма</th>
          </tr>
          </thead>
          <tbody>
          {
            currentUsers.map((item, i) => {
              // логин
              const getNickName = users.find(u => u.id === item.user_id);
              // дата в нужном формате
              const MyNewDate = item.date.split('T')[0]
              const dateNormal = formatDate(MyNewDate);
              // тип пополнения
              const type = item.type === 'outer' ? 'Внешний' : item.type === 'inner' ? 'Внутренний' : null;

              return (
                <tr key={i}>
                  <td>{type}</td>
                  <td>{getNickName.email.split('@')[0]}</td>
                  <td>{dateNormal}</td>
                  <td>{item.summa.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')}</td>
                </tr>
              )
            })
          }
          </tbody>
        </TableWrap>
        <div className="bottom_info">
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={allTopUp.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="count_users">
            <div>{firstUserIndex === 0 ? 1 : firstUserIndex }</div>
            <div>-</div>
            <div>{lastUserIndex}</div>
            <div>из</div>
            <div> {allTopUp.length}</div>
            <div>пополнений</div>
          </div>
        </div>
      </AdminUserWrap>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    balance: state.balance
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminWallets);