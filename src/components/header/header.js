import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";

import {HeaderWrap, BurgerBtn} from './styled'

import bell from './media/icons/bell.svg';
import burger from './media/icons/burger.svg';
import logo from './media/icons/logo-green.svg';
import LeftSideBar from "../leftSideBar/leftSideBar";


const Header = ({photo, user}) => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <>
      <HeaderWrap>
        <div className="left">
          <BurgerBtn onClick={toggleMenu}><img src={burger} alt="icon"/></BurgerBtn>
          <NavLink to={'/'}><img src={logo} alt="logo"/></NavLink>
        </div>
        <button className={'notification_btn'}><img src={bell} alt="icon"/></button>
      </HeaderWrap>
      {
        showMenu && (
          <LeftSideBar
            user={user}
            photo={photo}
            mobileMenu={showMenu}
            closeMenu={toggleMenu}
          />
        )
      }
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);