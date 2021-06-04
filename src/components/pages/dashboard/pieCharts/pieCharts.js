import React from "react";

import {PieChart, Pie, Cell, Legend, Label} from "recharts";

import {PieItems} from '../styled';
import '../style.css';

const COLORS = ["#FF3F35", "#EAA904", "#049BED", "#2EC144"];

//const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//                                  cx,
//                                  cy,
//                                  midAngle,
//                                  innerRadius,
//                                  outerRadius,
//                                  percent,
//                                  index
//                                }: any) => {
//   const radius = innerRadius + (outerRadius - innerRadius) * 1.4;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);
//
//   return (
//     <text
//       x={x}
//       y={y}
//       fill="white"
//       textAnchor={x > cx ? "start" : "end"}
//       dominantBaseline="central"
//     >
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// выводим справа от диаграмы лейбл с инфо
const renderLegend = (value: number, entry: any) => {
  const { color } = entry;
  return <PieItems style={{color}}>{value}</PieItems>
};

const PieCharts = ({data}) => {
  return (
    <>
      <PieChart width={500} height={400} >
        <Pie
          data={data}
          cx={110}
          cy={200}
          labelLine={false}
          outerRadius={90}
          innerRadius={75}
          fill="#000"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell  stroke={COLORS[index % COLORS.length]} key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
          ))}
          <Label fill={'#fff'} style={{fontSize: 28}} value="+123 456" position="center" />
          <Label fill={'#fff'} style={{fontSize: 12,  transform: `translateY(${25}px`}} value="+12.4%" position="center" />
        </Pie>
        <Legend  verticalAlign={'middle'} align={'right'} iconSize={8} iconType={'circle'} formatter={renderLegend} layout={'vertical'} />
      </PieChart>
    </>
  );
}

export default PieCharts;
