import React, {useState} from 'react';

import TabPersonalDate from './tabPersonalDate/tabPersonalDate';

import {TabHeadNav, TabHead, BigTitle, TabBody} from './styled';

const Settings = () => {
  const [tabStatus, setTabStatus] = useState('personalDate');

  // change allCategoryTab
  const changeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.allCategoryTab-active').classList.remove('allCategoryTab-active');
    e.target.classList.add('allCategoryTab-active');
  };

  return (
    <div className={'main_container'}>
      <BigTitle>Настройки</BigTitle>
      <TabHead>
        <TabHeadNav className='tabs-active' onClick={(e) => changeTab(e, 'personalDate')}>Личные данные</TabHeadNav>
        <TabHeadNav onClick={(e) => changeTab(e, 'Security')}>Безопасность</TabHeadNav>
        <TabHeadNav onClick={(e) => changeTab(e, 'Уведомления')}>Уведомления</TabHeadNav>
      </TabHead>
      <TabBody>
        {
          tabStatus === 'personalDate'
          ? <TabPersonalDate />
          : null
        }
      </TabBody>
    </div>
  )
}

export default Settings;