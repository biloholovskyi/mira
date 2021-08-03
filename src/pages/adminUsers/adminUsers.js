import React from "react";

import MainButton from "../../components/mainButton/mainButton";

import {AdminUserWrap, TableWrap} from './styled'
import avatar from './media/userAvatar.svg';

import {connect} from "react-redux";

const AdminUsers = ({users}) => {
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
            users.map((item, key) => {
              const MyNewDate = item.created_at.split('T')[0]
              const dateNormal = formatDate(MyNewDate);
              console.log(item)
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