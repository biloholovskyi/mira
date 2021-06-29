import React from "react";
import {NavLink} from "react-router-dom";

import {Left} from './styled';

import logo from "./media/icon/logo-white.svg";
import image from "./media/images/login_image.jpg";
import image2 from './media/images/r_image.png';

const LeftImageBlock = ({loginPage}) => {
  return (
    <Left>
        <img src={logo} alt="logo" className={'logo'}/>
      {
        loginPage
        ?  <img src={image} alt="images"/>
        :  <img src={image2} alt="images"/>
      }
    </Left>
  )
}

export default LeftImageBlock;