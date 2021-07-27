import React from "react";

import {NotificationPageWrap} from '../styled';
import NotificationItem from "../notificationItem/notificationItem";

const NotificationPage = ({readMessage, notificationData}) => {

  return (
    <NotificationPageWrap>
      <div className="title">Уведомления</div>
      {
        notificationData.map((item, key) => {
          return (
            <NotificationItem key={key} readMessage={readMessage} data={item}/>
          )
        })
      }
    </NotificationPageWrap>
  )
}

export default NotificationPage;