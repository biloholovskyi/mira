import React, {useEffect, useState} from "react";

import MainButton from "../../components/mainButton/mainButton";
import Pagination from "./pagination/pagination";

import {AdminUserWrap, TableWrap} from "./styled";
import {connect} from "react-redux";

const AdminWallets = ({users, balance}) => {
  // все пополнение пользователей
  const [allTopUp, setAllTopUp] = useState([]);
  // для пагинации
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);

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

  // для пагинации
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = sortList.slice(firstUserIndex, lastUserIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  useEffect(()=> {
    // получаем все пополнения и записиваем в стейт
    const getTopUp = balance.filter(u => u.operation === 'пополнение')
    setAllTopUp(getTopUp)
    console.log(getTopUp)
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