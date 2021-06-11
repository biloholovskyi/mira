import React from "react";

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

import {ChartBtn} from './styled';
import './style.css';

const LinesChart = ({data, width}) => {

  return (
   <>
     <ChartBtn className={'active'}>За неделю</ChartBtn>
     <ChartBtn>За месяц</ChartBtn>
     <ChartBtn>За год</ChartBtn>
     <ChartBtn>За все время</ChartBtn>

     <ResponsiveContainer width="100%" height="100%" minWidth={330} minHeight={262}>
       <AreaChart
         width={'100%'}
         height={262}
         data={data}
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
             <stop offset="55%" stopColor="#36C136" stopOpacity={0.1}/>
             <stop offset="85%" stopColor="#FFFFFF" stopOpacity={0.1}/>
           </linearGradient>
         </defs>
         <CartesianGrid vertical={false} stroke={'#424242'} width={'500'}/>
         <XAxis dataKey={'date'} tick={{ fontSize: '12px', fill: '#C1C1C1'}} allowDataOverflow interval={0}/>
         <YAxis tickCount={6}  tick={{ fontSize: '12px', fill: '#C1C1C1'}} allowDataOverflow domain={[400, 1000]} orientation={'right'} scale="linear"/>
         <Tooltip cursor={{ stroke: 'transparent' }}/>
         <Area type="monotone" dataKey="mrc" stroke="#36C136" fill="url(#colorUv)"  type={'linear'}/>
         {/*<line orientation="bottom" width="462" height="30" type="category" x="0" y="232"*/}
         {/*      stroke="#666" fill="none" x1="0" y1="245" x2="430" y2="245" />*/}
       </AreaChart>
     </ResponsiveContainer>
   </>
  )
}

export default LinesChart;