import React from "react";

import LinesChart from './linesChart/linesChart'
import MainButton from "../../mainButton/mainButton";

import {TopBlock, Balance, RefLink, MyIncome} from './styled';

const Dashboard = () => {

  const data = [
    {
      date: "3 июня",
      mrc: 400
    },
    {
      date: "4 июня",
      mrc: 600
    },
    {
      date: "5 июня",
      mrc: 800
    },
    {
      date: "6 июня",
      mrc: 700
    },
    {
      date: "7 июня",
      mrc: 950
    },
    {
      date: "8 июня",
      mrc: 450
    },
    {
      date: "9 июня",
      mrc: 500
    }
  ];

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

        <div className="lineChart">
          <LinesChart
            data={data}
          />
        </div>

      </MyIncome>

    </div>
  )
}

export default Dashboard;