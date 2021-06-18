import React from "react";
import moment from 'moment';
import 'moment/locale/ru';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Line,
  ResponsiveContainer
} from "recharts";

import {ChartBtn} from '../styled';
import '../style.css';

const dateFormatter = item => moment(item).format("dd D MMMM");

const LinesChart = ({data, dataMonth, chartsType, changeTab}) => {

  // const payloadFormatter = (props) => {
  //   const {payload} = props;
  //   return (
  //     payload.map((entry, index) => (
  //       <div key={`item-${index}`}>
  //        <div className="mrc"> {entry.payload.value}</div>
  //         <div className="date"> {moment(entry.payload.date).format("dd D MMMM")}</div>
  //       </div>
  //     ))
  //   )
  // };

  return (
    <>
      <ChartBtn className={'btn-active'} onClick={(e) => changeTab(e, 'week')}>За неделю</ChartBtn>
      <ChartBtn onClick={(e) => changeTab(e, 'month')}>За месяц</ChartBtn>
      <ChartBtn onClick={(e) => changeTab(e, 'year')}>За год</ChartBtn>
      <ChartBtn onClick={(e) => changeTab(e, 'allTime')}>За все время</ChartBtn>

      <ResponsiveContainer width="100%" height="100%" minHeight={262} minWidth={330}>
        <AreaChart
          width={'100%'}
          height={262}
          data={chartsType === 'week' ? data : chartsType === 'month' ? dataMonth : null}
          margin={{
            top: 0,
            right: 30,
            left: 0,
            bottom: 0
          }}
        >
          {/* Add gradient*/}
          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="85%" stopColor="#36C136" stopOpacity={0.1}/>
              <stop offset="95%" stopColor="#FFFFFF" stopOpacity={0.1}/>
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke={'#424242'} width={'500'}/>

          <XAxis tickFormatter={(date) => moment(date).format('D MMMM')} dataKey="date"
                 tick={{fontSize: '12px', fill: '#C1C1C1'}} allowDataOverflow
                 interval={chartsType === 'week' ? 0 : chartsType === 'month' ? 5 : null}/>

          <YAxis tickCount={6} tick={{fontSize: '12px', fill: '#C1C1C1'}} allowDataOverflow domain={[400, 1000]}
                 orientation={'right'} scale="linear"/>

          <Tooltip labelFormatter={dateFormatter}
                   cursor={{stroke: 'rgba(255, 255, 255, 0.2)', strokeWidth: 1}}
                   itemStyle={{color: '#fff', fontSize: 14}}/>

          <Area type="monotone" dataKey="mrc" stroke="#36C136" strokeWidth='2' fill="url(#colorUv)" type={'linear'}
                activeDot={{stroke: '#36C136', strokeWidth: 3}}/>

          {/*<line orientation="bottom" width="462" height="30" type="category" x="0" y="232"*/}
          {/*      stroke="#666" fill="none" x1="0" y1="245" x2="465" y2="245" />*/}
        </AreaChart>
      </ResponsiveContainer>
    </>
  )
}

export default LinesChart;