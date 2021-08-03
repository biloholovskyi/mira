import React, {useEffect, useState} from "react";

import MainButton from "../../components/mainButton/mainButton";
import Pagination from "./pagination/pagination";

import {AdminUserWrap, TableWrap} from './styled'
import avatar from './media/userAvatar.svg';

import {connect} from "react-redux";

const AdminUsers = ({users}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(12);

  // pagination
  const lastUserIndex = currentPage * usersPerPage;
  const firstUserIndex = lastUserIndex - usersPerPage;
  const currentUsers = users.slice(firstUserIndex, lastUserIndex)

  const paginate = pageNumber => setCurrentPage(pageNumber)

  // формат даты
  const formatDate = (string) => {
    let options = {year: 'numeric', month: 'numeric', day: 'numeric'};
    return new Date(string).toLocaleDateString(['ru'], options);
  }

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
            <th>Операция</th>
            <th>Статус</th>
            <th>Дата регистрации</th>
            <th>Баланс кошелька</th>
          </tr>
          </thead>
          <tbody>
          {
            currentUsers.map((item, key) => {
              const MyNewDate = item.created_at.split('T')[0]
              const dateNormal = formatDate(MyNewDate);
              return (
                <tr key={key}>
                  <td>
                    <div className="info_block">
                      <img src={item.photo === null ? avatar : item.photo} alt="photo" className={'photo'}/>
                      <div className="name_block">
                        <div className="name">{item.name} {item.surName}</div>
                        <div className="nickname">{item.email.split('@')[0]}</div>
                      </div>
                    </div>
                  </td>
                  <td>??????????</td>
                  <td>{dateNormal}</td>
                  <td>{item.user_balance.replace(/(\d)(?=(\d{3})+(\D|$))/g, '$1 ')} MRC</td>
                </tr>
              )
            })
          }
          </tbody>
        </TableWrap>
        <div className="bottom_info">
          <Pagination
            usersPerPage={usersPerPage}
            totalUsers={users.length}
            paginate={paginate}
            currentPage={currentPage}
          />
          <div className="count_users">
            <div>{firstUserIndex === 0 ? 1 : firstUserIndex }</div>
            <div>-</div>
            <div>{lastUserIndex}</div>
            <div>из</div>
           <div> {users.length}</div>
            <div>пользователей</div>
          </div>
        </div>
      </AdminUserWrap>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminUsers);