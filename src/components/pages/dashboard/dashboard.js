import React from "react";

import {TopBlock, Balance, RefLink, MyIncome} from './styled';
import MainButton from "../../mainButton/mainButton";

const Dashboard = () => {
  return (
    <div className={'main_container'}>
      <TopBlock>
        <Balance>
          <div className="small_title">Баланс</div>
          <div className="info">10 000 MRC <span>151 217,89 ₽</span></div>
          <div className="btn_section">

            <MainButton
              type={'button'}
              text={'Вывести'}
              width={'50%'}
            />

            <MainButton
              type={'button'}
              text={'Пополнить'}
              colorBg={true}
              width={'50%'}
            />

          </div>
        </Balance>

        <RefLink>
          <div className="small_title">Реферальная ссылка</div>
          <div className="info">https://mira.ru/ref-1234567</div>

          <MainButton
            type={'button'}
            text={'Скопировать ссылку'}
            width={'100%'}
          />

        </RefLink>
      </TopBlock>

      <MyIncome>
        <div className="small_title">Мои доходы</div>

      </MyIncome>

    </div>
  )
}

export default Dashboard;