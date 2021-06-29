import React, {useState} from 'react';
import {animateScroll as scroll } from "react-scroll";

import TabPersonalDate from './tabPersonalDate/tabPersonalDate';


import {TabHeadNav, TabHead, BigTitle, TabBody, TabLink} from './styled';

const Settings = ({user}) => {
  const [tabStatus, setTabStatus] = useState('personalDate');

  // change categories Tab
  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  return (
    <div className={'main_container'}>
      <BigTitle>Настройки</BigTitle>
      <TabHead>
        <TabHeadNav className='tabs-active' onClick={(e) => changeTab(e, 'personalDate')}>Личные данные</TabHeadNav>
        <TabLink to='security'  smooth={true} offset={100} duration={1500} activeClass={'active'}>Безопасность</TabLink>
        <TabHeadNav onClick={(e) => changeTab(e, 'Уведомления')}>Уведомления</TabHeadNav>
      </TabHead>
      <TabBody>
        {
          tabStatus === 'personalDate'
          ? <TabPersonalDate user={user}/>
          : null
        }
      </TabBody>
    </div>
  )
}

export default Settings;