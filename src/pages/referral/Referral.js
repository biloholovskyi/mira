import React, {useState} from "react";

import MainButton from "../../components/mainButton/mainButton";
import InformationTab from './informationTab/informationTab';

import {RefWrap, CopyLink, TabHead, TabHeadNav, TabBody} from './styled';

const Referral = () => {
  const [tabStatus, setTabStatus] = useState('info');

  // переключения табов
  const handleChangeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  return(
    <div className={'main_container'}>
      <RefWrap>
        <h1>Мои рефералы</h1>

        <CopyLink>
          <div className="left">
            <span>Реферальная ссылка</span>
            <div className={'link'}>https://mira.ru/ref-1234567</div>
          </div>

          <MainButton
            width={'237px'}
            colorBg={true}
            text={'Скопировать ссылку'}
            func={() =>  navigator.clipboard.writeText('https://mira.ru/ref-1234567')}
          />

        </CopyLink>

        <TabHead>
          <TabHeadNav className='tabs-active' onClick={(e) => handleChangeTab(e, 'info')}>Информация</TabHeadNav>
          <TabHeadNav onClick={(e) => handleChangeTab(e, 'about')}>О программе</TabHeadNav>
          <TabHeadNav onClick={(e) => handleChangeTab(e, 'ref')}>Рефералы</TabHeadNav>
        </TabHead>

        <TabBody>
          {
            tabStatus === 'info'
            ? <InformationTab/>
              : null
          }
        </TabBody>
      </RefWrap>
    </div>
  )
}

export default Referral;