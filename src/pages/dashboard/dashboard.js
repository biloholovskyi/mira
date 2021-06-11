import React from "react";

import LinesChart from './linesChart/linesChart'
import MainButton from "../../components/mainButton/mainButton";
import PieCharts from './pieCharts/pieCharts';
import ActiveProgram from './activeProgram/activeProgram';

import {TopBlock, Balance, RefLink, MyIncome, ActivePrograms} from './styled';

const Dashboard = () => {

  const data = [
    {
      date: "3 июня",
      mrc: 400,
      value: 1300,
      name: 'Дивиденды'
    },
    {
      date: "4 июня",
      mrc: 600,
      value: 500,
      name: 'Реферальные начисления'
    },
    {
      date: "5 июня",
      mrc: 800,
      value: 1200,
      name: 'Карьерные инвестиции'
    },
    {
      date: "6 июня",
      mrc: 700,
      value: 700,
      name: 'Другое'
    },
    {
      date: "7 июня",
      mrc: 950,
      value: 100,
      name: 'Другое Другое'
    },
    {
      date: "8 июня",
      mrc: 450,
      value: 1500,
      name: 'инвестиции'
    },
    {
      date: "9 июня",
      mrc: 500,
      value: 500,
      name: 'еще что то'
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
            func={() =>  navigator.clipboard.writeText('https://mira.ru/ref-1234567')}
          />

        </RefLink>
      </TopBlock>

      <MyIncome>
        <div className="small_title">Мои доходы</div>
        <div className="charts_block">
          <div className="lineChart">

            <LinesChart
              data={data}
            />

          </div>
          <div className="pieChart">

            <PieCharts
              data={data}
            />

          </div>
        </div>
      </MyIncome>

      <ActivePrograms>
        <div className="small_title">Активные программы</div>

        <ActiveProgram/>

      </ActivePrograms>
    </div>
  )
}

export default Dashboard;