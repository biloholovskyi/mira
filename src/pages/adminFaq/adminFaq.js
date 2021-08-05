import React, {useEffect, useState} from "react";

import MainButton from "../../components/mainButton/mainButton";
import MainDropList from "../../components/mainDropList/mainDropList";
import Pagination from "./pagination/pagination";
import Calendar from "./calendar/calendar";

import {AdminUserWrap, InfoSection, TabHead, TabHeadNav, TableWrap} from "./styled";

import {connect} from "react-redux";
import search from './media/search.svg';
import FaqModal from "./FaqModal/FaqModal";

const AdminFaq = () => {
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);
  // for calendar
  const [showCalendar, setShowCalendar] = useState(false);
  const [calendarTitle, setCalendarTitle] = useState('');
  //записиваем диапазон выбраних дат
  const [diapason, setDiapason] = useState({from: '', to: ''})
  const [showModal, setShowModal] = useState(false)

  // const getDiapasonDate = (value) => {
  //   setDiapason(value)
  // }
  //
  // // формат даты
  // const formatDate = (string) => {
  //   let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
  //   return new Date(string).toLocaleDateString(['ru'], options);
  // }
  //
  // // получаем дату и меняем в нужном формате
  // const sortList = cashoutOnModeration.map(event => {
  //   const date = event.date.split('T')[0]
  //   const myDate = formatDate(date)
  //   const dateReal = new Date(date);
  //   return {...event, sortTime: myDate, realDate: dateReal};
  // })
  //
  // // соритруем по дате
  // sortList.sort((a, b) => {
  //   return new Date(a.sortTime).getTime() - new Date(b.sortTime).getTime()
  // }).reverse();
  //
  // // для пагинации
  // const lastUserIndex = currentPage * usersPerPage;
  // const firstUserIndex = lastUserIndex - usersPerPage;
  // const currentCashout = sortList.slice(firstUserIndex, lastUserIndex)
  //
  // const paginate = pageNumber => setCurrentPage(pageNumber)

  const openFaqModal = () => {
    setShowModal(true)
  }

  const closeFaqModal = () => {
    setShowModal(false)
  }

  return (
    <div className={'admin_container'}>
      <AdminUserWrap>
        <div className="title_section">
          <div className="title">FAQ</div>
         <div className="right">
           <div className={'search'}>
             <img src={search} alt="icon"/>
             <input type="text" placeholder={'Поиск'}/>
           </div>
           <MainDropList/>
           <MainButton
             text={'Добавить'}
             colorBg={true}
             func={openFaqModal}
           />
         </div>
        </div>
        <TableWrap>
          <thead>
          <tr>
            <th>Вопрос</th>
            <th>Ответ</th>
            <th>Рубрика</th>
          </tr>
          </thead>
          <tbody>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur?</td>
              <td>Cras dictum tincidunt nisl ut tincidunt. Curabitur commodo erat lorem, in porttitor nisl dignissim nec. Donec et mi mattis, cursus sapien sed, ultrices felis.</td>
              <td>Praesent quis urna imperdiet</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur?</td>
              <td>Cras dictum tincidunt nisl ut tincidunt. Curabitur commodo erat lorem, in porttitor nisl dignissim nec. Donec et mi mattis, cursus sapien sed, ultrices felis.</td>
              <td>Praesent quis urna imperdiet</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur?</td>
              <td>Cras dictum tincidunt nisl ut tincidunt. Curabitur commodo erat lorem, in porttitor nisl dignissim nec. Donec et mi mattis, cursus sapien sed, ultrices felis.</td>
              <td>Praesent quis urna imperdiet</td>
            </tr>
            <tr>
              <td>Lorem ipsum dolor sit amet, consectetur?</td>
              <td>Cras dictum tincidunt nisl ut tincidunt. Curabitur commodo erat lorem, in porttitor nisl dignissim nec. Donec et mi mattis, cursus sapien sed, ultrices felis.</td>
              <td>Praesent quis urna imperdiet</td>
            </tr>
          </tbody>
        </TableWrap>
        {/*<div className="bottom_info">*/}
        {/*  <Pagination*/}
        {/*    usersPerPage={usersPerPage}*/}
        {/*    totalUsers={cashout.length}*/}
        {/*    paginate={paginate}*/}
        {/*    currentPage={currentPage}*/}
        {/*  />*/}
        {/*  <div className="count_users">*/}
        {/*    <div>{firstUserIndex === 0 ? 1 : firstUserIndex}</div>*/}
        {/*    <div>-</div>*/}
        {/*    <div>{lastUserIndex}</div>*/}
        {/*    <div>из</div>*/}
        {/*    <div> {cashoutOnModeration.length}</div>*/}
        {/*    <div>заявок</div>*/}
        {/*  </div>*/}
        {/*</div>*/}
        {
          showModal && (
            <FaqModal
              close={closeFaqModal}
            />
          )
        }
      </AdminUserWrap>
    </div>
  )
}

export default AdminFaq;