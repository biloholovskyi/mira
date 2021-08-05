import React, {useEffect, useState} from "react";

import {AdminUserWrap, TableWrap} from './styled';
import avatar from "../adminUsers/media/userAvatar.svg";
import {connect} from "react-redux";
import Pagination from "../adminUsers/pagination/pagination";

const AdminPrograms = ({deposit, users}) => {
  const [activeDeposit, setActiveDeposit] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);

  useEffect(()=> {
    // получаем все активние депозиты
    const getActiveDeposit = deposit.filter(u => u.status === 'active')
    setActiveDeposit(getActiveDeposit)
  }, [])

  // получаем дату и меняем в нужном формате
  const sortList = activeDeposit.map(event => {
    return {...event, type: 'deposit'};
  })

  // соритруем по дате
  sortList.sort((a, b) => {
    return new Date(a.deposit_date).getTime() - new Date(b.deposit_date).getTime()
  }).reverse();

  // pagination
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentDeposit = sortList.slice(firstUserIndex, lastUserIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  return (
    <div className={'admin_container'}>
      <AdminUserWrap>
        <div className="title_section">
          <div className="title">Активные программы</div>
        </div>
        <TableWrap>
          <thead>
          <tr>
            <th>Тип программы</th>
            <th>Логин пользователя</th>
            <th>Дата старта</th>
            <th>Дата окончания</th>
            <th>Сумма ввода</th>
          </tr>
          </thead>
          <tbody>
          {
            currentDeposit.map((item, i) => {
              // логин
              const getNickName = users.find(u => u.id === item.user_id);
              // меняем формат дати и вичесляем дату окончания депозита
              const startDeposit = item.deposit_date;
              const newFormat = startDeposit.split('.');
              const newDepositDate = `${newFormat[2]}-${newFormat[1]}-${newFormat[0]}`
              const objDate = new Date(newDepositDate)
              const formatLastDate = objDate.setDate(objDate.getDate() + parseInt(item.term))
              const newFormatLastDate = new Date(formatLastDate);

              return (
                <tr key={i}>
                  <td>{item.type === 'deposit' && 'Депозит'}</td>
                  <td>{getNickName.email.split('@')[0]}</td>
                  <td>{item.deposit_date}</td>
                  <td>{newFormatLastDate.toLocaleDateString()}</td>
                  <td>{item.summa} MRC</td>
                </tr>
              )
            })
          }
          </tbody>
        </TableWrap>
        <div className="bottom_info">
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={activeDeposit.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="count_users">
            <div>{firstUserIndex === 0 ? 1 : firstUserIndex }</div>
            <div>-</div>
            <div>{lastUserIndex}</div>
            <div>из</div>
            <div> {activeDeposit.length}</div>
            <div>активных программ</div>
          </div>
        </div>
      </AdminUserWrap>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    deposit: state.deposit,
    users: state.users
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPrograms);