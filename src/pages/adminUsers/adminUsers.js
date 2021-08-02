import React from "react";

import {AdminUserWrap, TableWrap} from './styled'
import MainButton from "../../components/mainButton/mainButton";

const AdminUsers = () => {
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
            <tr>
              <td></td>
            </tr>
          </tbody>
        </TableWrap>
      </AdminUserWrap>
    </div>
  )
}

export default AdminUsers;