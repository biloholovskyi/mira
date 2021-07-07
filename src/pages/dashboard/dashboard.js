import React, {useState} from "react";

import LinesChart from './linesChart/linesChart'
import MainButton from "../../components/mainButton/mainButton";
import PieCharts from './pieCharts/pieCharts';
import ActiveProgram from './activeProgram/activeProgram';

import {TopBlock, Balance, RefLink, MyIncome, ActivePrograms} from './styled';
import {loginUser, setSuccessModalText} from "../../actions";
import {connect} from "react-redux";

const Dashboard = ({user}) => {
  const [chartsType, setChartsType] = useState('week');

  const changeTab = (e, tab) => {
    setChartsType(tab);
    document.querySelector('.btn-active').classList.remove('btn-active');
    e.target.classList.add('btn-active');
  };

  const data = [
    {
      date: "2021-06-03",
      mrc: 600,
      value: 1300,
      name: 'Дивиденды'
    },
    {
      date: "2021-06-04",
      mrc: 750,
      value: 500,
      name: 'Реферальные начисления'
    },
    {
      date: "2021-06-05",
      mrc: 700,
      value: 1200,
      name: 'Карьерные инвестиции'
    },
    {
      date: "2021-06-06",
      mrc: 700,
      value: 700,
      name: 'Другое'
    },
    {
      date: "2021-06-07",
      mrc: 850,
      value: 100,
      name: 'Другое Другое'
    },
    {
      date: "2021-06-08",
      mrc: 800,
      value: 1500,
      name: 'инвестиции'
    },
    {
      date: "2021-06-09",
      mrc: 900,
      value: 500,
      name: 'еще что то'
    }
  ];

  const dataMonth = [
    {
      date: "2021-06-03",
      mrc: 600
    },
    {
      date: "2021-06-04",
      mrc: 750
    },
    {
      date: "2021-06-05",
      mrc: 700
    },
    {
      date: "2021-06-06",
      mrc: 700
    },
    {
      date: "2021-06-07",
      mrc: 850
    },
    {
      date: "2021-06-08",
      mrc: 800
    },
    {
      date: "2021-06-09",
      mrc: 900
    },
    {
      date: "2021-06-10",
      mrc: 600
    },
    {
      date: "2021-06-11",
      mrc: 750
    },
    {
      date: "2021-06-12",
      mrc: 700
    },
    {
      date: "2021-06-13",
      mrc: 700
    },
    {
      date: "2021-06-14",
      mrc: 850
    },
    {
      date: "2021-06-15",
      mrc: 800
    },
    {
      date: "2021-06-16",
      mrc: 900
    },
    {
      date: "2021-06-17",
      mrc: 700
    },
    {
      date: "2021-06-18",
      mrc: 850
    },
    {
      date: "2021-06-19",
      mrc: 800
    },
    {
      date: "2021-06-20",
      mrc: 900
    },
    {
      date: "2021-06-21",
      mrc: 900
    },
    {
      date: "2021-06-22",
      mrc: 900
    },
    {
      date: "2021-06-23",
      mrc: 900
    },
    {
      date: "2021-06-24",
      mrc: 900
    },
    {
      date: "2021-06-25",
      mrc: 950
    },
    {
      date: "2021-06-26",
      mrc: 900
    },
    {
      date: "2021-06-27",
      mrc: 900
    },
    {
      date: "2021-06-28",
      mrc: 900
    },
    {
      date: "2021-06-29",
      mrc: 900
    },
    {
      date: "2021-06-30",
      mrc: 980
    }
  ];

  return (
    <div className={'main_container'}>
      <TopBlock>
        <Balance>
          <div className="small_title">Баланс</div>
          <div className="info">{user.user_balance} MRC <span>151 217,89 ₽</span></div>
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
              dataMonth={dataMonth}
              chartsType={chartsType}
              changeTab={changeTab}
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

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
};

const mapDispatchToProps = {

};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);