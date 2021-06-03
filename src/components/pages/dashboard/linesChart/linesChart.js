import React from "react";
import moment from 'moment';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip
} from "recharts";

const LinesChart = ({data}) => {

  return (
   <>
     {/*<button>За неделю</button>*/}
     {/*<button>За месяц</button>*/}
     {/*<button>За год</button>*/}
     {/*<button>За все время</button>*/}

     <AreaChart
       width={452}
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

       <CartesianGrid vertical={false} stroke={'#424242'} />
       <XAxis dataKey="date" tick={{ fontSize: '12px'}}/>
       <YAxis tickCount={6}/>
       <Tooltip cursor={{ stroke: 'transparent' }}/>
       <Area type="monotone" dataKey="mrc" stroke="#36C136" fill="url(#colorUv)"/>
     </AreaChart>
   </>
  )
}

export default LinesChart;