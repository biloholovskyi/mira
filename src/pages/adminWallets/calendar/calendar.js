import React from "react";

import {CalendarWrap} from './styled';

const Calendar = ({today, yesterday, week, month, twoWeeks, year}) => {
  return (
    <CalendarWrap>
      <div className="left">
        <button onClick={()=> today()}>Сегодня</button>
        <button onClick={()=> yesterday()}>Вчера</button>
        <button onClick={()=> week()}>Эта неделя</button>
        <button onClick={()=> twoWeeks()}>Последние две недели</button>
        <button onClick={()=> month()}>Этот месяц</button>
        <button onClick={()=> year()}>Этот год</button>
        <button>Прошлый год</button>
      </div>
    </CalendarWrap>
  )
}

export default Calendar;