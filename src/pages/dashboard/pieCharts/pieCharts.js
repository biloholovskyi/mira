import React, {useEffect, useState} from "react";

import {PieChart, Pie, Cell, Legend, Label, ResponsiveContainer} from "recharts";

import {PieItems} from '../styled';
import '../style.css';

const COLORS = ["#FF3F35", "#EAA904", "#049BED", "#2EC144"];

// выводим справа от диаграмы лейбл с инфо
const renderLegend = (props) => {
  const { payload } = props;
  return (
    <ul>
      {
        payload.map((entry, index) => (
          <PieItems key={`item-${index}`}>
            <div className="left">
              <span style={{backgroundColor: entry.color}} />
              {entry.value}
            </div>
            <div className="percent">{`${(entry.payload.percent * 100).toFixed(0)}%`}</div>
          </PieItems>
        ))
      }
    </ul>
  );
}

const PieCharts = ({data}) => {
  // window width
  const [windowWidth, setWidth] = useState(window.innerWidth);

  const handlerResize = () => {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener('resize', () => handlerResize())
  }, [])

  return (
    <>
      <ResponsiveContainer width="100%" height="100%" minHeight={windowWidth < 1410 ? 470 : 400}>
        <PieChart width={500} height={windowWidth < 1410 ? 470 : 400} >
          <Pie
            data={data}
            cx={windowWidth < 1410 && windowWidth > 1110 || windowWidth < 600  ? '50%' : 110}
            cy={windowWidth < 1410 ? '50%' : 200}
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
          <Legend  verticalAlign={windowWidth < 1410 && windowWidth > 1110 || windowWidth < 600  ? 'bottom' : 'middle'} align={windowWidth < 1410 && windowWidth > 1110 || windowWidth < 600 ? 'center' : 'right'} iconSize={8} iconType={'circle'} content={renderLegend} layout={'vertical'} />
        </PieChart>
      </ResponsiveContainer>
    </>
  );
}

export default PieCharts;
