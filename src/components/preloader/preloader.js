import React from 'react';

import {PreloaderWrap} from './styled';

import logo from './media/preloader.svg';
import top from './media/preloader-top.svg';
import bottom from './media/bottom.svg';

const Preloader = () => {
  return (
    <PreloaderWrap>
      <div className="preloader">
        <img className={'images top'} src={top} alt="logo"/>
        <img className={'images center'} src={logo} alt="logo"/>
        <img className={'images bottom'} src={bottom} alt="logo"/>
      </div>
    </PreloaderWrap>
  )
}

export default Preloader;