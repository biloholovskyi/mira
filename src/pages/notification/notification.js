import React, {useState} from 'react'

import {NotificationWrap} from './styled'
import EmptyPage from "./emptyPage/emptyPage";
import NotificationPage from "./NotificationPage/NotificationPage";
import SmallModal from "./smallModal/smallModal";

const Notification = () => {
  const [modalUser, setModalUser] = useState(null)
  const [modals, setModals] = useState(false)
  const [notificationData, setNotificationData] = useState([
    {id: 1, read: false, title: 'Обновление правил обработки персональных данных', date: '21.06.2021' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esuada is hendrerit, in blandit velit posuere. '},
    {id: 2, read: false, title: 'персональных данных', date: '23.06.2021' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esuada is hendrerit, in blandit velit posuere. '},
    {id: 3, read: false, title: 'Обновление правил ', date: '24.07.2021' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esuada is hendrerit, in blandit velit posuere. '},
    {id: 4, read: false, title: 'Lorem ipsum ', date: '11.05.2021' , text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.esuada is hendrerit, in blandit velit posuere. '},
  ])

  // open notification item
  const readMessage = (id) => {
    const index = notificationData.findIndex(elem=> elem.id === id);
    const old = notificationData[index];
    const newItem = {...old, read: true}

    const newArr = [...notificationData.slice(0, index), newItem, ...notificationData.slice(index + 1)];

    const userData = newArr.find(u => parseInt(u.id) === parseInt(id));

    setModalUser(userData)
    setNotificationData(newArr)
    setModals(id)
  }

  const closeModal = () => {
    setModals(false)
  }
  // delete item form array
  const deleteItem = (id) => {
    const index = notificationData.findIndex(elem => elem.id === id);

    const newData = [...notificationData.slice(0, index), ...notificationData.slice(index + 1)];

    setNotificationData(newData)
    setModals(false)
  }
  // make notification message unread
  const unReadMessage = (id) => {
    const index = notificationData.findIndex(elem=> elem.id === id);
    const old = notificationData[index];
    const newItem = {...old, read: false}

    const newArr = [...notificationData.slice(0, index), newItem, ...notificationData.slice(index + 1)];

    setNotificationData(newArr)
    setModals(false)
  }

  return (
    <div className={'main_container'}>
      <NotificationWrap>
        {
          notificationData.length > 0
          ? <NotificationPage
              readMessage={readMessage}
              notificationData={notificationData}
            />
            : <EmptyPage/>
        }
        {
          modals && (
            <SmallModal
              closeModal={closeModal}
              data={modalUser}
              deleteItem={deleteItem}
              unReadMessage={unReadMessage}
            />
          )
        }
      </NotificationWrap>
    </div>
  )
}

export default Notification;