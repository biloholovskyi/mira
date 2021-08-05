import React from 'react';
import {NavLink} from "react-router-dom";

import {AdminHeaderWrap, NavList, UserBlock} from './styled';
import logo from './media/logo-green.svg';
import arrow from './media/arrow.svg';

const AdminHeader = () => {
  return (
    <AdminHeaderWrap>
      <NavLink to={'/admin/users/'} className={'logo'}>
        <img src={logo} alt="image"/>
      </NavLink>

      <NavList>
        <NavLink to='/admin/users'>Пользователи</NavLink>
        <NavLink to='/admin/programs'>Активные программы</NavLink>
        <NavLink to='/admin/wallets'>Пополнения кошелька</NavLink>
        <NavLink to='/admin/cashout'>Заявки на вывод</NavLink>
        <NavLink to='/admin/faq'>FAQ</NavLink>
      </NavList>

      <UserBlock>username <img src={arrow} alt="image"/></UserBlock>
    </AdminHeaderWrap>
  )
}

export default AdminHeader;