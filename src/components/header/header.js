import React from "react";
import {NavLink} from "react-router-dom";

import {HeaderWrap, BurgerBtn} from './styled'

import bell from '../../assets/icon/bell.svg';
import burger from '../../assets/icon/burger.svg';
import logo from  '../../assets/icon/logo-green.svg';

const Header = () => {
  return(
    <HeaderWrap>
      <div className="left">
        <BurgerBtn><img src={burger} alt="icon"/></BurgerBtn>
        <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>
      </div>
      <button className={'notification_btn'}><img src={bell} alt="icon"/></button>
    </HeaderWrap>
  )
}

export default Header;