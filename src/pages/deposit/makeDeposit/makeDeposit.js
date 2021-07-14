import React, {useState} from "react";

import MainInput from "../../../components/mainInput/mainInput";
import ThreeMonthTab from './threeMonthTab/threeMonthTab';
import SixMonthTab from "./sixMonthTab/sixMonthTab";
import NineMonthTab from './nineMonthTab/nineMonthTab';

import {Left, Right, InfoBlock, TabHead, TabHeadNav} from "../styled";

const MakeDeposit = ({updateList, onMakeDeposit}) => {
  const [tabStatus, setTabStatus] = useState('month3');
  const [summa, setSumma] = useState('');

  // получаем суму введеную пользователем
  const updateValue = (value) => {
    setSumma(value)
  }

  // переключения табов
  const handleChangeTab = (e, tab) => {
    setTabStatus(tab);
    document.querySelector('.tabs-active').classList.remove('tabs-active');
    e.target.classList.add('tabs-active');
  };

  return(
    <InfoBlock>
      <Left>
        <h3>Оформить депозит</h3>
        <TabHead>
          <TabHeadNav className='tabs-active' onClick={(e) => handleChangeTab(e, 'month3')}>3 месяца<br/>0.8%</TabHeadNav>
          <TabHeadNav onClick={(e) => handleChangeTab(e, 'month6')}>6 месяцев<br/>1%</TabHeadNav>
          <TabHeadNav onClick={(e) => handleChangeTab(e, 'month9')}>9 месяцев<br/>1,2%</TabHeadNav>
        </TabHead>

        <MainInput
          label={'Сумма депозита'}
          iconText={'MRC'}
          updateValue={updateValue}
          type={'number'}
        />
      </Left>

      <Right>
        <h3>Расчет программы</h3>
        {
          tabStatus === 'month3'
          ? <ThreeMonthTab
              totalSum={summa}
              getInfo={updateList}
              onMakeDeposit={onMakeDeposit}
            />
          : tabStatus === 'month6'
            ? <SixMonthTab
              totalSum={summa}
              getInfo={updateList}
              onMakeDeposit={onMakeDeposit}
              />
            : tabStatus === 'month9'
              ? <NineMonthTab
                totalSum={summa}
                getInfo={updateList}
                onMakeDeposit={onMakeDeposit}
                />
              : null
        }
      </Right>
    </InfoBlock>
  )
}

export default MakeDeposit;