import React from 'react';

import {PreloaderWrap} from './styled';

import logo from './media/preloader.svg';

const Preloader = () => {
  return (
    <PreloaderWrap>
      <img src={logo} alt="logo"/>
    </PreloaderWrap>
  )
}

export default Preloader;