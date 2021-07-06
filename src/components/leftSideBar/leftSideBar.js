import React, {useEffect, useState} from "react";
import {NavLink} from "react-router-dom";
import {connect} from "react-redux";
import axios from "axios";

import Navigation from './navigation/navigation';

import {
  SideBarWrap,
  UserBlock,
  Photo,
  Name,
  Currency,
  Information,
  CloseMenuBtn,
  MobileBackground
} from './styled';
import logo from './media/icon/logo-green.svg';
import avatar from './media/icon/userAvatar.svg';
import closed from './media/icon/close.svg';

import ServerSettings from "../../service/serverSettings";


const LeftSideBar = ({mobileMenu, closeMenu, user}) => {
  const [photo, setPhoto] = useState();

  useEffect(() => {
  }, [user])

  // get user photo
  const getUserPhoto = async () => {
    // меняем формат ссылки фото
    const avatar = user.photo.split('/')
    const newAva = `${avatar[1]}/${avatar[2]}`;

    const server = new ServerSettings();

    // получаем аватарку и записиваем у стейт
    await axios.get(`${server.getApi()}${newAva}/`)
      .then(res => {
        setPhoto(res.config.url)
      }).catch(error => console.error(error))
  }

  useEffect(() => {
    getUserPhoto().catch(error => console.error(error));
  })

  const logOut = (e) => {
    e.preventDefault()
    if (localStorage.getItem('mira_login')) {
      window.localStorage.removeItem("mira_login");
      window.location.assign('/');
    }
  }

  return (
    <>
      {
        mobileMenu && (
          <MobileBackground
            onClick={closeMenu}
          />
        )
      }
      <SideBarWrap mobileMenu={mobileMenu}>
        {
          mobileMenu && (
            <CloseMenuBtn onClick={closeMenu}><img src={closed} alt="icon"/></CloseMenuBtn>
          )
        }
        <NavLink className={'logo'} to={'/'}><img src={logo} alt="icon"/></NavLink>

        <UserBlock>
          <Photo src={user.photo === null ? avatar : photo} alt={'photo'}/>
          <div className="info">
            <Name>{user.name} {user.surName}</Name>
            <Currency>{user.user_balance} MRC</Currency>
          </div>
        </UserBlock>

        <Navigation closeMenu={closeMenu} logOut={logOut}/>

        <Information>
          <p>Copyright © 2021 Mira</p>
          <NavLink to={'#'}>Пользовательское соглашение</NavLink>
          <NavLink to={'#'}>Политика конфиденциальности</NavLink>
        </Information>
      </SideBarWrap>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSideBar);