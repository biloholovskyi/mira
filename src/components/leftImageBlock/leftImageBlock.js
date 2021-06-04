import React from "react";
import {NavLink} from "react-router-dom";

import {Left} from './styled';

import logo from "../../assets/icon/logo-white.svg";
import image from "../../assets/images/login_image.jpg";
import image2 from '../../assets/images/r_image.png';

const LeftImageBlock = ({loginPage}) => {
  return (
    <Left>
      <NavLink to='/'>
        <img src={logo} alt="logo" className={'logo'}/>
      </NavLink>
      {
        loginPage
        ?  <img src={image} alt="images"/>
        :  <img src={image2} alt="images"/>
      }
    </Left>
  )
}

export default LeftImageBlock;