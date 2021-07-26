import React from "react";

import {EmptyPageWrap} from '../styled';

import empty from '../media/empty.svg';

const EmptyPage = () => {
  return(
    <EmptyPageWrap>
      <div className="title">Уведомления</div>
      <div className="info">
        <img src={empty} alt="image"/>
        <div className="small_title">У вас пока нет уведомлений</div>
      </div>
    </EmptyPageWrap>
  )
}

export default EmptyPage;